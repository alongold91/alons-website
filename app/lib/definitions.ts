export interface Post {
    id: string;
    headline: string;
    description: string | null;
    content: string;
    imagePath: string;
    categories: string[];
    publishmentDate: number;
    lastEdited: number | null;
}

export interface Comment {
    id: string;
    writerName: string;
    content: string;
    publishmentDate: number;
}

