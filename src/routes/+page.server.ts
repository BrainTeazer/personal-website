import type { PageServerLoad } from "./$types";

export const load: PageServerLoad = () => {
  return {
    streamed: {
      ready: Promise.resolve(true),
    },
  };
};
