import { error } from "@sveltejs/kit";

export const prerender = true;

/** @type {import('./$types').PageLoad} */
export async function load({ params }) {
  try {
    // return the slug
    return {
      content: `${params.slug}`,
    };
  } catch (e) {
    throw error(404, `Could not find ${params.slug}`);
  }
}
