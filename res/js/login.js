$(function(){
  //we handle form submission
  $("form").submit(function(e){

    //don't do the default thing
    e.preventDefault();

    //get the username
    var username = $("#username").val();

    //get the password
    var password = $("#password").val();

    //check it and go to the right page
    //this is totally unsecure, as we are checking stuff on the client side.
    //eventually we should just usbmit the form.
    if(username == "student" && password == "student"){
      location.href = "../../../pages/landing/student";
    } else if(username == "ta" && password == "ta"){
      location.href = "../../../pages//landing/ta";
    } else if(username == "admin" && password == "admin"){
      location.href = "../../../pages/landing/admin";
    } else {
      location.href = "../../../pages/login/wrong#"+username;
    }
  });
})
