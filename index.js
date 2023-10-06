const puppeteer = require('puppeteer');// call puppeteer
(async () => {

    const browser = await puppeteer.launch({headless:false}); // default is true, false to keep the browser open 

    const page = await browser.newPage(); // open a new page 

    await page.setViewport({ width: 1200, height: 800 }); // choose the page size 

    //await page.goto('https://oxylabs.io/'); // example of page 
    //await page.screenshot({path: 'oxylabs_1080.png'}) // to take a screenshot of the page
    //await page.pdf({path: 'oxylabs.pdf', format: 'A4'}); // to take all the page in PDF format 
    //await browser.close(); // to close browser 

    //_________________________________Scraping_________________________________________//

    await page.goto("https://en.wikipedia.org/wiki/Web_scraping");

    // For one element :
    // element = await page.evaluate(() => {
    //     return document.querySelector("#firstHeading").textContent.trim();
    // });
    // console.log(element);
    // await browser.close();

    // for multiple elements :
    elements = await page.evaluate(() => {
        element_in_elements = document.querySelectorAll("h2 .mw-headline");// Stock elements in heading_elements
        elements_array = Array.from(element_in_elements); // make a array 
        return elements_array.map(heading => heading.textContent);// return elements
      });
      console.log(elements);
      await browser.close();
    
    

})();