const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch({ headless: false}); // launch browser
    const page = await browser.newPage(); // open new page
    await page.goto("https://www.visit1066country.com/destinations/hastings/whats-on") // go to page
})(); // self executing function