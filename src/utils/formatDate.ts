export type DateFormat = 'YYYY.MM.DD' | 'YYYY.MM';

// eslint-disable-next-line unused-imports/no-unused-vars
const convToTwoDigitString = (value: number): string =>
  10 < value ? String(value) : '0' + String(value);

export const formatDate = (dateString: string, format: DateFormat) => {
  const date = new Date(dateString);

  const convToTwoDigitString = (value: number): string =>
    10 < value ? String(value) : '0' + String(value);
  return format === 'YYYY.MM.DD'
    ? `${date.getFullYear()}.${convToTwoDigitString(
        date.getMonth() + 1
      )}.${convToTwoDigitString(date.getDate())}`
    : `${date.getFullYear()}.${convToTwoDigitString(date.getMonth() + 1)}`;
};
