export const getUrlParams = (url) => {
  let queryString = url.split("?")[1];
  let obj = {};

  if (queryString) {
    queryString = queryString.split("#")[0];

    const params = queryString.split("&");

    obj = params.reduce((paramsObj, param) => {
      const [paramKey, paramValue] = param.split("=");

      paramsObj[paramKey] = paramValue || true;

      return paramsObj;
    }, {});
  }

  console.log(obj);
  return obj;
};
