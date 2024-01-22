import { Editor } from '@/components/editor/editor';

const UploadContentPage = () => {
    return <Editor action="업로드" apiUrl="/api/upload" />;
};

export default UploadContentPage;
