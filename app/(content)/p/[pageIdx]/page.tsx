'use client';
import { ContentTable } from '@/components/content/content-table';
import { Loading } from '@/components/loading';
import { usePageQuery } from '@/lib/use-page-query';

import React from 'react';

interface PageIdxPageProps {
    params: {
        pageIdx: string;
    };
}

const PageIdxPage = ({ params }: PageIdxPageProps) => {
    const { pageIdx } = params;
    const { totalCount, contents, isError, isLoading } = usePageQuery({
        pageIdx,
    });
    if (isLoading) {
        return <Loading />;
    }
    if (isError) {
        return <div>Error</div>;
    }
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
