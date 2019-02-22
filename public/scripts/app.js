$(document).ready(() => {

    $.ajax({
        method:"GET",
        url:"http://localhost:3000/api/user/5c6f165de0c1096949b29556",

    success: function(data){
        userName = data.name;
        userAlbums = data.albums;
        console.log(userAlbums);
        $('.card-body').prepend(`<p>${userName}</p>`);
        $('.card-title').html(data.albums[0].name);
        $('.card-text').html(data.albums[0].artist.name);
    },

    error: function() {
        alert("There was an error");
    } 
    })
});
/* 
// click event
$(`#updateProfileBtn`).addEventListener("click", updateProfile, false) //listen for click event
function updateProfile(e) { //create a function that saves div as a variable and then looks for 
    e.preventDefault();
    e.stopPropagation();

    $.ajax({
        method: 'GET',
        url: 'localhost:3000/api/profile/5c6f0a07942d661a3aa6a4db',
        success: function( res ) {
            let userName = res.name;
            let userEmail = res.email;
            let profilePic = res.profilePic;
            console.log (userEmail, userName, profilePic);
        },
        error: function() {
            alert('There was an error saving your profile information. Please try again later.');
        },
        complete: function () {
            $('#updateProfileBtn').prepend(`<h6>Saved!</h6>`);
        }
    });
    
}; */