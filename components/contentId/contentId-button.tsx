'use client';
import React from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import { SquarePen, Trash2 } from 'lucide-react';
import { toast } from 'react-hot-toast';
interface ContentIdButton {
    contentId: string;
    isAdmin: boolean;
}

export const ContentIdButton = ({ contentId, isAdmin }: ContentIdButton) => {
    const router = useRouter();

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
        <>
            {isAdmin && (
                <div className="flex justify-center items-center gap-x-4">
                    <button onClick={handleUpdate}>
                        <SquarePen className="w-6 h-6" />
                    </button>
                    <button onClick={handleDelete}>
                        <Trash2 className="w-6 h-6" />
                    </button>
                </div>
            )}
        </>
    );
};