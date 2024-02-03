export default function addCommas(num: number) {
  const numStr = String(num);
  const numLength = numStr.length;

  if (numLength <= 3) {
    return numStr;
  }

  let firstChunkLength = numLength % 3;
  if (firstChunkLength === 0) {
    firstChunkLength = 3;
  }

  let result = numStr.substring(0, firstChunkLength);
  for (let i = firstChunkLength; i < numLength; i += 3) {
    result += "," + numStr.substring(i, i + 3);
  }

  return result;
}
