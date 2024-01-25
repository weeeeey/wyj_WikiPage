import getCurrentProfile from '@/actions/getCurrentProfile';
import { db } from '@/lib/db';
import { NextResponse } from 'next/server';

export async function GET(
    req: Request,
    { params }: { params: { contentId: string } }
) {
    try {
        const { contentId } = params;

        const content = await db.content.findUnique({
            where: {
                id: contentId,
            },
        });
        if (!content) {
            return new NextResponse('invalid data', { status: 400 });
        }
        return NextResponse.json(content);
    } catch (error) {
        console.log(error);
        return new NextResponse('internal error', { status: 500 });
    }
}

export async function PATCH(
    req: Request,
    { params }: { params: { contentId: string } }
) {
    try {
        const { contentId } = params;
        const profile = await getCurrentProfile();
        if (!profile) {
            return new NextResponse('Unathorized', { status: 401 });
        }
        const body = await req.json();
        const { title, text } = body;
        const content = await db.content.update({
            where: {
                profileId: profile.id,
                id: contentId,
            },
            data: {
                title,
                text,
            },
        });
        return NextResponse.json(content);
    } catch (error) {
        console.log('UPDATE_ERROR', error);
        return new NextResponse('INTERNAL_ERROR', { status: 500 });
    }
}

export async function DELETE(
    req: Request,
    { params }: { params: { contentId: string } }
) {
    try {
        const { contentId } = params;
        const profile = await getCurrentProfile();
        if (!profile) {
            return new NextResponse('Unathorized', { status: 401 });
        }
        await db.content.delete({
            where: {
                profileId: profile.id,
                id: contentId,
            },
        });
        return new NextResponse('Deleted', { status: 200 });
    } catch (error) {
        console.log('UPDATE_ERROR', error);
        return new NextResponse('INTERNAL_ERROR', { status: 500 });
    }
}
