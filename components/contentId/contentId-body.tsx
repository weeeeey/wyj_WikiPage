'use client';
import { SafeContentList } from '@/types';
import draftToHtml from 'draftjs-to-html';
import { useEffect, useState } from 'react';

interface ContentIdBody {
    text: string;
    contents: SafeContentList[];
}

export const ContentIdBody = ({ text, contents }: ContentIdBody) => {
    const [htmlString, setHtmlString] = useState('');

    useEffect(() => {
        const parsedText = JSON.parse(text);
        const replacedText = contents.reduce((acc, { id, title }) => {
            const link = `<a href="/${id}" style="text-decoration: underline; color: blue;">${title}</a>`;
            return acc.replace(new RegExp(title, 'g'), link);
        }, draftToHtml(parsedText));

        setHtmlString(replacedText);
    }, [text, contents]);

    return (
        <div className="p-2">
            <div dangerouslySetInnerHTML={{ __html: htmlString }} />
        </div>
    );
};
