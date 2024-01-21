import { db } from '@/lib/db';

const getContent = async (contentId: string) => {
    try {
        if (!contentId) {
            throw new Error('Invalid data');
        }
        const content = await db.content.findUnique({
            where: {
                id: contentId,
            },
        });
        if (!content) {
            throw new Error('Invalid data');
        }
        content.text = JSON.parse(content.text);
        return content;
    } catch (error) {
        console.log(error);
    }
};

export default getContent;
