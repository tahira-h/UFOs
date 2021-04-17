//Declare a variable, 'tableData', using 'const'

//import the data from data.js
const tableData = data;

// Tell JS what type of element the data will be displayed in ('a table')
// reference the 'tbody' HTML tag using D3

//NOTE: 
// D3 is a JS library that produces sophisticated & highly dynamic graphics in an HTML webpage.
// It is often used by data professionals to create dashboards, or a collection of visual data (i.e. graphs and maps), for presentation.

// Let's return code editor (below):

// Reference the HTML table using d3
var tbody = d3.select("tbody");

// NOTE:
// Functions are named after what they do. We're buildinig a table, so name the function "buildTable". Pass the "data" as the argument. "Data" was used earlier to import the array of UFO sightings. 

// 1. Create a new function
// function buildTable(data) {

//}

// 2. Clear the existing data to create a fresh table in which we can insert data. 
// If existing data is not clearInterval,it will reinsert data that already exists.

// Clear that data
// tbody.html("");

//Create a new function. Clear the existing data to create a fresh table.
function buildTable(data) {
    tbody.html("");

// Add the forEach function
data.forEach((dataRow) => {
    // create a variable that will append a row to the table body.
    let row = tbody.append("tr");
    // set up another function within the original function for the forEach loop.
    Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
    );
    });
}

// Start a new function "handleClick" to handle what to do after an input is given.  

// Add a date function. Create variables to hold the date data. filtered and unfiltered. 
function handleClick() {
    let date = d3.select("#datetime").property("value");
    // set a default filter and save it to a new variable. This will be the original table because we want users to refine their search on their own time.
    let filteredData = tableData;

    // Check to see if a date was entered and filter the data using that date.
    if (date) {
        // Apply 'filter' to the table data to only keep the rows where the 'datetime' value matches the filter values.
        filteredData = filteredData.filter(row => row.datetime === date);
    };

    // Rebuild the table using the filtered data
    // @NOTE: If no date was entered, then filteredData will just be the original tableData.
    buildTable(filteredData);
}

// Attach an event to listen for the form button
d3.selectAll("#filter-btn").on("click", handleClick);

// Build the table when the page loads
buildTable(tableData);





















