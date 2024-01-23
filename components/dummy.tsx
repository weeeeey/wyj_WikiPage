'use client';
import getContents from '@/actions/getContents';
import { useQuery } from '@tanstack/react-query';
import React from 'react';

const fetchFn = async (pageIdx: number) => {
    try {
        const res = await fetch(`/api/page/${pageIdx}`);
        if (res.ok) {
            return res.json();
        }
    } catch (error) {
        console.log(error);
    }
};

export const Dummy = ({ pageIdx }: { pageIdx: number }) => {
    const { data, isLoading } = useQuery({
        queryKey: ['page', pageIdx],
        queryFn: async () => {
            const data = await fetchFn(pageIdx);
            return data;
        },
    });
    if (isLoading) {
        return <div>Loading</div>;
    }
    console.log(data);
    return <div>dummy</div>;
};
