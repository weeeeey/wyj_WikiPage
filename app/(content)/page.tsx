import { ContentTable } from '@/components/content/content-table';
import { PageContent } from '@/components/pagination/page-content';
import { Upload } from '@/components/upload/upload';

export default function MainPage() {
    return (
        <>
            <ContentTable />
            <Upload />
            <PageContent />
        </>
    );
}
