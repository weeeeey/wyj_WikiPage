import React from 'react';
import { cn } from '@/lib/utils';

interface PageItemProps {
    selected: number;
    currentPage: number;
    onClick: (p: number) => void;
}
export const PageItem = ({ currentPage, onClick, selected }: PageItemProps) => {
    return (
        <button
            onClick={() => onClick(currentPage)}
            className={cn(
                'px-3 py-1 text-lg',
                selected === currentPage && ' bg-slate-300 rounded-lg '
            )}
        >
            {currentPage}
        </button>
    );
};
