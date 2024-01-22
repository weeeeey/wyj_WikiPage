import getContents from '@/actions/getContents';
import { ContentTable } from '@/components/content/content-table';
import React from 'react';

interface PageIdxPageProps {
    params: {
        pageIdx: string;
    };
}

const PageIdxPage = async ({ params }: PageIdxPageProps) => {
    const { pageIdx } = params;
    const { contents, totalCount } = await getContents(parseInt(pageIdx));
    return (
        <main className="mb-20">
            <ContentTable
                totalCount={totalCount}
                initialContents={contents}
                selectedPage={parseInt(pageIdx)}
            />
        </main>
    );
};

export default PageIdxPage;
