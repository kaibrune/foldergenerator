$("#option1sub").hide();
$("#option3sub").hide();
$("#option21sub").hide();
$("#option22sub").hide();
$("#option25sub").hide();
$("#code").hide();
$("#video").hide();

/* if(window.location.href.indexOf("film") > -1) {
  $('#video').slideDown();$("#code").hide();$("#intro").slideUp();$('#footer').slideUp();
}
if(window.location.href.indexOf("web") > -1) {
  $('#video').slideDown();$("#code").hide();$("#intro").slideUp();$('#footer').slideUp();
} */

$('select').on('change', function() {
  if(this.value == "video"){$('#video').slideDown();$("#code").hide();$("#intro").slideUp();$('#footer').slideUp();
  updateVideo();}
  else if(this.value == "code"){$('#code').slideDown();$("#video").hide();$("#intro").slideUp();$('#footer').slideUp(); updateWeb();}
  else{$('#intro').slideDown();$('#code').slideUp();$('#video').slideUp();$('#footer').slideDown();updateReset();};
});


function updateVideo() { 
  if (history.pushState) { 
  var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?video'; 
  window.history.pushState({path:newurl},'',newurl); 
  } 
  }
  function updateWeb() { 
    if (history.pushState) { 
    var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + '?web'; 
    window.history.pushState({path:newurl},'',newurl); 
    } 
    }
    function updateReset() { 
      if (history.pushState) { 
      var newurl = window.location.protocol + "//" + window.location.host + window.location.pathname + ''; 
      window.history.pushState({path:newurl},'',newurl); 
      } 
      }
    
  
  if(window.location.search == '?video'){
    $('#video').slideDown();$("#code").hide();$("#intro").slideUp();$('#footer').slideUp();
  }
  if(window.location.search == '?web'){
    $('#code').slideDown();$("#video").hide();$("#intro").slideUp();$('#footer').slideUp();
  }


$('#title').click(function(){updateReset();$('#intro').slideDown();$('#code').slideUp();$('#video').slideUp();$('#menu').prop('selectedIndex',0);$('#footer').slideDown(); });

$("#titel").keyup(function (e) {
  if (e.which == 13) {
    $(".down").click();
  }
});


// VIDEO SET

var zip = new JSZip();
var zip2 = new JSZip();

var option1 = $("#option1").prop('checked');
var option1sub1 = $("#option1sub1").prop('checked');
var option1sub2 = $("#option1sub2").prop('checked');
var option1sub3 = $("#option1sub3").prop('checked');
var option1sub4 = $("#option1sub4").prop('checked');
var option2 = $("#option2").prop('checked');
var option3 = $("#option3").prop('checked');
var option3sub1 = $("#option3sub1").prop('checked');
var option3sub2 = $("#option3sub2").prop('checked');
var option3sub3 = $("#option3sub3").prop('checked');
var option3sub4 = $("#option3sub4").prop('checked');
var option4 = $("#option4").prop('checked');
var option5 = $("#option5").prop('checked');
var option6 = $("#option6").prop('checked');
var number = false;
var titel = "";
$("input[id=titel]").change(function(){
  titel = $(this).val();
});
if($("input[id=titel]").val().length === 0){titel="folder_template"};
var currentnumber = "";
var currentnumber2 = "";
var currentnumber3 = "";
var currentnumber4 = "";
var currentnumber5 = "";
var currentnumber6 = "";
if(number == true){currentnumber = '00'+1};

/*Option 1*/
$( "#option1" ).change(function() {
  option1 = $("#option1").prop('checked');

  if(option1 == true){
    console.log('option1:true');
    zip.folder(currentnumber + "edit");
    $('#option1sub').slideDown();
  }
  else {
    console.log('option1:false');
    zip.remove(currentnumber + "edit");
    $('#option1sub').slideUp();
  }
});
  $( "#option1sub1" ).change(function() {
    option1sub1 = $("#option1sub1").prop('checked');

    if(option1sub1 == true){
      console.log('option1sub1:true');
      zip.folder("edit/pr");
    }
    else {
      console.log('option1sub1:false');
      zip.remove("edit/pr");
    }
  });
  $( "#option1sub2" ).change(function() {
    option1sub2 = $("#option1sub2").prop('checked');

    if(option1sub2 == true){
      console.log('option1sub2:true');
      zip.folder("edit/drp");
    }
    else {
      console.log('option1sub2:false');
      zip.remove("edit/drp");
    }
  });
  $( "#option1sub3" ).change(function() {
    option1sub3 = $("#option1sub3").prop('checked');

    if(option1sub3 == true){
      console.log('option1sub3:true');
      zip.folder("edit/ae");
    }
    else {
      console.log('option1sub3:false');
      zip.remove("edit/ae");
    }
  });
  $( "#option1sub4" ).change(function() {
    option1sub4 = $("#option1sub4").prop('checked');

    if(option1sub4 == true){
      console.log('option1sub4:true');
      zip.folder("edit/c4d");
    }
    else {
      console.log('option1sub4:false');
      zip.remove("edit/c4d");
    }
  });
 /*Option 2*/
 $( "#option2" ).change(function() {
   option2 = $("#option2").prop('checked');

   if(option2 == true){
     console.log('option2:true');
     zip.folder(currentnumber +"audio");
   }
   else {
     console.log('option1:false');
     zip.remove("audio");
   }
 });
 /*Option 3*/
 $( "#option3" ).change(function() {
   option3 = $("#option3").prop('checked');

   if(option3 == true){
     console.log('option3:true');
     zip.folder("footage");
     $('#option3sub').slideDown();
   }
   else {
     console.log('option3:false');
     zip.remove("footage");
     $('#option3sub').slideUp();
   }
 });
 $( "#option3sub1" ).change(function() {
   option3sub1 = $("#option3sub1").prop('checked');

   if(option3sub1 == true){
     console.log('option3sub1:true');
     zip.folder("footage/canon");
   }
   else {
     console.log('option3sub1:false');
     zip.remove("footage/canon");
   }
 });
 $( "#option3sub2" ).change(function() {
   option3sub2 = $("#option3sub2").prop('checked');

   if(option3sub2 == true){
     console.log('option3sub2:true');
     zip.folder("footage/sony");
   }
   else {
     console.log('option3sub2:false');
     zip.remove("footage/sony");
   }
 });
 $( "#option3sub3" ).change(function() {
   option3sub3 = $("#option3sub3").prop('checked');

   if(option3sub3 == true){
     console.log('option3sub3:true');
     zip.folder("footage/ursa");
   }
   else {
     console.log('option3sub3:false');
     zip.remove("footage/ursa");
   }
 });
 $( "#option3sub4" ).change(function() {
   option3sub4 = $("#option3sub4").prop('checked');

   if(option3sub4 == true){
     console.log('option3sub4:true');
     zip.folder("footage/gh5");
   }
   else {
     console.log('option3sub4:false');
     zip.remove("footage/gh5");
   }
 });
 $( "#option3sub5" ).change(function() {
   option3sub5 = $("#option3sub5").prop('checked');

   if(option3sub5 == true){
     console.log('option3sub5:true');
     zip.folder("footage/drone");
   }
   else {
     console.log('option3sub5:false');
     zip.remove("footage/drone");
   }
 });
 $( "#option3sub6" ).change(function() {
   option3sub6 = $("#option3sub6").prop('checked');

   if(option3sub6 == true){
     console.log('option3sub6:true');
     zip.folder("footage/gopro");
   }
   else {
     console.log('option3sub6:false');
     zip.remove("footage/gopro");
   }
 });

 /*Option 4*/
 $( "#option4" ).change(function() {
   option4 = $("#option4").prop('checked');

   if(option4 == true){
     console.log('option4:true');
     zip.folder("misc");
   }
   else {
     console.log('option4:false');
     zip.remove("misc");
   }
 });
 /*Option 5*/
 $( "#option5" ).change(function() {
   option5 = $("#option5").prop('checked');

   if(option5 == true){
     console.log('option5:true');
     zip.folder("rendering");
   }
   else {
     console.log('option5:false');
     zip.remove("rendering");
   }
 });
 /*Option 6*/
 $( "#option6" ).change(function() {
   option6 = $("#option6").prop('checked');

   if(option6 == true){
     console.log('option6:true');
     zip.folder("output");
   }
   else {
     console.log('option6:false');
     zip.remove("output");
   }
 });
 $( "#number" ).change(function() {
   number = $("#number").prop('checked');
 });

 jQuery("#download").on("click", function () {
  zip.generateAsync({type:"blob"}).then(function (blob) { 
      saveAs(blob, titel);                         
  }, function (err) {
      jQuery("#download").text(err);
  });
});


var option21 = $("#option21").prop('checked');
var option21sub1 = $("#option21sub1").prop('checked');
var option21sub2 = $("#option21sub2").prop('checked');
var option21sub2 = $("#option21sub3").prop('checked');
var option22 = $("#option2").prop('checked');
var option22sub1 = $("#option22sub1").prop('checked');
var option22sub2 = $("#option22sub2").prop('checked');
var option23 = $("#option23").prop('checked');
var option24 = $("#option24").prop('checked');
var option25 = $("#option25").prop('checked');
var option25sub1 = $("#option25sub1").prop('checked');
var option26 = $("#option26").prop('checked');

$( "#option21" ).change(function() {
  option21 = $("#option21").prop('checked');

  if(option21 == true){
    console.log('option21:true');
    zip2.folder("css");
    $('#option21sub').slideDown();
  }
  else {
    console.log('option21:false');
    zip2.remove("css");
    $('#option21sub').slideUp();
  }
});
  $( "#option21sub1" ).change(function() {
    option21sub1 = $("#option21sub1").prop('checked');

    if(option21sub1 == true){
      console.log('option21sub1:true');
      zip2.folder("css").file("style.css","");
    }
    else {
      console.log('option21sub1:false');
      zip2.remove("css").file("style.css","");
    }
  });

  $( "#option21sub2" ).change(function() {
    option21sub2 = $("#option21sub2").prop('checked');

    if(option21sub2 == true){
      console.log('option21sub2:true');
      JSZipUtils.getBinaryContent("https://maxcdn.bootstrapcdn.com/bootstrap/4.0.0/js/bootstrap.min.js", function (err, data) {
        if(err) {
           throw err;
        }
        zip2.folder("css").file("boostrap.min.css", data, {binary:true});
      });
    }
    else {
      console.log('option21sub2:false');
      zip2.remove("css").file("boostrap.min.css","");
    }
  });

  $( "#option22" ).change(function() {
    option22 = $("#option22").prop('checked');
  
    if(option22 == true){
      console.log('option22:true');
      zip2.folder("js");
      $('#option22sub').slideDown();
    }
    else {
      console.log('option22:false');
      zip2.remove("js");
      $('#option22sub').slideUp();
    }
  });

  $( "#option22sub1" ).change(function() {
    option22sub1 = $("#option22sub1").prop('checked');

    if(option22sub1 == true){
      console.log('option22sub1:true');
      zip2.folder("js").file("script.js","");
    }
    else {
      console.log('option22sub1:false');
      zip2.remove("js").file("script.js","");
    }
  });

  $( "#option22sub2" ).change(function() {
    option22sub2 = $("#option22sub2").prop('checked');

    if(option22sub2 == true){
      console.log('option22sub2:true');
      JSZipUtils.getBinaryContent("https://code.jquery.com/jquery-3.3.1.min.js", function (err, data) {
        if(err) {
           throw err;
        }
        zip2.folder("js").file("jquery.min.js", data, {binary:true});
      });
    }
    else {
      console.log('option22sub2:false');
      zip2.remove("js").file("jquery.min.js","");
    }
  });

  $( "#option23" ).change(function() {
    option23 = $("#option23").prop('checked');
  
    if(option23 == true){
      console.log('option23:true');
      zip2.folder("fonts");
    }
    else {
      console.log('option23:false');
      zip2.remove("fonts");
    }
  });
  
  $( "#option24" ).change(function() {
    option24 = $("#option24").prop('checked');
  
    if(option24 == true){
      console.log('option24:true');
      zip2.folder("img");
    }
    else {
      console.log('option24:false');
      zip2.remove("img");
    }
  });

  $( "#option25" ).change(function() {
    option25 = $("#option25").prop('checked');
  
    if(option25 == true && option25sub1 == false){
      console.log('option25:true');
      zip2.file(".htaccess","");
      $('#option25sub').slideDown();
    }
    else if(option25 == false && option25sub1 == false) {
      console.log('option25:false');
      zip2.remove(".htaccess");
      $('#option25sub').slideUp();
    }
  });

  $( "#option25sub1" ).change(function() {
    option25sub1 = $("#option25sub1").prop('checked');

    if(option25sub1 == true){
      console.log('option25sub1:true');
      JSZipUtils.getBinaryContent("files/htaccess.txt", function (err, data) {
        if(err) {
           throw err;
        }
        zip2.file(".htaccess", data, {binary:true});
      });
    }
    else {
      console.log('option25sub1:false');
      zip2.remove(".htaccess","");
    }
  });

  $( "#option26" ).change(function() {
    option26 = $("#option26").prop('checked');
  
    if(option26 == true && option22sub2 == false){
      console.log('option26:true');
      JSZipUtils.getBinaryContent("files/index.html", function (err, data) {
        if(err) {
           throw err;
        }
        zip2.file("index.html", data, {binary:true});
      });
      
    }
    if(option26 == true && option22sub2 == true){
      console.log('option26:true');
      JSZipUtils.getBinaryContent("files/index_jquery.html", function (err, data) {
        if(err) {
           throw err;
        }
        zip2.file("index.html", data, {binary:true});
      });};
      if(option26 == true && option21sub2 == true && option22sub2 == true ){
        console.log('option26:true');
        JSZipUtils.getBinaryContent("files/index_jquery_boostrap.html", function (err, data) {
          if(err) {
             throw err;
          }
          zip2.file("index.html", data, {binary:true});
        });}
        if(option26 == true && option21sub2 == true && option22sub2 == false ){
          console.log('option26:true');
          JSZipUtils.getBinaryContent("files/index_boostrap.html", function (err, data) {
            if(err) {
               throw err;
            }
            zip2.file("index.html", data, {binary:true});
          });}
    else {
      console.log('option26:false');
      zip2.remove("index.html");
    }
  }); 

jQuery("#download2").on("click", function () {
    zip2.generateAsync({type:"blob"}).then(function (blob) { 
        saveAs(blob, titel);                         
    }, function (err) {
        jQuery("#download2").text(err);
    });
});
