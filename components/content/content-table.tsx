import { Table } from '@/components/ui/table';
import { ContentBody } from './content-body';
import { ContentHead } from './content-head';
import { SafeContentList } from '@/types';

import { PageContent } from '@/components/pagination/page-content';
import { Upload } from '@/components/upload/upload';

interface ContentTableProps {
    totalCount: number;
    initialContents: SafeContentList[] | [];
    selectedPage: number;
}

export const ContentTable = ({
    totalCount,
    initialContents,
    selectedPage,
}: ContentTableProps) => {
    return (
        <>
            <Table>
                <ContentHead />
                <ContentBody contents={initialContents} />
            </Table>
            <Upload />
            <PageContent
                pageTotalCount={totalCount}
                selectedPage={selectedPage}
            />
        </>
    );
};
