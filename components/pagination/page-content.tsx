'use client';
import { SafeContentList } from '@/types';
import { useEffect, useState } from 'react';
import { PageItem } from './page-item';

interface PageContentProps {
    contents: SafeContentList[] | undefined;
    pageTotalCount: number;
}

export function PageContent({ contents, pageTotalCount }: PageContentProps) {
    const [selected, setSelected] = useState(1);
    const [totalPage, setTotalPage] = useState([1]);
    const onClick = (page: number) => {
        setSelected(page);
    };
    useEffect(() => {
        if (pageTotalCount) {
            const totalLength = Math.ceil(pageTotalCount / 5);
            const pages = Array.from(
                { length: totalLength },
                (_, index) => index + 1
            );

            setTotalPage(pages);
        }
    }, [pageTotalCount]);

    return (
        <div className="flex justify-center gap-x-2 items-center">
            {totalPage.map((page: number) => (
                <PageItem
                    key={page}
                    currentPage={page}
                    onClick={onClick}
                    selected={selected}
                />
            ))}
        </div>
    );
}
