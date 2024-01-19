import { TableHead, TableHeader, TableRow } from '@/components/ui/table';

export const ContentHead = () => {
    return (
        <TableHeader>
            <TableRow>
                <TableHead className="w-20 pt-1">번호</TableHead>
                <TableHead>제목</TableHead>
            </TableRow>
        </TableHeader>
    );
};
