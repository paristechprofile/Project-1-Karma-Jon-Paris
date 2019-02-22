
<<<<<<< HEAD
// get the alum
$(document).ready(function () {
    //  Set the user globally
    // Se the user's id globally;
     let albumList = []

    console.log("app is working fine");
    const findAlbumById = dbUser => {
        console.log("dbUser", dbUser);

         albumList = dbUser.albums;
=======

// get the album
$(document).ready(function () {
    //  Set the user globally
    // Se the user's id globally;
    let albumList = []

    const newAlbum = dbUser => {
        console.log("dbUser", dbUser);

        albumList = dbUser.albums;


        let artistName = albumList[i].artist.name;
        let albumName = albumList[i].name;

        let userId = albumList[i]._id;
        console.log(userId);
        let htmlFragment = `
            <div class="col" id="albumStack" data-userId="${userId}">
                <div class="card" style="width: 18rem;">
                    <img src="images/Purple-rain-cover.1.jpg"   class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ albumName }</h5>
                        <p class="card-text">${ artistName }</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <button id="deleteButton" class="btn-danger"> Delete </delete>
                    </div>
                </div>
            </div>
        `;
        // appending th html in the div
        $('#albumCardTarget').append(htmlFragment);

        console.log($("#deleteButton"))

        // Add an Event Listener and 
        $("#deleteButton").on('click', function (e) {
            e.preventDefault()

            // Ajax callf or single user
            $.ajax({
                method: "DELETE",
                url: `/api/user/5c700f01429c65f5556ce478/albums/${$("#albumStack").attr('data-userid')}`,
                success: deleteAlbum,
                error: err => console.log(err)
            })
        })
        console.log(albumList);

        const deleteAlbum = (data) => {
            console.log("this is new data ", data);
            $(".card").empty();
        }

    };

    //  Get all albums and render
    const findAlbumById = dbUser => {
        console.log("dbUser", dbUser);

        albumList = dbUser.albums;
>>>>>>> a6d4cb4b4f004636c3b14ff06da47689bbfea758

        for (let i = 0; i < albumList.length; i++) {
            let artistName = albumList[i].artist.name;
            let albumName = albumList[i].name;

            let userId = albumList[i]._id;
            console.log(userId);
            let htmlFragment = `
            <div class="col" id="albumStack" data-userId="${userId}">
                <div class="card" style="width: 18rem;">
                    <img src="images/Purple-rain-cover.1.jpg"   class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ albumName }</h5>
                        <p class="card-text">${ artistName }</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <button id="deleteButton" class="btn-danger"> Delete </delete>
                    </div>
                </div>
            </div>
        `;
            // appending th html in the div
            $('#albumCardTarget').append(htmlFragment);

            console.log($("#deleteButton"))

            // Add an Event Listener and 
            $("#deleteButton").on('click', function (e) {
                e.preventDefault()

                // Ajax callf or single user
                $.ajax({
                    method: "DELETE",
<<<<<<< HEAD
                    url: `/api/user/5c6f165de0c1096949b29556/albums/${$("#albumStack").attr('data-userid')}`,
=======
                    url: `/api/user/5c700f01429c65f5556ce478/albums/${$("#albumStack").attr('data-userid')}`,
>>>>>>> a6d4cb4b4f004636c3b14ff06da47689bbfea758
                    success: deleteAlbum,
                    error: err => console.log(err)
                })
            })
            console.log(albumList);

            const deleteAlbum = (data) => {
                console.log("this is new data ", data);
                $(".card").empty();
            }
        }
    }

<<<<<<< HEAD

    //   Make an Ajax call to get user by id
    $.ajax({
        method: "GET",
        url: "/api/user/5c6f165de0c1096949b29556",
=======
    //   Make an Ajax call to get user by id
    $.ajax({
        method: "GET",
        url: "/api/user/5c7035396e9949fc878e45a0",
>>>>>>> a6d4cb4b4f004636c3b14ff06da47689bbfea758
        success: findAlbumById,
        error: err => console.log(err)
    })

<<<<<<< HEAD
    Add an Event handler on the submit button
    $('#button-addon2').on("click", function (e) {
        console.log("Submit button is firing")
        e.preventDefault();
        let inputValue = $('#inputSubmit').val();
        console.log(inputValue)
        $("input[type=text], textarea").val("");
    })
    Find the id of the user by id
    const findUserId = id => {
        console.log(`This is new user ${id}`)
    }

    TODO:  get the ablum name, image and music and display in the front end



    Do an Ajax call  to create new album
    $.ajax({
        method: "POST",
        url: "/api/user/5c6f165de0c1096949b29556/albums",
        success: creatNewAlbum,
        err: err => console.log(err)
    })


})

=======
    // Add an Event handler on the submit button
    $('#albumForm').on("submit", function (e) {
        console.log("Submit button is firing")
        e.preventDefault();

        let formData = $(this).serialize();

        $.ajax({
            method: 'POST',
            url: '/api/user/5c7035396e9949fc878e45a0/albums',
            data: formData,
            success: createNewAlbum,
            error: error => console.log(error),
            complete: function () {
                $("input[type=text], textarea").val("");
            }
        });


    })
    // // Find the id of the user by id
    // const findUserId = id => {
    //     console.log(`This is new user ${id}`)
    // }

    // TODO:  create new ablum. Display in the front end

    const createNewAlbum = json => {
        console.log(json)

        let userAlbums = json.albums;

        let newAlbumName = userAlbums[userAlbums.length - 1].name;
        let newAlbumArtist = userAlbums[userAlbums.length - 1].artist || "Unknown Artist";
        let newAlbumid = userAlbums[userAlbums.length - 1]._id

        render(newAlbumName, newAlbumArtist, newAlbumid);

    }
    //  Render the new album
    const render = (newAlbumName, newAlbumArtist, newAlbumid) => {
        let htmlFragment = `
            <div class="col" id="albumStack" data-userId="${newAlbumid}">
                <div class="card" style="width: 18rem;">
                    <img src="images/Purple-rain-cover.1.jpg"   class="card-img-top" alt="...">
                    <div class="card-body">
                        <h5 class="card-title">${ newAlbumName }</h5>
                        <p class="card-text">${ newAlbumArtist }</p>
                        <a href="#" class="btn btn-primary">Go somewhere</a>
                        <button id="deleteButton" class="btn-danger"> Delete </delete>
                    </div>
                </div>
            </div>
        `;
        // appending th html in the div
        $('#albumCardTarget').append(htmlFragment);

    };
    //  Get all album
    const getAllTheAlbum = (album) => {
        return
    }
    // // Do an Ajax call  to create new album
    // $('#inputSubmit').on('submit', function (e) {
    //     e.preventDefault();

    // });

})



// TODO: DELETE ALBUM, EDIT USER INFO, CREATE ALBUM
// TODO: BACKEND INTEGRATION ROUTES,
>>>>>>> a6d4cb4b4f004636c3b14ff06da47689bbfea758
