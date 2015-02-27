$(function(){
  //focus the password button.
  $("#password").focus();

  //set the username correctly.
  $("#username").val(window.location.hash.substring(1)); 
});
