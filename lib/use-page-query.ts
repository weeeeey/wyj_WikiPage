'use client';

import { SafeQueryData, usePageQueryProps } from '@/types';
import { useQuery } from '@tanstack/react-query';

const fetchFn = async (pageIdx: string): Promise<SafeQueryData | undefined> => {
    try {
        const res = await fetch(`/api/page/${pageIdx}`);
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export const usePageQuery = ({ pageIdx }: usePageQueryProps) => {
    const { data, isLoading, isError } = useQuery({
        queryKey: ['page', pageIdx],
        queryFn: async () => {
            const data = await fetchFn(pageIdx);
            return data;
        },
    });
    return {
        totalCount: data ? data.totalCount : 0,
        contents: data ? data.contents : [],
        isError,
        isLoading,
    };
};
