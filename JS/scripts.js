function Places (location, landmarks, timeOfYear, notes){
  this.locations = location,
  this.landmarks = landmarks,
  this.timeOfYear = timeOfYear,
  this.notes = notes,
}

// TO RESET FIELDS
function resetFields() {
  $("input#locations").val("");
  $("input#landmarks").val("");
  $("input#timeOfYear").val("");
  $("input#notes").val("");
}

// USER INTERFACE LOGIC

$(document).ready(function(){

  $("#newPlaces").submit(function(){
    event.preventDefault();

    var locations = $("input#locations").val();
    var landmarks = $("input#landmarks").val();
    var timeOfYear = $("input#timeOfYear").val();
    var notes = $("notes").val();

    $("ul#locationsList").append("<li><span class="local">" + Places.locations() + "</span></li>");

  }
}
