export const trimString = (str: unknown, maxLength: number): string => {
  const isString = typeof str === 'string';

  if (isString) {
    return str.length > maxLength ? `${str?.slice(0, maxLength)}...` : str;
  }

  return '';
};
