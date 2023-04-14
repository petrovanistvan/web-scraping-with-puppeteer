/* Scraping data from a page */

const puppeteer = require('puppeteer');

(async () => {
  const browser = await puppeteer.launch( { headless: false } )
  const page = await browser.newPage()
  await page.goto("https://www.oragyor.hu/kereses?k=ga+2100")


  const data = await page.evaluate(() => {
     // Create array to store objects:
    const list = [];
    // Get each product container:
    const items = document.querySelectorAll(".product-name-container");
    console.log(items);

    // Each iteration of loop then pushes an object to the array:
    for (i=0; i<items.length; i++) {
      list.push({
        // event: items[i].querySelector(".ProductName a").textContent,
        // dates: items[i].querySelector(".dates").innerHTML,
        // link: 'https://www.visit1066country.com'+items[i].querySelector(".ProductDetail").getAttribute('href'),
        brandName: items[i].querySelector(".brandname").textContent,
        productCode: items[i].querySelector(".productcode").textContent
      })
    }
    // Return the array of objects (console.log here will print in the browser!)
    return list
  })

  console.log(data); // See the scraped data in Node
})();

(async () => {
    const browser = await puppeteer.launch( { headless: false } )
    const page = await browser.newPage()
    await page.goto("https://www.oragyor.hu/kereses?k=ga+2100&page=2")
  
  
    const data = await page.evaluate(() => {
       // Create array to store objects:
      const list = [];
      // Get each product container:
      const items = document.querySelectorAll(".product-name-container");
      console.log(items);
  
      // Each iteration of loop then pushes an object to the array:
      for (i=0; i<items.length; i++) {
        list.push({
          // event: items[i].querySelector(".ProductName a").textContent,
          // dates: items[i].querySelector(".dates").innerHTML,
          // link: 'https://www.visit1066country.com'+items[i].querySelector(".ProductDetail").getAttribute('href'),
          brandName: items[i].querySelector(".brandname").textContent,
          productCode: items[i].querySelector(".productcode").textContent
        })
      }
      // Return the array of objects (console.log here will print in the browser!)
      return list
    })
  
    console.log(data); // See the scraped data in Node
  })()