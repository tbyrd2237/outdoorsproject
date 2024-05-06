import { locationsArray } from "./locationData.js";
import { nationalParksArray } from "./nationalParkData.js";
import { parkTypesArray } from "./parkTypeData.js";

window.onload = function () {
    document.getElementById("searchType").addEventListener("change", function() {
        let searchType = document.querySelector('input[name="searchType"]:checked').value;
        let dropdown = document.getElementById("dropdown-menu");
        dropdown.innerHTML = "";
        if (searchType === "location") {
            for (let i = 0; i < locationsArray.length; i++) {
                let option = document.createElement("a");
                option.classList.add("dropdown-item");
                option.href = "#";
                option.setAttribute("data-value", locationsArray[i]);
                option.textContent = locationsArray[i];
                dropdown.appendChild(option);
            }
        } else {   
            for (let i = 0; i < parkTypesArray.length; i++) {
                let option = document.createElement("a");
                option.classList.add("dropdown-item");
                option.href = "#";
                option.setAttribute("data-value", parkTypesArray[i]);
                option.textContent = parkTypesArray[i];
                dropdown.appendChild(option);
            }
        }
        dropdown.addEventListener("click", displayData);
    });
}

function displayData(event) {
    if (event.target.classList.contains("dropdown-item")) {
        let selectedElement = event.target.getAttribute("data-value");
        
        let searchType = document.querySelector('input[name="searchType"]:checked').value;
        
        if (searchType === "location") {
            displayLocation(selectedElement);
        } else {
            displayParkType(selectedElement);
        }
    }
}

function displayLocation(selectedElement) {
    let table = document.getElementById("table");

    let filteredData = nationalParksArray.filter(item => item.State === selectedElement);
    table.innerHTML = "";

    filteredData.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.textContent = item.LocationName;
        cell2.textContent = item.City;
    });
}


function displayParkType(selectedElement) {
    let table = document.getElementById("table");

    let filteredData = nationalParksArray.filter(item => item.LocationName.toLowerCase().includes(selectedElement.toLowerCase()));
    console.log(filteredData);
    table.innerHTML = "";

    filteredData.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.textContent = item.LocationName;
        cell2.textContent = item.City;
    });
}

function displayAllParks(){
    let table = document.getElementById("table");
    
    nationalParksArray.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        cell1.textContent = item.LocationName;
        cell2.textContent = item.City;
    });

}