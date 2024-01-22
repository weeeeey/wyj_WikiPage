'use client';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { AlignJustify, SquarePen, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
import { cn } from '@/lib/utils';
interface ContentIdButton {
    contentId: string;
    isAdmin: boolean;
}

export const ContentIdButton = ({ contentId, isAdmin }: ContentIdButton) => {
    const router = useRouter();

    const handeleList = () => {
        router.push('/');
    };
    const handleUpdate = () => {
        router.push(`/update/${contentId}`);
    };
    const handleDelete = async () => {
        if (window.confirm('Are you sure you want to delete this content?')) {
            try {
                const res = await axios.delete(`/api/content/${contentId}`);
                if (res.status === 200) {
                    toast.success('Deleted', { position: 'top-center' });
                    router.push('/');
                    router.refresh();
                }
            } catch (error) {
                console.log(error);
            }
        }
    };
    return (
        <div className="flex justify-center items-center gap-x-4">
            <button onClick={handeleList}>
                <AlignJustify className="w-6 h-6" />
            </button>
            <button
                onClick={handleUpdate}
                className={cn(isAdmin ? 'block' : 'hidden')}
            >
                <SquarePen className="w-6 h-6" />
            </button>
            <button
                onClick={handleDelete}
                className={cn(isAdmin ? 'block' : 'hidden')}
            >
                <Trash2 className="w-6 h-6" />
            </button>
        </div>
    );
};
