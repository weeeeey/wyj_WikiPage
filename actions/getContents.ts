import { db } from '@/lib/db';
import axios from 'axios';

const getContents = async () => {
    try {
        const res = await db.content.findMany({
            select: {
                id: true,
                title: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
        });
        return res;
    } catch (error) {
        console.log(error);
    }
};

export default getContents;
