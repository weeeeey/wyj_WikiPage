import getCurrentProfile from '@/actions/getCurrentProfile';
import { Editor } from '@/components/editor/editor';
import { db } from '@/lib/db';
import { redirect } from 'next/navigation';

interface UpdateContentPageProps {
    params: {
        contentId: string;
    };
}

const UpdateContentPage = async ({ params }: UpdateContentPageProps) => {
    const { contentId } = params;
    const profile = await getCurrentProfile();
    const content = await db.content.findUnique({
        where: {
            id: contentId,
        },
    });
    if (!content) {
        return null;
    }
    if (profile.id !== content.profileId) {
        redirect('/');
    }
    return (
        <Editor
            action="수정"
            apiUrl={`/api/content/${contentId}`}
            initialText={content.text}
            initialTitle={content.title}
        />
    );
};

export default UpdateContentPage;
