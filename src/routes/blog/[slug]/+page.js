/** @type {import('./$types').PageLoad} */
export function load({ params }) {
  if (params.slug == "hello-world") {
    return {
      title: "Hello world!",
      content: "Welcome to the blog",
    };
  }
}