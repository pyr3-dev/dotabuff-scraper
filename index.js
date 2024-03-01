import puppeteer from "puppeteer";

const getRank = async () => {
  const browser = await puppeteer.launch();
  const page = await browser.newPage();
  var player_id = "380175663";
  await page.goto(`https://www.dotabuff.com/players/${player_id}`, {
    waitUntil: "domcontentloaded",
  });
  const rank = await page.evaluate(() =>
    document.querySelector(".rank-tier-wrapper").getAttribute("oldtitle")
  );
  console.log(rank);
  await browser.close();
};
getRank();
