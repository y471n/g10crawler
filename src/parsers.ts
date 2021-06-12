import { Page } from "puppeteer";
import * as cheerio from "cheerio";

const amazonListPage = async (page: Page) => {
  let html = await page.evaluate(() => document.body.innerHTML);
  const $ = cheerio.load(html);
  let data: any = [];
  $(".s-result-list .s-asin", html).each((idx, elem) => {
    const productId = $(elem).attr("data-asin");
    const name = $(elem).find("h2").text();
    const numberOfRatings = $(elem)
      .find(".a-section .a-size-small .a-size-base")
      .text();
    const rating = $(elem)
      .find("div.a-row.a-size-small")
      .children()
      .first()
      .text();
    const price = $(elem).find(".a-price-whole").text();
    const image = $(elem).find(".s-image-square-aspect img").attr("src");
    data.push({ productId, name, numberOfRatings, rating, price, image });
  });
  return data;
};

export { amazonListPage };
