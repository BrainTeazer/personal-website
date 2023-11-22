export const formatDate = (date: Date) => {
  const isoDate: string = date.toISOString().split("T")[0];
  return `${isoDate.substring(5, 7)}/${isoDate.substring(0, 4)}`;
};
