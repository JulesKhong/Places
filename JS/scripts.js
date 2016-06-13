
// 1/3 OBJECT STRUCTURE
function Place (locations, landmarks, timeOfYear, notes){
  this.locations = locations;
  this.landmarks = landmarks;
  this.timeOfYear = timeOfYear;
  this.notes = notes;
}

// TO RESET FIELDS
function resetFields() {
  $("input#userLocations").val("");
  $("input#userLandmarks").val("");
  $("input#userTimeOfYear").val("");
  $("input#userNotes").val("");
}

// USER INTERFACE LOGIC

$(document).ready(function(){

  $("#newPlaces").submit(function(){
    event.preventDefault();

    // 2/3 DEFINING ELEMENTS TO PLUG INTO STRUCTURE
    var locations = $("input#userLocations").val();
    var landmarks = [$("input#userLandmarks").val()];
    var timeOfYear = $("input#userTimeOfYear").val();
    var notes = $("input#userNotes").val();
    // 3/3 DEFINING SPECIFIC OBJECT THAT WILL COMBINE STRUCTURE AND ELEMENTS
    var newPlace = new Place(locations, landmarks, timeOfYear, notes);

    // var newPlaceLocations = newPlace.locations;


    $("ul#locationsList").append("<li><span class='local'>" + newPlace.locations + "</span></li>");
    console.log(newPlace.locations);

    $("#locationsList").last().click(function() {
      $("#results").show();
      $(".locations").text(newPlace.locations);
      $(".landmarks").text(newPlace.landmarks);
      $(".timeOfYear").text(newPlace.timeOfYear);
      $(".notes").text(newPlace.notes);
    });
    resetFields();
  });
});
