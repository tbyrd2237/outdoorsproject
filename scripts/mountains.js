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

function displayData(event) {
    document.querySelector(".container").style.display = "block";
    let card = document.getElementById("card");
    let selectedElement = event.target.getAttribute("data-value");
    let filteredData = mountainsArray.filter(item => item.name === selectedElement);
   
    filteredData.forEach(item => {
        let paragraph = document.getElementById("card-title");
        let description = item.desc;

        paragraph.textContent = item.name;

        let element = document.getElementById("description");
        let newText = description;

        element.textContent = newText;

        let elevation = document.getElementById("elevation");
        let elevationText = "Elevation: " + item.elevation + " Feet";
        elevation.textContent = elevationText;

        let image = document.getElementById("image");
        image.src = "images/" + item.img;        

    async function getSunsetForMountain(lat, lng){
    let response = await fetch(
    `https://api.sunrise-sunset.org/json?lat=${lat}&lng=${lng}&date=today`);
    let data = await response.json();
    console.log(data);
    return data;
}

    getSunsetForMountain(item.lat, item.lng).then(data => {
        const options = {
            hour: 'numeric',
            minute: '2-digit', 
            hour12: true 
        };

        let sunrise = document.getElementById("sunrise");
        let sunriseText = "Sunrise: " + data.results.sunrise;
        sunrise.textContent = sunriseText;

        let sunset = document.getElementById("sunset");
        let sunsetText = "Sunset: " + (data.results).sunset.toLocaleString('en-US', options);
        sunset.textContent = sunsetText;
    });

    });
}
