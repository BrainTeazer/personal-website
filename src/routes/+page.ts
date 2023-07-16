/** @type {import('./$types').PageLoad} */
export const load: PageLoad = () => {
  return {
    streamed: {
      ready: Promise.resolve(true),
    },
    //     two: Promise.resolve(2),
    //     streamed: {
    //         three: new Promise((fulfil) => {
    //             setTimeout(() => {
    //                 fulfil(3)
    //             }, 1000);
    //         })
    //     }
  };
};
