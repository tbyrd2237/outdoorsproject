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
        document.querySelector(".table-formatting").style.display = "block";
        let selectedElement = event.target.getAttribute("data-value");
        
        let searchType = document.querySelector('input[name="searchType"]:checked').value;
        
        if (searchType === "location") {
            displayLocation(selectedElement);
        } else if (searchType === "parkType"){
            displayParkType(selectedElement);
        } else if (searchType === "allParks") {
        displayAllParks();
        }
    }   
    }

function displayLocation(selectedElement) {
    let table = document.getElementById("table");

    let filteredData = nationalParksArray.filter(item => item.State === selectedElement);
    table.innerHTML = "";

    let headerRow = table.insertRow(0);
    let headerCell1 = headerRow.insertCell(0);
    let headerCell2 = headerRow.insertCell(1);
    let headerCell3 = headerRow.insertCell(); 
    headerCell1.textContent = "Location";
    headerCell2.textContent = "City";
    headerCell3.textContent = "Visit";

    filteredData.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell();
        cell1.textContent = item.LocationName;
        cell2.textContent = item.City;
        let link = document.createElement('a');
        link.href = item.Visit;
        link.textContent = item.Visit;
        link.target = "_blank"; 
        cell3.appendChild(link);
    });
}

function displayParkType(selectedElement) {
    let table = document.getElementById("table");

    let filteredData = nationalParksArray.filter(item => item.LocationName.toLowerCase().includes(selectedElement.toLowerCase()));
    table.innerHTML = "";

    let headerRow = table.insertRow(0);
    let headerCell1 = headerRow.insertCell(0);
    let headerCell2 = headerRow.insertCell(1);
    let headerCell3 = headerRow.insertCell(); 
    headerCell1.textContent = "Location";
    headerCell2.textContent = "City";
    headerCell3.textContent = "Visit";

    filteredData.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell(); 
        cell1.textContent = item.LocationName;
        cell2.textContent = item.City;
 
        let link = document.createElement('a');
        link.href = item.Visit;
        link.textContent = item.Visit;
        link.target = "_blank"; 
        cell3.appendChild(link);
    });
}

function displayAllParks() {
    let table = document.getElementById("table");
    table.innerHTML = "";

    let headerRow = table.insertRow();
    let headerCell1 = headerRow.insertCell();
    let headerCell2 = headerRow.insertCell();
    let headerCell3 = headerRow.insertCell();

    headerCell1.textContent = "Location Name";
    headerCell2.textContent = "City";
    headerCell3.textContent = "Website";

    headerCell1.className = "table-header";
    headerCell2.className = "table-header";
    headerCell3.className = "table-header";

    nationalParksArray.forEach(item => {
        let row = table.insertRow();
        let cell1 = row.insertCell();
        let cell2 = row.insertCell();
        let cell3 = row.insertCell(); 

        cell1.textContent = item.LocationName;
        cell2.textContent = item.City;
        let link = document.createElement('a');
        link.href = item.Visit;
        link.textContent = item.Visit;
        link.target = "_blank"; 
        cell3.appendChild(link);
    });
}