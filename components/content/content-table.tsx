import { Table } from '@/components/ui/table';
import { ContentBody } from './content-body';
import { ContentHead } from './content-head';
import { SafeContentList } from '@/types';

interface ContentTableProps {
    contents: SafeContentList[] | undefined;
}

export const ContentTable = ({ contents }: ContentTableProps) => {
    return (
        <Table>
            <ContentHead />
            <ContentBody contents={contents} />
        </Table>
    );
};
