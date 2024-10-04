export const generateQueryParams = (params: any) => {
  let temp = [];
  for (let key in params) {
    temp.push(`${key}=${params[key]}`);
  }
  return '?' + temp.join('&');
};
