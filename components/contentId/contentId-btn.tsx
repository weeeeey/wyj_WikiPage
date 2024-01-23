'use client';
import { cn } from '@/lib/utils';
import { LucideIcon } from 'lucide-react';
import { useRouter } from 'next/navigation';
import React from 'react';

interface ContentIdBtnProps {
    icon: LucideIcon;
    handleClick?: (url: string) => void;
    url: string;
    isAdmin: boolean;
}

export const ContentIdBtn = ({
    icon: Icon,
    isAdmin,
    handleClick,
    url,
}: ContentIdBtnProps) => {
    const router = useRouter();

    const onClickHandler = () => {
        if (handleClick) {
            handleClick(url);
        } else {
            router.push(url);
        }
    };
    return (
        <button
            className={cn(isAdmin ? 'block' : 'hidden')}
            onClick={onClickHandler}
        >
            {<Icon className="w-6 h-6" />}
        </button>
    );
};
