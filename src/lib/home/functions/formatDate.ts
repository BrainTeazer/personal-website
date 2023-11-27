export const formatDate = (date: Date) => {
  if (date == null) return "Present";

  // padStart pads string with given string until it matches length provided (in this case 2)
  const month: string = (date.getMonth() + 1).toString().padStart(2, "0");

  const year: string = date.getFullYear().toString();

  return `${month}/${year}`;
};
