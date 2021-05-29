import express, { Application, Request, Response } from "express";
import crawl from "./crawl";

const app: Application = express();

app.get("/", (req: Request, res: Response) => {
  crawl(
    "https://www.amazon.in/s?bbn=1389365031&rh=n%3A1389365031%2Cp_36%3A1318507031&dc&qid=1622257645&rnid=1318502031&ref=lp_1389365031_nr_p_36_4"
  );

  res.send("Well done!");
});

app.listen(5000, () => {
  console.log("The application is listening on port 5000!");
});
