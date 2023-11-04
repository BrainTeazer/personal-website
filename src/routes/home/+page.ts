/** @type {import('./$types').PageLoad} */
export const load: PageLoad = () => {
  return {
    streamed: {
      ready: Promise.resolve(true),
    },
  };
};
