



export const getStringWithTime = (): string => {
  const normalize = (num: number): string => num < 10 ? '0' + num : '' + num;
  const date = new Date();
  return `${normalize(date.getHours())}:${normalize(date.getMinutes())}:${normalize(date.getSeconds())}`;
}