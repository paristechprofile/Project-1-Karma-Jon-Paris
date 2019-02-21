$(document).ready(() => {
    console.log("working");
});

// click event
$(`#updateProfileBtn`).addEventListener("click", updateProfile, false) //listen for click event
function updateProfile(e) { //create a function that saves div as a variable and then looks for 
/* let saveProfile = $('#updateProfileBtn'); */
    e.preventDefault();
    e.stopPropagation();

    $.ajax({
        method: 'GET',
        url: 'localhost:3000/api/user/5c6f0a07942d661a3aa6a4db',
        success: function( response ) {
            res.name $('#temp').html('The temperature in Detroit is ' + response.temp);
        },
        error: function() {
            alert('There was an error saving your profile information. Please try again later.');
        },
        complete: function () {
            $('#updateProfileBtn').prepend(`<h6>Saved!</h6>`);
        }
    });
    
};