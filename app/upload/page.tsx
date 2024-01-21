'use client';
import { UploadEditor } from '@/components/upload/upload-editor';
import axios from 'axios';
import { EditorState, convertToRaw } from 'draft-js';
import { redirect, useRouter } from 'next/navigation';

import { useEffect, useState } from 'react';
import toast from 'react-hot-toast';

const UploadContent = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState('');
    const router = useRouter();

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    const updataTitle = (data: string) => {
        setTitle(data);
    };
    const handleSumbit = async () => {
        try {
            const text = JSON.stringify(
                convertToRaw(editorState.getCurrentContent())
            );
            const res = await axios.post('/api/upload', {
                title,
                text,
            });
            if (res.status === 200) {
                router.push(`/${res.data.id}`);
                toast.success('Success post');
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
                        updateTextDescription={async (v) => setEditorState(v)}
                        title={title}
                        updateTitle={updataTitle}
                    />
                    <div className="flex justify-end mt-4">
                        <button
                            className="bg-white px-4 py-2 rounded-md text-sm"
                            onClick={handleSumbit}
                        >
                            업로드
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default UploadContent;
