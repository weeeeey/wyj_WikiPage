'use client';
import { UploadEditor } from '@/components/upload/upload-editor';
import { EditorState } from 'draft-js';
import { useEffect, useState } from 'react';

const UploadContent = () => {
    const [isMounted, setIsMounted] = useState(false);
    const [editorState, setEditorState] = useState(EditorState.createEmpty());
    const [title, setTitle] = useState('');

    useEffect(() => {
        setIsMounted(true);
        return () => {
            setIsMounted(false);
        };
    }, []);

    const updateTextDescription = async (state: EditorState) => {
        await setEditorState(state);
    };
    const updataTitle = (data: string) => {
        setTitle(data);
    };
    return (
        <div>
            {isMounted && (
                <>
                    <UploadEditor
                        editorState={editorState}
                        updateTextDescription={updateTextDescription}
                        title={title}
                        updateTitle={updataTitle}
                    />
                    <div className="flex justify-end mt-4">
                        <button className="bg-white px-4 py-2 rounded-md text-sm">
                            업로드
                        </button>
                    </div>
                </>
            )}
        </div>
    );
};

export default UploadContent;
