import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { pageIdx: number } }
) {
    try {
        const { pageIdx } = params;
        const totalCount = await db.content.count();

        if (pageIdx <= 0 || pageIdx > Math.ceil(totalCount / 5)) {
            return new NextResponse('Not found', { status: 404 });
        }
        const contents = await db.content.findMany({
            select: {
                id: true,
                title: true,
            },
            orderBy: {
                createdAt: 'desc',
            },
            take: 5,
            skip: 5 * (pageIdx - 1),
        });

        return NextResponse.json({ contents, totalCount });
    } catch (error) {
        console.log(error);
        return new NextResponse('internal error', { status: 500 });
    }
}
