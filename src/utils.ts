import R from "ramda";

const replaceString = (
  toBeReplaced: RegExp,
  replaceValue: string,
  str: string
) => str.replace(toBeReplaced, replaceValue);

const trimAllObjectValues = (obj: any) => R.map(R.trim, obj);

const convertAttributeToNumber = R.curry((attribute: any, obj: any) => {
  return {
    ...obj,
    [attribute]: Number(obj[attribute]),
  };
});

export { convertAttributeToNumber, replaceString, trimAllObjectValues };
