

console.log("working");


$(document).ready(() => {
    let userProfile = function(){
        let userNamer = data.name;
        let userEmail = data.name;
        $("#inlineFormInput").attr("placeholder",userNamer);
        
    }

    $.ajax({
        method:"GET",
        url:"http://localhost:3000/api/profile/5c702a5acc53177f1e52c702",

        success:function(data){
            let userNamer = data.name;
            let userEmail = data.email;
            $("#inlineFormInput").attr("placeholder",userNamer);
            $("#inputEmail3").attr("placeholder",userEmail);},

        error: function(){
            console.log('hello');
        }
    })
    $('.user-profile').on('submit', function(e) {
        e.preventDefault();
        let user = {};
        
        let name = $('#inlineFormInput').val();
        let email = $('#inputEmail3').val();
        if(name)
            user.name = name;
        if(email)
            user.email = email;
        console.log(user);
        $.ajax({
          method: 'PUT',
          url: '/api/user/5c702a5acc53177f1e52c702',
          data: user,
          success: function(data){
            console.log("this is new data ", data);
          },
          error: function(error){
              alert("Data Not Found");
          }
        });

        
      });
    
});

