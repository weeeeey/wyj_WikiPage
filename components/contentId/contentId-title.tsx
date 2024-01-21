import { format, fromUnixTime } from 'date-fns';
interface ContentIdTitle {
    title: string;
    timestamp: string;
}

export const ContentIdTitle = ({ title, timestamp }: ContentIdTitle) => {
    const timeDate = timestamp.split('T');
    return (
        <div className=" py-2 px-3 bg-slate-300 border border-y-2 border-y-slate-400 flex justify-between items-center">
            <h3 className="text-xl font-semibold">{title}</h3>
            <div className="font-light text-sm">
                <span>{timeDate[0]} </span>
                <span>{timeDate[1].slice(0, 5)}</span>
            </div>
        </div>
    );
};
