'use client';

import { TableCell, TableRow } from '@/components/ui/table';
import { SafeContent } from '@/types';
import { useRouter } from 'next/navigation';

export const ContentRow = ({ id, contentId, title }: SafeContent) => {
    const router = useRouter();

    const onClick = () => {
        router.push(`/${contentId}`);
    };
    return (
        <TableRow className="shadow-md">
            <TableCell className="text-xs">{id}</TableCell>
            <TableCell className="cursor-pointer" onClick={onClick}>
                {title}
            </TableCell>
        </TableRow>
    );
};
