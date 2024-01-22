'use client';

import axios from 'axios';
import { EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import { useRouter } from 'next/navigation';
import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';
import { UploadEditor } from '../upload/upload-editor';
import { EditorButton } from './editor-button';

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

    const handleSumbit = async () => {
        try {
            const text = JSON.stringify(
                convertToRaw(editorState.getCurrentContent())
            );
            const method = action === '수정' ? 'patch' : 'post';
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
        }
    };
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