export const addEllipsis = (text) => {
  if (text.length > 40) {
    return text.substring(0, 40) + "..";
  }
  return text;
};
