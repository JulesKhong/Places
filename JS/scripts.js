function Place (locations, landmarks, timeOfYear, notes){
  this.locations = locations;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}


Place.prototype.locations = function(){
  return this.locations.toUpperCase();
}

// TO RESET FIELDS
// function resetFields() {
//   $("input#locations").val("");
//   $("input#landmarks").val("");
//   $("input#timeOfYear").val("");
//   $("input#notes").val("");
// }

// USER INTERFACE LOGIC

$(document).ready(function(){

  $("#newPlaces").submit(function(){
    event.preventDefault();

    var locations = $("input#userLocations").val();
    var landmarks = [$("input#userLandmarks").val()];
    var timeOfYear = $("input#userTimeOfYear").val();
    var notes = $("input#userNotes").val();
    var newPlace = new Place(locations, landmarks, timeOfYear, notes);

    var newPlaceLocations = newPlace.locations;


    $("ul#locationsList").append("<li><span class='local'>" + newPlace.locations + "</span></li>");
    console.log(newPlace.locations);

    $("#locationsList").last().click(function() {
      $("#results").show();
      $(".locations").text(newPlace.locations);
      $(".landmarks").text(newPlace.landmarks);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });

  });
});
