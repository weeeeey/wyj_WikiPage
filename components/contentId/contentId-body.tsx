'use client';
import { EditorState, convertFromRaw } from 'draft-js';
import draftToHtml from 'draftjs-to-html';
import { useEffect, useState } from 'react';

interface ContentIdBody {
    text: string;
}

export const ContentIdBody = ({ text }: ContentIdBody) => {
    const [htmlString, setHtmlString] = useState('');

    useEffect(() => {
        const markup = draftToHtml(JSON.parse(text));
        setHtmlString(markup);
    }, [text]);

    return (
        <div className="p-2">
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
    );
};
