import getContents from '@/actions/getContents';
import { ContentTable } from '@/components/content/content-table';

export default async function MainPage() {
    const { totalCount, contents } = await getContents(1);
    return (
        <main className="mb-20">
            <ContentTable totalCount={totalCount} initialContents={contents} />
        </main>
    );
}
