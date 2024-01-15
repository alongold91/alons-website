'use server';

import { Post } from "./definitions";

export interface createNewPostData {
  headline: Post['headline'],
  description: Post['description'],
  imagePath: Post['imagePath'],
  categories: Post['categories'],
  content: Post['content']
}

export async function createNewPost(newPostData: createNewPostData ) {

      console.log(newPostData);
}