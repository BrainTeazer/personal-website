// import type PageLoad
// export const prerender = true;

/** @type {import('./$types').PageLoad} */
export function load() {
  return {
    streamed: {
      ready: Promise.resolve(true),
    },
  };
}
