'use client';
import { useEffect, useState } from 'react';
import { PageItem } from './page-item';

interface PageContentProps {
    pageTotalCount: number;
    selectedPage: number;
}

export function PageContent({
    pageTotalCount,
    selectedPage,
}: PageContentProps) {
    const [totalPage, setTotalPage] = useState([1]);
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
                    selected={selectedPage}
                />
            ))}
        </div>
    );
}
