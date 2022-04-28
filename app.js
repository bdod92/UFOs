// import the data from data.js
const tableData = data;

// Reference the HTML table using d3
// var tbody = d3.select("tbody");

// Converted to an arrow function
// addition = (a, b) => a + b;

// // Original doubleAddition function
// function doubleAddition(c, d) {
//     var total = addition(c, d) * 2;
//     return total;
//   }

  //refactored fat arrow
//   doubleAddition = (c,d) => addition(c,d)


function buildTable(data) {
    // First, clear out any existing data
    tbody.html("");
  
    // Next, loop through each object in the data
    // and append a row and cells for each value in the row
    data.forEach((dataRow) => {
      // Append a row to the table body
        let row = tbody.append("tr");
  
      // Loop through each field in the dataRow and add
      // each value as a table cell (td)
        // We're already working with an array of objects, where each object is a UFO sighting. By starting our line of code with Object.values, we're telling JavaScript to reference one object from the array of UFO sightings. By adding (dataRow) as the argument, we are saying that we want the values to go into the dataRow. We've added forEach((val) to specify that we want one object per row.
        Object.values(dataRow).forEach((val) => {
        let cell = row.append("td");
        cell.text(val);
        }
      );
    });
  }