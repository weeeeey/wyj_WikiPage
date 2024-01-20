'use client';

import { TableCell, TableRow } from '@/components/ui/table';
import { SafeContent } from '@/types';
import { useRouter } from 'next/navigation';

export const ContentRow = ({ id: contentId, title }: SafeContent) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/${contentId}`);
    };
    return (
        <TableRow className="shadow-md" onClick={onClick}>
            <TableCell className="text-xs">{contentId.slice(0, 2)}</TableCell>
            <TableCell>{title}</TableCell>
        </TableRow>
    );
};
