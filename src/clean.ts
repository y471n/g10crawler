import R from "ramda";
import { convertAttributeToNumber, replaceString } from "./utils";

const cleanAmazonListingData = (data: any) => {
  //   const parseRating = (product: any) => ({
  //     ...product,
  //     rating: Number(R.split(" ", product.rating)[0]) || 0,
  //   });

  const parseRating = (ratingString: any) =>
    Number(R.split(" ", ratingString)[0]) || 0;

  const stripCommas = R.curry((attribute: any, obj: any) => {
    return {
      ...obj,
      [attribute]: replaceString(/,/g, "", obj[attribute]),
    };
  });

  //   const x: never = "rating";
  const r = { rating: 1 };
  //   const ratingLens = R.lensPath(["r"]);

  const cleanedData = R.map(
    R.pipe(
      R.map(R.trim),
      R.over(R.lensPath(["rating"]), parseRating),
      R.over(R.lensPath(["numberOfRatings"]), R.replace(/,/g, "")),
      //   stripCommas("numberOfRatings"),
      convertAttributeToNumber("numberOfRatings"),
      stripCommas("price"),
      convertAttributeToNumber("price")
    )
  );
  console.log("Cleaned Data:");
  console.log(cleanedData(data));
  return cleanedData;
};

export { cleanAmazonListingData };
