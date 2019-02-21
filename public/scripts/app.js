$(document).ready(() => {
    console.log("working");
});

// click event
$(`#updateProfileBtn`).addEventListener("click", updateProfile, false) //listen for click event
function updateProfile(e) { //create a function that saves div as a variable and then looks for 
let saveProfile = $('#updateProfileBtn');
    e.preventDefault();
    e.stopPropagation();

    $.ajax({
        method: 'GET',
        url: 'http://api.openweathermap.org/data/2.5/weather?q=',
        data: {
          id: 123
        },
        success: function( response ) {
          $('#temp').html('The temperature in Detroit is ' + response.temp);
        },
        error: function() {
          alert('There was an error getting weather data.');
        },
        complete: function () {
          $('#updateProfileBtn').prepend(`<h6>Saved!</h6>`);
        }
  });
    
};