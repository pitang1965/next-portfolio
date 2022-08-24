export const removeTags = (str: string):string => {
  if (str === null || str === '') {
    return '';
  }

  return str.replace(/(<([^>]+)>)/ig, '');
}
