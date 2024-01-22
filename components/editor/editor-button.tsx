import React from 'react';

interface EditorButtonProps {
    handleSubmit: () => void | Promise<void>;
    action: string;
}

export const EditorButton = ({ handleSubmit, action }: EditorButtonProps) => {
    return (
        <div className="flex justify-end mt-4">
            <button
                className="bg-white px-4 py-2 rounded-md text-sm"
                onClick={handleSubmit}
            >
                {action}
            </button>
        </div>
    );
};
