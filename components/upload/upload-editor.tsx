import { EditorState, convertToRaw } from 'draft-js';
import { Editor } from 'react-draft-wysiwyg';
import 'react-draft-wysiwyg/dist/react-draft-wysiwyg.css';

import { Input } from '../ui/input';

interface UploadEditorProps {
    editorState: EditorState;

    updateTextDescription: (state: EditorState) => Promise<void>;
    title: string;
    updateTitle: (data: string) => void;
}

export const UploadEditor = ({
    editorState,
    updateTextDescription,
    title,
    updateTitle,
}: UploadEditorProps) => {
    return (
        <div className="space-y-5">
            <Input
                placeholder="제목을 작성해주세요"
                value={title}
                onChange={(v) => updateTitle(v.target.value)}
            />
            <Editor
                placeholder="게시글을 작성해주세요"
                editorState={editorState}
                onEditorStateChange={updateTextDescription}
                localization={{ locale: 'ko' }}
                editorStyle={{
                    height: '400px',
                    width: '100%',
                    border: '3px solid lightgray',
                    padding: '20px',
                }}
            />
        </div>
    );
};
