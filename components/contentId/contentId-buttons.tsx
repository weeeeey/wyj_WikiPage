'use client';
import React, { useState } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AlignJustify, SquarePen, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { ContentIdBtn } from './contentId-btn';
import { Loading } from '../loading';

interface ContentIdButton {
    contentId: string;
    isAdmin: boolean;
}

export const ContentIdButton = ({ contentId, isAdmin }: ContentIdButton) => {
    const [isLoading, setIsLoading] = useState(false);
    const router = useRouter();

    const handleDelete = async (url: string) => {
        if (window.confirm('Are you sure you want to delete this content?')) {
            setIsLoading(true);
            try {
                const res = await axios.delete(url);
                if (res.status === 200) {
                    toast.success('Deleted', { position: 'top-center' });
                    router.push('/');
                    router.refresh();
                }
            } catch (error) {
                console.log(error);
            } finally {
                setIsLoading(false);
            }
        }
    };
    if (isLoading) {
        return <Loading />;
    }
    return (
        <div className="flex justify-center items-center gap-x-4">
            <ContentIdBtn icon={AlignJustify} isAdmin={true} url="/" />
            <ContentIdBtn
                icon={SquarePen}
                isAdmin={isAdmin}
                url={`/update/${contentId}`}
            />
            <ContentIdBtn
                icon={Trash2}
                isAdmin={isAdmin}
                url={`/api/content/${contentId}`}
                handleClick={handleDelete}
            />
        </div>
    );
};
