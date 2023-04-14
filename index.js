/* Scraping data from a page */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch( { headless: false } )
  const page = await browser.newPage()
  await page.goto("https://www.visit1066country.com/destinations/hastings/whats-on")


  const data = await page.evaluate(() => {
     // Create array to store objects:
    const list = [];
    // Get each product container:
    const items = document.querySelectorAll(".productList > li");

    // Each iteration of loop then pushes an object to the array:
    for (i=0; i<items.length; i++) {
      list.push({
        event: items[i].querySelector(".ProductName a").textContent,
        dates: items[i].querySelector(".dates").innerHTML,
        link: 'https://www.visit1066country.com'+items[i].querySelector(".ProductDetail").getAttribute('href'),
      })
    }
    // Return the array of objects (console.log here will print in the browser!)
    return list
  })

  console.log(data); // See the scraped data in Node
})()