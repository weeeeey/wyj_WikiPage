import getCurrentProfile from '@/actions/getCurrentProfile';
import { UploadButton } from './upload-button';

export const Upload = async () => {
    const profile = await getCurrentProfile();
    return (
        <div className="flex justify-end my-4 ">
            <UploadButton prodileId={profile.id} />
        </div>
    );
};
