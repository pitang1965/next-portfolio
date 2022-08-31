export type DateFormat = 'YYYY.MM.DD' | 'YYYY.MM';

// eslint-disable-next-line unused-imports/no-unused-vars
const convToTwoDigit = (value: number): string =>
  String(value).padStart(2, '0');

export const formatDate = (dateString: string, format: DateFormat) => {
  const date = new Date(dateString);
  return format === 'YYYY.MM.DD'
    ? `${date.getFullYear()}.${convToTwoDigit(
        date.getMonth() + 1
      )}.${convToTwoDigit(date.getDate())}`
    : `${date.getFullYear()}.${convToTwoDigit(date.getMonth() + 1)}`;
};
