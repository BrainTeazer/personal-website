import type { Post } from "$lib/posts/data/post";

export const prerender = true;

export async function load({ fetch }) {
  const response = await fetch("/api/posts");
  const posts: Post[] = await response.json();
  return { posts };
}
