export const scrollIntoView = ({ currentTarget }: any) => {
  const scrollToElement = document.querySelector(
    currentTarget.getAttribute("href"),
  );

  if (!scrollToElement) return;

  scrollToElement.scrollIntoView({
    behavior: "smooth",
  });
};
