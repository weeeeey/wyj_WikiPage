import getContent from '@/actions/getContent';
import getContents from '@/actions/getContents';
import getCurrentProfile from '@/actions/getCurrentProfile';
import { ContentIdBody } from '@/components/contentId/contentId-body';
import { ContentIdButton } from '@/components/contentId/contentId-button';
import { ContentIdTitle } from '@/components/contentId/contentId-title';

interface ContentPageProps {
    params: {
        contentId: string;
    };
}

const ContentPage = async ({ params }: ContentPageProps) => {
    const { contentId } = params;
    const content = await getContent(contentId);
    const { contents } = await getContents();
    const profile = await getCurrentProfile();
    if (!content || !contents) {
        return null;
    }

    return (
        <div className="space-y-8">
            <ContentIdTitle
                title={content.title}
                timestamp={content.updatedAt.toISOString()}
            />
            <ContentIdBody text={content.text} contents={contents} />
            <ContentIdButton
                contentId={content.id}
                isAdmin={profile.id === content.profileId}
            />
        </div>
    );
};

export default ContentPage;
