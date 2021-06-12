import R from "ramda";

const cleanAmazonListingData = (data: any) => {
  return R.map(
    R.pipe(
      R.map(R.trim),
      R.over(
        R.lensPath(["rating"]),
        R.pipe(String, R.split(" "), R.head, Number, R.defaultTo(0))
      ),
      R.over(
        R.lensPath(["numberOfRatings"]),
        R.pipe(String, R.replace(/,/g, ""), Number, R.defaultTo(0))
      ),
      R.over(
        R.lensPath(["price"]),
        R.pipe(String, R.replace(/,/g, ""), Number, R.defaultTo(0))
      )
    )
  )(data);
};

export { cleanAmazonListingData };
