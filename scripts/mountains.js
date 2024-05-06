import { locationsArray } from "./locationData.js";
import { nationalParksArray } from "./nationalParkData.js";
import { parkTypesArray } from "./parkTypeData.js";
import { mountainsArray } from "./mountainData.js";

window.onload = function () {
        let dropdown = document.getElementById("dropdown-menu");
        dropdown.innerHTML = "";
    
        for (let i = 0; i < mountainsArray.length; i++) {
            let option = document.createElement("a");
            option.classList.add("dropdown-item");
            option.href = "#";
            option.setAttribute("data-value", mountainsArray[i].name);
            option.textContent = mountainsArray[i].name;
            dropdown.appendChild(option);
        }
        dropdown.addEventListener("click", displayData);
}
//Function to Display the Data
function displayData(event) {
    //Select the Card 
    let card = document.getElementById("card");
    let selectedElement = event.target.getAttribute("data-value");
    //Loop through the data and check if the value is equal to the selected item
    let filteredData = mountainsArray.filter(item => item.name === selectedElement);
   
    filteredData.forEach(item => {
        //TITLE
        //Select the paragraph element
        let paragraph = document.getElementById("card-title");
        //Change the Content of the paragraph element
        let description = item.desc;

        paragraph.textContent = item.name;

        //DESCRIPTION
        //Get the Description Element
        let element = document.getElementById("description");

        //Define the New Text
        let newText = "Description: " + description;

        //Set the Text to the Element
        element.textContent = newText;

        //ELEVATION
        let elevation = document.getElementById("elevation");
        let elevationText = "Elevation: " + item.elevation;
        elevation.textContent = elevationText;

        //IMAGE
        let image = document.getElementById("image");
        image.src = "images/" + item.img;        


    // function that can "fetch" the sunrise/sunset times
    async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    console.log(data);
    return data;
}

    // Fetch the sunset/sunrise times for a specific mountain
    getSunsetForMountain(item.lat, item.lng).then(data => {
        //Sunrise
        let sunrise = document.getElementById("sunrise");
        let sunriseText = "Sunrise: " + data.results.sunrise;
        sunrise.textContent = sunriseText;

        //Sunrise
        let sunset = document.getElementById("sunset");
        let sunsetText = "Sunset: " + data.results.sunset;
        sunset.textContent = sunsetText;
    });

    });
}
