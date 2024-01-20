import { db } from '@/lib/db';

interface ContentPageProps {
    params: {
        contentId: string;
    };
}

const ContentPage = async ({ params }: ContentPageProps) => {
    const { contentId } = params;
    const content = await db.content.findUnique({
        where: {
            id: contentId,
        },
    });
    if (!content) {
        return null;
    }

    return <div>{content.id}</div>;
};

export default ContentPage;
