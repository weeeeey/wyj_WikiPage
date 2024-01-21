import { TableBody } from '@/components/ui/table';
import { ContentRow } from './content-row';
import getContents from '@/actions/getContents';

type ContentType = {
    id: string;
    title: string;
};

export const ContentBody = async () => {
    const contents = await getContents();

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
