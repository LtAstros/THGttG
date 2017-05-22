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
$("#stay3").click(function() {
    $("#up3").hide();
    $("#6-1").show();
});
$("#up3").click(function() {
    $("#stay3").hide();
    $("#6-2").show();
});
$("#stay4").click(function() {
    $("#up4").hide();
    $("#7-1").show();
});
$("#up4").click(function() {
    $("#stay4").hide();
    $("#7-2").show();
});
$("#stay5").click(function() {
    $("#up5").hide();
    $("#8-1").show();
});
$("#up5").click(function() {
    $("#stay5").hide();
    $("#8-2").show();
});
$("#end").click(function() {
    $("#9-1").show();
})
}
$(document).ready(pageload);