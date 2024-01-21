'use client';
import { Editor, EditorState, convertFromRaw, convertToRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useEffect, useState } from 'react';

interface ContentIdBody {
    text: any;
}

export const ContentIdBody = ({ text }: ContentIdBody) => {
    const [htmlString, setHtmlString] = useState('');

    useEffect(() => {
        const markup = draftToHtml(text);
        setHtmlString(markup);
    }, []);

    return (
        <div>
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
    );
};
