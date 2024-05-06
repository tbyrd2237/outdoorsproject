import {locationsArray} from "./locationData.js";
import {nationalParksArray} from "./nationalParkData.js";

window.onload = dropdownMenu;

function dropdownMenu(){
    let dropdown = document.getElementById("dropdown-menu");
    dropdown.innerHTML = "";

    for (let i = 0; i < locationsArray.length; i++){
        let option = document.createElement("a");
        option.classList.add("dropdown-item");
        option.href = "#"; 
        option.setAttribute("data-value", locationsArray[i]);
        option.textContent = locationsArray[i];
        dropdown.appendChild(option);
        }

        dropdown.addEventListener("click", displayData);
}

function displayData(event){
    if (event.target.classList.contains("dropdown-item")){
        let selectedElement = event.target.getAttribute("data-value");
        displayTable(selectedElement);
    }
}

function displayTable(selectedElement){
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


