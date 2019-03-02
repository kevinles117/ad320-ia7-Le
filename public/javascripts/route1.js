
function myFunction() {
    var e = document.getElementById("route1");
    var c = window.getComputedStyle(e).backgroundColor;
    if (c === "rgb(0, 0, 255)") {
    document.getElementById("route1").style.background = "#FF0000";
} else{
    document.getElementById("route1").style.background = "#0000FF";
}
}
