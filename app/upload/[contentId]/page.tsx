import { db } from '@/lib/db';

interface UploadContentProps {
    params: {
        contentId: string;
    };
}

const UploadContent = async ({ params }: UploadContentProps) => {
    const { contentId } = params;
    const content = await db.content.findUnique({
        where: {
            id: contentId,
        },
    });
    if (!content) {
        return null;
    }
    return <div>UploadContent</div>;
};

export default UploadContent;
