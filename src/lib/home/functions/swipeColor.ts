export const swipeColor = (node: any, params: any) => {
  const { duration, delay, easing } = params || {};
  const { color } = window.getComputedStyle(node);
  return {
    duration,
    delay,
    easing,
    css(t: number) {
      if (t > 0.5) {
        // transform t from range [0.5, 1] into percentage [0, 100]
        // t: 0.5 -> 1
        // u: 0 -> 0.5
        const u = t - 0.5;
        // percentage: 0 -> 100
        const percentage = u * 200;
        return `background: linear-gradient(to right, transparent 0, ${percentage}%, ${color} ${percentage}%); color: ${color}`;
      } else {
        // transform t from range [0, 0.5] into percentage [0, 100]
        // t: 0 -> 0.5
        // percentage: 0 -> 100
        const percentage = t * 200;
        return `background: linear-gradient(to right, ${color} 0, ${percentage}%, transparent ${percentage}%); color: transparent`;
      }
    },
  };
};
