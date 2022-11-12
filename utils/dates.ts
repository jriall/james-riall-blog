export const formatDate = (datestring: string): string => {
  console.log(datestring);
  return new Date(datestring).toLocaleDateString("en-us", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};
