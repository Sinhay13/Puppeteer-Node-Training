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

    //await page.goto("https://en.wikipedia.org/wiki/Web_scraping");

    // For one element :
    // element = await page.evaluate(() => {
    //     return document.querySelector("#firstHeading").textContent.trim();
    // });
    // console.log(element);
    // await browser.close();

    // for multiple elements :
    // elements = await page.evaluate(() => {
    //     element_in_elements = document.querySelectorAll("h2 .mw-headline");// Stock elements in heading_elements
    //     elements_array = Array.from(element_in_elements); // make a array 
    //     return elements_array.map(heading => heading.textContent);// return elements
    //   });
    //   console.log(elements);
    //   await browser.close();

    //______________________________Scraping_a_hotel_listing_page_to_JSON______________________________//

    await page.goto("https://www.airbnb.jp/?tab_id=home_tab&refinement_paths%5B%5D=%2Fhomes&search_mode=flex_destinations_search&flexible_trip_lengths%5B%5D=one_week&monthly_start_date=2023-11-01&monthly_length=3&category_tag=Tag%3A8678&price_filter_input_type=0&price_filter_num_nights=5&channel=EXPLORE&date_picker_type=calendar&checkin=2023-10-11&checkout=2023-11-09&source=structured_search_input_header&search_type=filter_change");

    // Use page.evaluate to run JavaScript code in the browser context
    data = await page.evaluate(() => {
    // Select all elements with the specified class name and convert the NodeList to an array
    root = Array.from(document.querySelectorAll(".dir.dir-ltr"));
    
    // Map over each hotel element in the array
    hotels = root.map(hotel => {
      try {
        // Attempt to find the name and photo elements within each hotel element
        const nameElement = hotel.querySelector('div').parentElement.nextElementSibling;
        const photoElement = hotel.querySelector("img");
        
        // If both name and photo elements are found, create an object with Name and Photo properties
        if (nameElement && photoElement) {
          return {
            Name: nameElement.textContent,
            Photo: photoElement.getAttribute("src")
          };
        }
      } catch (error) {
        // If an error occurs while processing a hotel, log the error
        console.error("Error while processing a hotel:", error);
      }
      
      // If data is missing or an error occurred, return null
      return null;
    }).filter(hotel => hotel !== null); // Filter out null entries
    
    // Return the resulting array of hotel data
    return hotels;
  });
  
    // Log the hotel data to the console
    console.log(data);
  
    // Close the browser when done
    await browser.close();
  
      
    

})();