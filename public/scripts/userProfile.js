


$(document).ready(() => {
    console.log("working");
    $.ajax({
        method: `GET`,
        URL: `/api/profile/5c6f41cb652b3a3a86c456ad`,
        success: function (res){
            console.log(res.name)
        }
});



/* <div class="form-group row">
<!-- <label for="inlineFormInput" class="col-sm-1 col-form-label">Name</label> -->
<div class="col-sm-10 col-lg-4">
<input type="text" class="form-control" id="inlineFormInput" placeholder="">
</div>
</div> */