import { db } from '@/lib/db';

const getContent = async (contentId: string) => {
    try {
        const content = await db.content.findUnique({
            where: {
                id: contentId,
            },
        });
        if (!content) {
            throw new Error('Invalid data');
        }
        return content;
    } catch (error) {
        console.log(error);
    }
};

export default getContent;
