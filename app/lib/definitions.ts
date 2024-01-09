export interface Post {
    id: string;
    headline: string;
    description?: string;
    content: string;
    imageURL: string;
    categories: string[];
    comments: Comments;
    publishementDate: string;
    lastEdited: string;
}

export interface Comments {
    fullName: string;
    contect: string;
    publishementDate: string;
}

// TODO: CREATE TABLE
// CREATE EXTENSION IF NOT EXISTS "uuid-ossp";
// CREATE TABLE IF NOT EXISTS posts (
// id UUID DEFAULT uuid_generate_v4() PRIMARY KEY,
// headline VARCHAR(255) NOT NULL,
// description VARCHAR(255) NULL,
// content: TEXT NOT NULL,
// imageURL: VARCHAR(255) NOT NULL,
// categories: TEXT [],
// comments: figure out how to make it
// publishmentDate: NUMBER,
// lastEdited: NUMBER
// )
