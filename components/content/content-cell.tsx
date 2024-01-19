'use client';

import { TableCell, TableRow } from '@/components/ui/table';
import { SafeContent } from '@/types';
import { useRouter } from 'next/navigation';

export const ContentCell = ({ id, title }: SafeContent) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/${id}`);
    };
    return (
        <TableRow className="shadow-md" onClick={onClick}>
            <TableCell className="text-xs">{id}</TableCell>
            <TableCell>{title}</TableCell>
        </TableRow>
    );
};
