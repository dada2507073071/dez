var ss = document.getElementById('ss');
var btn = document.getElementById('btn');
var l1 = document.getElementById('l1');
var span = document.getElementById('span2');
var sz = document.getElementById('sz');
var img1 = document.getElementById('img_one');
var img2 = document.getElementById('img2');
var img3 = document.getElementById('img3');
var js1 = document.getElementById('js1');
var calendar = document.getElementById('calendar');
var d1 = document.getElementById('dd_one');
var d2 = document.getElementById('dd_two');
// var demo3 = document.getElementById('demo3');
ss.onclick = function () {
    btn.style.display = "block";
    l1.style.display = "none";
}
span.onclick = function () {
    btn.style.display = "none";
    l1.style.display = "block";
}
img1.onclick = function () {
    if (sz.style.display == 'none') {
        sz.style.display = "block";
    } else if (sz.style.display == 'block') {
        sz.style.display = "none";
    }
}
img2.onclick = function () {
    if (js1.style.display == 'none') {
        js1.style.display = "block";
    } else if (js1.style.display == 'block') {
        js1.style.display = "none";
    }
}
img3.onclick = function () {
    if (calendar.style.display == 'none') {
        calendar.style.display = "block";
    } else if (calendar.style.display == 'block') {
        calendar.style.display = "none";
    }
}
// demo3.datepicker({});