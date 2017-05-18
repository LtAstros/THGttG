function pageload (){
$("div").hide();
//Story Elements
$("#start").click(function() {
    $("#1").show();
});
$("#wake").click(function() {
    $("#sleep").hide();
    $("#2-1").show();
});
$("#sleep").click(function() {
    $("#wake").hide();
    $("#2-2").show();
});
$("#lay").click(function() {
   $("#confront").hide();
   $("#3-1").show();
});    
$("#confront").click(function() {
    $("#lay").hide();
    $("#3-2").show();
});
$("#stay1").click(function() {
    $("#up1").hide();
    $("#4-1").show();
});
$("#up1").click(function() {
   $("#stay1").hide();
   $("#4-2").show();
});   
$("#stay2").click(function() {
    $("#up2").hide();
    $("#5-1").show();
});
$("#up2").click(function() {
   $("#stay2").hide();
   $("#5-2").show();
}); 
}
$(document).ready(pageload);