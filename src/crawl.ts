const puppeteer = require("puppeteer");

const crawl = async (url: string) => {
  console.log(url);
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  console.log(page);
  await page.screenshot({ path: "example.png" });
  await browser.close();
  //   return page;
};

export default crawl;
