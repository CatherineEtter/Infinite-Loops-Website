function activateNews() {
    $("#content-wrapper").load("pages/news.html");
    $(".nav-opt").removeClass("active");
    $("#nav-news").addClass("active");
}
function activateMembers() {
    $("#content-wrapper").load("pages/members.html");
    $(".nav-opt").removeClass("active");
    $("#nav-members").addClass("active");
}
function activateClasses() {
    $("#content-wrapper").load("pages/classes.html");
    $(".nav-opt").removeClass("active");
    $("#nav-classes").addClass("active");
}
function activateContact() {
    $("#content-wrapper").load("pages/contact.html");
    $(".nav-opt").removeClass("active");
    $("#nav-contact").addClass("active");
}
function refreshClasses() {
    var yearStart = "<p class=\"m-title-content\">";
    var classStart = "<p class=\"s-title-content\">"
    var descStart = "<p class=\"body-content\">";
    
    $.getJSON("course-catalogue.json", function(data) {
        var length = Object.keys(data).length;
        
        $("#class-display").empty();
        for(var i = 0; i < length; i++) {
            
            if($("#year-1").is(":checked") && data[i].year == "Freshman") {
                $("#class-display").append(yearStart + data[i].year + "</p>");
                $("#class-display").append(classStart + data[i].title + "</p>");
                $("#class-display").append(descStart + data[i].description + "</p>");
            }
            if($("#year-2").is(":checked") && data[i].year == "Sophomore") {
                $("#class-display").append(yearStart + data[i].year + "</p>");
                $("#class-display").append(classStart + data[i].title + "</p>");
                $("#class-display").append(descStart + data[i].description + "</p>");
            }
            if($("#year-3").is(":checked") && data[i].year == "Junior") {
                $("#class-display").append(yearStart + data[i].year + "</p>");
                $("#class-display").append(classStart + data[i].title + "</p>");
                $("#class-display").append(descStart + data[i].description + "</p>");
            }
            if($("#year-4").is(":checked") && data[i].year == "Senior") {
                $("#class-display").append(yearStart + data[i].year + "</p>");
                $("#class-display").append(classStart + data[i].title + "</p>");
                $("#class-display").append(descStart + data[i].description + "</p>");
            }
        }
    });
}
$(document).ready(function() {
    //Do Nothing :)
});
