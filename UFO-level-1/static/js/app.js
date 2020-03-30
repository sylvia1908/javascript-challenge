// from data.js
var tableData = data;

var button = d3.select("#filter-btn");

button.on("click", function() {

    // Use D3 to select the table
    var tbody = d3.select("tbody");
    // clear if exists
    tbody.selectAll("tr").remove();

    
    var inputElement = d3.select("#datetime");
      // Get the value property of the input element
    var inputValue = inputElement.property("value");

    // console.log(inputValue);

    var filteredData = tableData.filter(date => date.datetime == inputValue);

    // console.log(filteredData[0]);



    var i;
    for (i = 0; i < filteredData.length; i++) {
    // Append one table row `tr` to the table body
    var row = tbody.append("tr");

    // Append one cell for the student name
    row.append("td").text(filteredData[i].datetime);

    // Append one cell for the student grade
    row.append("td").text(filteredData[i].city);
    row.append("td").text(filteredData[i].state);
    row.append("td").text(filteredData[i].country);
    row.append("td").text(filteredData[i].shape);
    row.append("td").text(filteredData[i].durationMinutes);
    row.append("td").text(filteredData[i].comments);



    }


});
