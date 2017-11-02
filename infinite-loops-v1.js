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
function activateConstitution() {
    $("#content-wrapper").load("pages/constitution.html");
    $(".nav-opt").removeClass("active");
    $("#nav-constitution").addClass("active");
}
function refreshClasses() {
    var classStart = "<p class=\"s-title-content\">"
    var descStart = "<p class=\"body-content\">";
    
    $.getJSON("course-catalogue.json", function(data) {
        var length = Object.keys(data).length;
        
        $("#class-display").empty();
        for(var i = 0; i < length; i++) {
            
            if($("#fall").is(":checked") && data[i].term == "Fall") {
                $("#class-display").append(classStart + data[i].title + "</p>");
                $("#class-display").append(descStart + data[i].description + "</p>");
            }
            if($("#spring").is(":checked") && data[i].term == "Spring") {
                $("#class-display").append(classStart + data[i].title + "</p>");
                $("#class-display").append(descStart + data[i].description + "</p>");
            }
        }
    });
}
$(document).ready(function() {
    //Do Nothing :)
});
