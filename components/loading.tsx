import { ClipLoader } from 'react-spinners';

export const Loading = () => {
    return (
        <div className="w-full h-full flex justify-center items-center">
            <ClipLoader />
        </div>
    );
};
