# Weather Dashboard

This weather dashboard app displays the current weather data for any given city. It also returns a 5 day forecast for that city. Local storage will display searches that have been made on page refresh.

There were two main issues that I ran into creating this app - generating the weather icon and using local storage. Although the weather icon could be generated (currently commented out on both the HTML and JS), I was unable to figure out how to render the png on the html. Notwithstanding this, the weather icon url that is generated through JS on lines 58 to 62 does return a relevant weather icon.

The second issue was utilising local storage. Although I was able to generate a list of searches in local storage, I was unable to append these one at a time and make them active links.

