import { Table } from '@/components/ui/table';
import { ContentBody } from './content-body';
import { ContentHead } from './content-head';

import getContents from '@/actions/getContents';

export const ContentTable = async () => {
    const contents = await getContents();
    return (
        <Table>
            <ContentHead />
            <ContentBody contents={contents} />
        </Table>
    );
};
