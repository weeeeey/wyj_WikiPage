import { db } from '@/lib/db';

const getContents = async (page: number = 0) => {
    try {
        const totalCount = await db.content.count();
        const skip = page === 0 ? 0 : 5;
        const take = page === 0 ? totalCount : 5;
        const contents = await db.content.findMany({
            select: {
                id: true,
                title: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take,
            skip: skip * (page - 1),
        });
        return { totalCount, contents };
    } catch (error) {
        console.log(error);
        return {
            totalCount: 0,
            contents: [],
        };
    }
};

export default getContents;
