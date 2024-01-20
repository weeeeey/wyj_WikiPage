import getCurrentProfile from '@/actions/getCurrentProfile';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

interface DataType {
    title: string;
    text: string;
}

export async function POST(req: Request) {
    try {
        const profile = await getCurrentProfile();
        if (!profile) {
            return new NextResponse('Unauthorized', { status: 401 });
        }
        const body = await req.json();
        const { title, text }: DataType = body;
        if (title.length <= 0 || text.length <= 0) {
            return new NextResponse('Invalid data', { status: 400 });
        }

        const newContent = await db.content.create({
            data: {
                profileId: profile.id,
                text,
                title,
            },
        });
        return NextResponse.json(newContent);
    } catch (error) {
        console.log('CONTENT_UPLOAD_ERROR', error);
        return new NextResponse('INTERNAL_ERROR', { status: 500 });
    }
}
