import { Page } from "puppeteer";

const puppeteer = require("puppeteer");

// TODO: Change any to response of parsePage
const handler = async (
  url: string,
  parsePage: (page: Page) => any,
  cleanData: (data: any) => any,
  saveData: (data: any) => void
) => {
  const browser = await puppeteer.launch({ headless: false });
  const page = await browser.newPage();
  await page.goto(url, {
    waitUntil: "networkidle2",
  });
  const data: any = await parsePage(page);
  saveData(cleanData(data));
  await page.screenshot({ path: "example.png" });
  await browser.close();
};

export default handler;
