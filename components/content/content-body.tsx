import { TableBody } from '@/components/ui/table';
import { ContentRow } from './content-row';
import { SafeContentList } from '@/types';

interface ContentBodyProps {
    contents: SafeContentList[] | [];
}

type ContentType = {
    id: string;
    title: string;
};

export const ContentBody = ({ contents }: ContentBodyProps) => {
    return (
        <TableBody>
            {contents?.map((content: ContentType, idx) => (
                <ContentRow
                    key={content.id}
                    contentId={content.id}
                    id={idx + 1}
                    title={content.title}
                />
            ))}
        </TableBody>
    );
};
