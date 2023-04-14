const puppeteer = require('puppeteer');

(async function () {
    const browser = await puppeteer.launch({ headless: false}); // launch browser
    const page = await browser.newPage(); // open new page
    await page.goto("https://www.visit1066country.com/destinations/hastings/whats-on") // go to page

    const data = await page.evaluate(function() {
        const events = document.querySelectorAll("prodListItemWrapper");
        const array = [];

        for (let i = 0; i < events.length; i++) {
            array.push({
                title: events[i].querySelector("ProductDetail").innerText,
                description: events[i].querySelector("desc").innerText,
                dates: events[i].querySelector("dates").innerText
            })
        }

        return;
    })

    console.log(data);
})(); // self executing function