export const getImagePath = (brand: string, model: string) => {
  const name = `${brand} ${model}`;
  const formattedName = name.split(' ').join('-').toLowerCase();

  return `/../static/images/${formattedName}.jpg`;
};
