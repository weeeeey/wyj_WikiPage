import getContents from '@/actions/getContents';
import { ContentTable } from '@/components/content/content-table';
import { PageContent } from '@/components/pagination/page-content';
import { Upload } from '@/components/upload/upload';

export default async function MainPage() {
    const { totalCount, contents } = await getContents();
    return (
        <main className="mb-20">
            <ContentTable contents={contents} />
            <Upload />
            <PageContent contents={contents} pageTotalCount={totalCount} />
        </main>
    );
}
