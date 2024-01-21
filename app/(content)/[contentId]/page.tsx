import getContent from '@/actions/getContent';
import getCurrentProfile from '@/actions/getCurrentProfile';
import { ContentIdBody } from '@/components/contentId/contentId-body';
import { ContentIdButton } from '@/components/contentId/contentId-button';
import { ContentIdHeart } from '@/components/contentId/contentId-heart';
import { ContentIdTitle } from '@/components/contentId/contentId-title';

interface ContentPageProps {
    params: {
        contentId: string;
    };
}

const ContentPage = async ({ params }: ContentPageProps) => {
    const { contentId } = params;
    const content = await getContent(contentId);
    const profile = await getCurrentProfile();
    if (!content) {
        return null;
    }

    return (
        <div className="space-y-8">
            <ContentIdTitle
                title={content.title}
                timestamp={content.updatedAt.toISOString()}
            />
            <ContentIdBody text={content.text} />
            <ContentIdHeart likeCount={content.likeCount} />
            <ContentIdButton
                contentId={content.id}
                isAdmin={profile.id === content.profileId}
            />
        </div>
    );
};

export default ContentPage;
