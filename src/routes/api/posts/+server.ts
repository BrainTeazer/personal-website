import { json } from "@sveltejs/kit";
import type { Post } from "$lib/posts/data/post";

async function getPosts() {
  let posts: Post[] = [];

  // get path of all blog-posts
  const paths = import.meta.glob("/src/lib/posts/data/*.md", { eager: true });

  for (const path in paths) {
    // get and store metadata of posts

    const file = paths[path];
    const slug = path.split("/").at(-1)?.replace(".md", "");

    if (file && typeof file === "object" && "metadata" in file && slug) {
      const metadata = file.metadata as Omit<Post, "slug">;

      const post = { ...metadata, slug } satisfies Post;
      post.published && posts.push(post);
    }
  }

  // sort posts by newest
  if (posts.length > 1) {
    posts = posts.sort(
      (first, second) =>
        new Date(second.date).getTime() - new Date(first.date).getTime(),
    );
  }

  return posts;
}

export async function GET() {
  const posts = await getPosts();
  return json(posts);
}
