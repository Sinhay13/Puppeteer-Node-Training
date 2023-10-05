const puppeteer = require('puppeteer');// call puppeteer
(async () => {

    const browser = await puppeteer.launch({headless:false}); // default is true, false to keep the browser open 

    const page = await browser.newPage(); // open a new page 

    await page.setViewport({ width: 1200, height: 800 }); // choose the page size 

    await page.goto('https://oxylabs.io/'); // example of page 
    //await page.screenshot({path: 'oxylabs_1080.png'}) // to take a screenshot of the page
    //await page.pdf({path: 'oxylabs.pdf', format: 'A4'}); // to take all the page in PDF format 
    //await browser.close(); // to close browser 

})();