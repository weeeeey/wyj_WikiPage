'use client';
import { Button } from '../ui/button';
import { useRouter } from 'next/navigation';
import { useUser } from '@clerk/nextjs';

export const UploadButton = () => {
    const router = useRouter();
    const { isSignedIn } = useUser();
    const handleClick = () => {
        if (!isSignedIn) {
            router.push('/sign-in');
        }
        router.push('/upload');
    };

    return (
        <div className="flex justify-end my-4 ">
            <Button variant="secondary" onClick={handleClick}>
                글 작성
            </Button>
        </div>
    );
};
