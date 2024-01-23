export interface SafeContent {
    id: number;
    contentId: string;
    title: string;
}

export interface SafeContentList {
    id: string;
    title: string;
}

export interface SafeQueryData {
    totalCount: number | 0;
    contents: SafeContentList[] | [];
}

export interface usePageQueryProps {
    pageIdx: string;
}
