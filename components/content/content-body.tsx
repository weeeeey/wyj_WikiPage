import getContents from '@/actions/getContents';
import { TableBody } from '@/components/ui/table';
import { ContentRow } from './content-row';

export const ContentBody = async () => {
    const contents = await getContents();

    return (
        <TableBody>
            {contents?.map((content) => (
                <ContentRow
                    key={content.id}
                    id={content.id}
                    title={content.title}
                />
            ))}
        </TableBody>
    );
};
