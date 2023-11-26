export const swipeColor = (node: any, params: any) => {
  const { duration, delay, easing } = params || {};
  const color = "#000000";
  return {
    duration,
    delay,
    easing,
    css(t: number) {
      // transform t from range [0, 0.5] into percentage [0, 100]
      // t: 0 -> 0.5
      // percentage: 0 -> 100
      const percentage = t * 200;
      return `background: linear-gradient(to right, ${color} 0, ${percentage}%, transparent ${percentage}%); color: transparent`;
    },
  };
};
