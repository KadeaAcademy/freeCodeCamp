export default function splitArray<T>(arrayToSplit: T[], chunkSize: number) {
  const result: T[][] = [];
  for (let i = 0; i < arrayToSplit.length; i += chunkSize) {
    const chunk = arrayToSplit.slice(i, i + chunkSize);
    result.push(chunk);
  }
  return { result: result, size: result.length };
}
