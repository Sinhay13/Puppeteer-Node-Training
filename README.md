Web Scraping with Puppeteer
This repository contains a Node.js script that uses Puppeteer to extract specific data from a webpage. The script is currently configured to scrape data from Airbnb, but can be modified to scrape data from other websites.

Getting Started
Prerequisites
Node.js
Puppeteer
Installation
Clone this repository.
Navigate to the project directory.
Install the required Node.js packages:
npm install puppeteer
Usage
The script is configured to navigate to a specified URL and extract specific data from the webpage. It's currently set up to scrape data from Airbnb, but it can be adjusted to scrape data from other websites.

Here is a brief explanation of what the script does:

Launches a new browser instance. The headless option is set to false, which means the browser GUI will be visible during the script's execution.
Opens a new page in the browser.
Sets the viewport size for the page.
Navigates to the specified URL (in this case, an Airbnb search results page).
Uses Puppeteer's page.evaluate method to execute JavaScript code in the context of the webpage. This code:
Selects all elements with the specified class name and converts the NodeList to an array.
Maps over each hotel element in the array, attempting to find the name and photo elements within each one.
If both name and photo elements are found, creates an object with Name and Photo properties.
If an error occurs while processing a hotel, logs the error and returns null for that hotel.
Filters out any null entries from the resulting array of hotel data.
Logs the resulting data to the console.
Closes the browser.
To run the script, use the command:

npm start


Contributing
Pull requests are welcome. For major changes, please open an issue first to discuss what you would like to change.

Please make sure to update tests as appropriate.

License
MIT