$(function(){
  var isDone = false;
  var FileThing = $('input[type=file]');

  $("#thebar").html("0%");

  $("#droparea").click(function(){
    if(isDone){
      return;
    }
    //upload a file
    FileThing.click();
  })
  .on("dragover", function(event) {
    if(isDone){
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    $(this).addClass('dragging');
  })
  .on("dragleave", function(event) {
    if(isDone){
      return;
    }
    event.preventDefault();
    event.stopPropagation();
    $(this).removeClass('dragging');
  })
  .on("drop", function(event) {
      if(isDone){
        return;
      }

      event.preventDefault();
      event.stopPropagation();
      $(this).removeClass('dragging');

      isDone = true;
      nextThing();
  });

  FileThing.on("change", function(){
    if(isDone){
      return;
    }


    var val = $(this).val();

    if(val){
      isDone = true;

      nextThing();
    }

  });

  var nextThing = function(){
    //we are now uploading.
    $("#vnone").addClass("hidden");
    $("#vdownloadmsg").addClass("hidden");
    $("#vuploadmsg").removeClass("hidden");
    $("#droparea").addClass("alert-success").removeClass("alert-gray");

    //show pregress bar thing.
    $("#vupload").addClass("hidden");
    $("#vprogress").removeClass("hidden");
    $("<div>")
    .css("width", "0%")
    .animate({
      width:"100%"
    },{
      step: function( now, fx ) {
          if(fx.prop == 'width') { //If you animate more than 1 property
              fx.data = Math.round(now) + "%";
              $("#thebar").css("width", fx.data);
              $("#thebar").html(fx.data);
          }
      },
      complete: function(){
        $("#vuploadmsg").addClass("hidden");
        $("#vdownloadmsg").removeClass("hidden");

        //remove pregress bar thing.
        $("#vprogress").addClass("hidden");
        $("#vupload").removeClass("hidden");

        $("#thebar").css("width", "0%");
        $("#thebar").html("0%");

        //and we can upload again
        isDone = false;
      },
      duration:8000
    });
  }

});
