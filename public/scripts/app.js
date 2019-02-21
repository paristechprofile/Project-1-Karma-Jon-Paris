console.log("working");


$(document).ready(() => {

    $.ajax({
        method:"GET",
        url:"http://localhost:3000/api/user/5c6ecc268d2c8e5fabfd9727",

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
