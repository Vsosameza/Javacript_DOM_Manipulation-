// from data.js
// Get references to the table body element, input fields and button
var $tbody = document.querySelector("tbody");
var $dateInput = document.querySelector("#datetime");
var $stateInput = document.querySelector("#state")
var $searchBtn = document.querySelector("#search");

// Add an event listener to the search button, call handleSearchButtonClick when clicked
$searchBtn.addEventListener("click", handleSearchButtonClick);

// Set UFO variable to address the data set initially
var filteredUFO = data;

// renderTable renders the filteredUFO to the tbody
function renderTable() {
  $tbody.innerHTML = "";
  console.log("Y'all like Mars Attacks!!!?")

  for (var i = 0; i < filteredUFO.length; i++) {
    
// Get get the current sighting object and its fields
    var sighting = filteredUFO[i];
    var fields = Object.keys(sighting);
// Create a new row in the tbody, set the index to be i + startingIndex
    var $row = $tbody.insertRow(i);
    for (var j = 0; j < fields.length; j++) {

      var field = fields[j];
      var $cell = $row.insertCell(j);
      $cell.innerText = sighting[field];
    }
  }
}

function handleSearchButtonClick() {
// if  leading white space is not removed app does not work
  var filterDate = $dateInput.value.trim();
  var filterState = $stateInput.value.trim().toLowerCase();

  if (filterDate.length != 0){
    filteredUFO = data.filter(function(sighting) {
      var sightingDate = sighting.datetime;
       return sightingDate === filterDate;
         });
  }
  else {
    filteredUFO = data
  }
  if (filterState.length != 0){
    filteredUFO = filteredUFO.filter(function(sighting) {
      var sightingState = sighting.state;
       return sightingState === filterState;
         });
  }
  else {
    filteredUFO = filteredUFO
  }
  renderTable();
}

// render table when page loads 
renderTable();