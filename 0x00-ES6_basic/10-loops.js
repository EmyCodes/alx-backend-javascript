export default function appendToEachArrayValue(array, appendString) {
  const arrayToBeUpdated = [];

  for (const idx of array) {
    const value = appendString + idx;
    arrayToBeUpdated.push(value);
    // array[idx] = appendString + value;
  }

  return arrayToBeUpdated;
}
