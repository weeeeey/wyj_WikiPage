'use client';

import axios from 'axios';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UploadEditor } from '../upload/upload-editor';
import { EditorButton } from './editor-button';
import { Loading } from '../loading';
interface EditorProps {
    initialText?: string;
    initialTitle?: string;
    apiUrl: string;
    action: string;
}

export const Editor = ({
    initialText,
    initialTitle = '',
    apiUrl,
    action,
}: EditorProps) => {
    const [isMounted, setIsMounted] = useState(false);
    const [isLoading, setIsLoading] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState(initialTitle);
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);
    useEffect(() => {
        if (initialText) {
            const contentState = convertFromRaw(JSON.parse(initialText));
            const editorState = EditorState.createWithContent(contentState);
            setEditorState(editorState);
        }
    }, [initialText]);

    const updataTitle = (data: string) => {
        setTitle(data);
    };

    const invalidDate = () => {
        let wanrning = '';
        let isAvail = true;
        const textLenght = editorState
            .getCurrentContent()
            .getPlainText().length;
        if (title.length <= 0) {
            wanrning = '제목을 입력하세요';
            isAvail = false;
        } else if (textLenght <= 0) {
            wanrning = '텍스트를 입력하세요';
            isAvail = false;
        }
        return {
            wanrning,
            isAvail,
        };
    };

    const handleSumbit = async () => {
        const text = JSON.stringify(
            convertToRaw(editorState.getCurrentContent())
        );
        const method = action === '수정' ? 'patch' : 'post';
        setIsLoading(true);
        try {
            const { isAvail, wanrning } = invalidDate();
            if (!isAvail) {
                window.alert(wanrning);
                throw new Error('invalid data');
            }
            const res = await axios(`${apiUrl}`, {
                method: method,
                url: apiUrl,
                data: {
                    title,
                    text,
                },
            });
            if (res.status === 200) {
                router.push(`/${res.data.id}`);
                toast.success('Success');
                router.refresh();
            }
        } catch (error) {
            console.log(error);
        } finally {
            setIsLoading(false);
        }
    };
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div>
            {isMounted && (
                <>
                    <UploadEditor
                        editorState={editorState}
                        title={title}
                        updateTextDescription={async (v) => setEditorState(v)}
                        updateTitle={updataTitle}
                    />
                    <EditorButton action={action} handleSubmit={handleSumbit} />
                </>
            )}
        </div>
    );
};
