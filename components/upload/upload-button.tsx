'use client';
import { useRouter } from 'next/navigation';
import { Button } from '../ui/button';

interface UploadButtonProps {
    prodileId: string;
}

export const UploadButton = ({ prodileId }: UploadButtonProps) => {
    const router = useRouter();

    const onClick = () => {
        if (!prodileId) {
            router.push('/sign-in');
        }
        router.push('/upload');
    };
    return (
        <>
            <Button variant="secondary" onClick={onClick}>
                글 작성
            </Button>
        </>
    );
};
