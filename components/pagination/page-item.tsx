'use client';
import React from 'react';
import { cn } from '@/lib/utils';
import Link from 'next/link';

interface PageItemProps {
    selected: number;
    currentPage: number;
}
export const PageItem = ({ currentPage, selected }: PageItemProps) => {
    return (
        <Link
            href={`/p/${currentPage}`}
            className={cn(
                'px-3 py-1 text-lg',
                selected === currentPage && ' bg-slate-300 rounded-lg '
            )}
        >
            {currentPage}
        </Link>
    );
};
