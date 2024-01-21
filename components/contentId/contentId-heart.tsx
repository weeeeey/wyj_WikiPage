import { Button } from '../ui/button';
import { Heart } from 'lucide-react';

interface ContentHeartProps {
    likeCount: number;
}

export const ContentIdHeart = ({ likeCount }: ContentHeartProps) => {
    return (
        <div className="flex flex-col justify-center items-center">
            <button className="bg-slate-300 px-2 py-1  rounded-md">
                <Heart className="w-6 h-6 " />
                <div className="text-sm">{likeCount}</div>
            </button>
        </div>
    );
};
