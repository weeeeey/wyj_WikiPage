import { db } from '@/lib/db';

const getContents = async () => {
    try {
        const contents = await db.content.findMany({
            select: {
                id: true,
                title: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return contents;
    } catch (error) {
        console.log(error);
    }
};

export default getContents;
