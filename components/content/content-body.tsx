'use client';

import { TableBody, TableCell, TableRow } from '@/components/ui/table';
import { SafeContent } from '@/types';

interface ContentBodyProps {
    contents: SafeContent[] | undefined;
}

export const ContentBody = ({ contents }: ContentBodyProps) => {
    return (
        <TableBody>
            <TableRow className="shadow-md">
                <TableCell className="text-xs">1</TableCell>
                <TableCell>Paid</TableCell>
            </TableRow>
            <TableRow className="shadow-md">
                <TableCell className="text-xs">2</TableCell>
                <TableCell>Paid</TableCell>
            </TableRow>
            <TableRow className="shadow-md">
                <TableCell className="text-xs">3</TableCell>
                <TableCell>Paid</TableCell>
            </TableRow>
            <TableRow className="shadow-md">
                <TableCell className="text-xs">4</TableCell>
                <TableCell>Paid</TableCell>
            </TableRow>
            <TableRow className="shadow-md">
                <TableCell className="text-xs">5</TableCell>
                <TableCell>Paid</TableCell>
            </TableRow>
        </TableBody>
    );
};
