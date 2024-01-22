import getContents from '@/actions/getContents';
import React from 'react';

interface PageIdxPageProps {
    params: {
        pageIdx: string;
    };
}

const PageIdxPage = async ({ params }: PageIdxPageProps) => {
    const { pageIdx } = params;
    const { contents } = await getContents(parseInt(pageIdx));
    return <div>PageIdxPage</div>;
};

export default PageIdxPage;
