


$(document).ready(() => {
    console.log("working");
    $.ajax({
        method: `GET`,
        URL: `/api/profile/5c6f41cb652b3a3a86c456ad`,
        success: function (res){
            console.log(res.name)
    }})
});