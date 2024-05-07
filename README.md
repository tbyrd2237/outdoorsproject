# Outdoors Project

## Project Description
The "Enjoy the Outdoors" Project allows users to view information about the National Parks and Mountains in the United States. The National Parks Search Page enables users to search for national parks by state/territory or park type. The Mountains Information Page features a dropdown menu which allows users to view information about 48 mountains.

## Webpage Images

![Homepage Screenshot.](/image/homepage.jpg "This is a screenshot of the homepage.")

![National Parks Screenshot.](/image/national-parks.jpg "This is a screenshot of the National Parks page.")

![Mountains Screenshot.](/image/mountains.jpg "This is a screenshot of the Mountains page.")

## Code Sample
![Code Sample.](/image/code-sample.jpg "This is a sample of my code.")
The provided code sample is from the National Parks page. The displayParkType function obtains a reference to the HTML table element, allowing for data manipulation.  The function filters the National Park data stored in the nationalParksArray. To apply the filter, it standardizes the park types selected from the dropdown menu and the corresponding location names from the nationalParksArray by converting them to lowercase.  Then, it checks if each location name in the nationalParksArray contains the park type selected by the user. Finally, the function clears the table's contents in preparation for displaying the updated data.