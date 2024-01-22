import React from 'react';
import { PageItem } from './page-item';

interface PageContainerProps {
    onClick: (page: number) => void;
    totalPage: number[];
    selected: number;
}

export const PageContainer = ({
    onClick,
    totalPage,
    selected,
}: PageContainerProps) => {
    return (
        <div className="flex justify-center gap-x-2 items-center">
            {totalPage.map((page: number) => (
                <PageItem key={page} currentPage={page} selected={selected} />
            ))}
        </div>
    );
};
