import { Table } from '@/components/ui/table';
import { ContentBody } from './content-body';
import { ContentHead } from './content-head';

export const ContentTable = () => {
    return (
        <Table>
            <ContentHead />
            <ContentBody />
        </Table>
    );
};
