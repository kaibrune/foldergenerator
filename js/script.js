$("#option1sub").hide();
$("#option3sub").hide();
$("#code").hide();
$("#video").hide();
$('select > option:first').hide();

$('select').on('change', function() {
  if(this.value == "video"){$('#video').slideDown();$("#code").hide();$("#intro").slideUp();}
  else if(this.value == "code"){$('#code').slideDown();$("#video").hide();$("#intro").slideUp();}
  else{$('#intro').slideDown();$('#code').slideUp();$('#video').slideUp();};
});



var zip = new JSZip();

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

