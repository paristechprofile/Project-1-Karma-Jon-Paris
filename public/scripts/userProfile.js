console.log("working");


$(document).ready(() => {
    let userProfile = function(){
        let userNamer = data.name;
        let userEmail = data.name;
        $("#inlineFormInput").attr("placeholder",userNamer);
        
    }

    $.ajax({
        method:"GET",
        url:"http://localhost:3000/api/profile/5c6f165de0c1096949b29556",

        success:function(data){
            let userNamer = data.name;
            let userEmail = data.email;
            $("#inlineFormInput").attr("placeholder",userNamer);
            $("#inputEmail3").attr("placeholder",userEmail);},

        error: function(){
            console.log('hello');
        }
    })
    
});
