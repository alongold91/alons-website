'use server';
import { revalidatePath } from "next/cache";
import { Post } from "./definitions";
import { redirect } from 'next/navigation';

export interface createNewPostData {
  headline: Post['headline'],
  description: Post['description'],
  imagePath: Post['imagePath'],
  categories: Post['categories'],
  content: Post['content']
}

export async function createNewPost(newPostData: createNewPostData ) {
      console.log(newPostData);

      revalidatePath('/blog');
      redirect('/blog');

}