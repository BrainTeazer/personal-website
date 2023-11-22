export const scrollIntoView = ({ currentTarget }: any) => {
  event?.preventDefault();
  const scrollToElement = document.querySelector(currentTarget.getAttribute("href"));

  if (!scrollToElement) return;

  scrollToElement.scrollIntoView({
    behavior: "smooth",
  });
};
