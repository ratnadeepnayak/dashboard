export const sumArrayValues = (array) => {
  const sum = array.reduce((partialSum, a) => partialSum + a, 0);
  return sum;
};
