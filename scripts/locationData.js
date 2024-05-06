const locationsArray = [
    "Alabama",
    "Alaska",
    "American Samoa",
    "Arizona",
    "Arkansas",
    "California",
    "Colorado",
    "Connecticut",
    "Delaware",
    "DC",
    "Florida",
    "Georgia",
    "Guam",
    "Hawaii",
    "Idaho",
    "Illinois",
    "Indiana",
    "Iowa",
    "Kansas",
    "Kentucky",
    "Louisiana",
    "Maine",
    "Maryland",
    "Massachusetts",
    "Michigan",
    "Minnesota",
    "Mississippi",
    "Missouri",
    "Montana",
    "Nebraska",
    "Nevada",
    "New Hampshire",
    "New Jersey",
    "New Mexico",
    "New York",
    "North Carolina",
    "North Dakota",
    "Ohio",
    "Oklahoma",
    "Oregon",
    "Pennsylvania",
    "Puerto Rico",
    "Rhode Island",
    "South Carolina",
    "South Dakota",
    "Tennessee",
    "Texas",
    "Utah",
    "Vermont",
    "Virgin Islands",
    "Virginia",
    "Washington",
    "West Virginia",
    "Wisconsin",
    "Wyoming"
]


//When the page loads, call the function to populate the dropdown menu
window.onload = dropdownMenu;

//Create a Function to Populate the Dropdown Menu
function dropdownMenu(){
    //Get the Dropdown Element *getElementById*
    let dropdown = document.getElementById("dropdown-menu");
    //clear the existing options
    dropdown.innerHTML = "";

    //Add New Options to the Dropdown
        //Iterate Each Element in the Array
        for (let i = 0; i < locationsArray.length; i++){
            //Create a New Option Element (createElement)
            let option = document.createElement("option");
            //Set the Text Content of the Option Element
            option.textContent = locationsArray[i];
            //Append the option to the dropdown menu
            dropdown.appendChild(option);
        }
}