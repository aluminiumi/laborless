/*This file was created to test the posted jobs page
Ensuring that a new job is added with the card layout and that even adding multiple
cards still work with the grid properly and is responsive */

//This function can be used or if you prefer your own with vanilla javascript syntax
$('#postJob-btn').click(function(){

    var jobTitle = $("#job-title").val();    
    var jobDesc = $("#job-description").val();

    //Clear out text after posting job
    $("#job-title").val("");
    $("#job-description").val("");

    //append new job as first child
    $('#jobPost-row').prepend('<div id=job-card class="col-lg-3 col-md-6 col-sm-12">'
        + '<div class="card" mx-auto>'
        + '<div class="card-body">'
        + '<h4 class="card-title">' + jobTitle + '</h4>'
        + '<p class="card-text" style="padding-top: 3rem;">' + jobDesc + '</p>'
        //email of course will be modified later to be only visible when employer hires a student 
        //otherwise nobody can see it
        + '<p class="card-text">example@gmail.com</p>'
        + '</div>'
        + '</div>'
        + '</div>');  
    
    //hide modal once user clicks button to post job
    $('#postJobModal').modal('hide');
});



