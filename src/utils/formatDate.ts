import dayjs from 'dayjs';
export type DateFormat = 'YYYY.MM.DD' | 'YYYY.MM' | 'SNS';

// eslint-disable-next-line unused-imports/no-unused-vars
const convToTwoDigit = (value: number): string =>
  String(value).padStart(2, '0');

export const formatDate = (dateString: string, format: DateFormat) => {
  if (format === 'SNS') {
    const now = dayjs();
    const diff = now.diff(dayjs(dateString)) / 1000;
    console.log(diff);
    if (diff < 60) {
      return Math.floor(diff).toString() + '秒'; // ●●秒
    }
    if (diff < 60 * 60) {
      return Math.floor(diff / 60).toString() + '分'; // ●●分
    }
    if (diff < 60 * 60 * 24) {
      return Math.floor(diff / 60 / 60).toString() + '時間'; // ●●時間
    }
    if (dayjs(dateString).format('YYYY') === now.format('YYYY')) {
      return dayjs(dateString).format('MM月DD日'); // MM月DD日
    }
    return dayjs(dateString).format('YYYY年MM月DD日'); // YYYY年MM月DD日
  } else {
    const date = new Date(dateString);
    return format === 'YYYY.MM.DD'
      ? `${date.getFullYear()}.${convToTwoDigit(
          date.getMonth() + 1
        )}.${convToTwoDigit(date.getDate())}`
      : `${date.getFullYear()}.${convToTwoDigit(date.getMonth() + 1)}`;
  }
};
