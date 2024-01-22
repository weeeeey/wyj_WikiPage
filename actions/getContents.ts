import { db } from '@/lib/db';

const getContents = async (page: number = 0, take?: number) => {
    try {
        const skip = page !== 0 ? 5 : 0;
        const totalCount = await db.content.count();
        const contents = await db.content.findMany({
            select: {
                id: true,
                title: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take,
            skip: skip * page,
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
