let x = 5, y = 5, z = 5, statusCheck = "", m = 0, s = 1, colors = "#31b8f2";

function shiftRight() {
    let shiftRight = document.getElementById("shiftRight").value;
    x = shiftRight;
}
function shiftDown() {
    let shiftDown = document.getElementById("shiftDown").value;
    y = shiftDown;
}
function blurFunction() {
    let blur = document.getElementById("blur").value;
    z = blur;
}
function opacity() {
    let opacity = document.getElementById("opacity").value;
    color();
    s = opacity;
}
function color() {
    let color = document.getElementById("color").value;
    colors = "rgba(" + color.match(/[A-Za-z0-9]{2}/g).map(function(v) { return parseInt(v, 16) }).join(",") + "," + s + ")";
}
function spread() {
    let spread = document.getElementById("spread").value;
    m = spread;
}

function check(value) {
    let checked = true;
    if (document.querySelector('#check:checked')) {
        checked = false;
    }
    if (checked == false) {
        statusCheck = "inset ";
    } else {
        statusCheck = "";
    }
}
setInterval(function(){
    document.getElementById("result").innerHTML = "-webkit-box-shadow: " + statusCheck + x + "px " + y + "px " + z + "px " + m + "px " + colors + ";" + "<br> box-shadow: " + statusCheck + x + "px " + y + "px " + z + "px " + m + "px " + colors + ";";
    document.getElementById("boxGenerator").style.boxShadow = statusCheck + x + "px " + y + "px " + z + "px " + m + "px " + colors;
}, 1);
document.getElementById("copy").addEventListener("click", function(){
    let copyText = "-webkit-box-shadow: " + statusCheck + x + "px " + y + "px " + z + "px " + m + "px " + colors + ";" + "\n box-shadow: " + statusCheck + x + "px " + y + "px " + z + "px " + m + "px " + colors + ";";
    navigator.clipboard.writeText(copyText);
    alert("Copied to clipboard!");
});