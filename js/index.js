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
var a1 = document.getElementById("a1");
var a2 = document.getElementById("a2");
var box = document.getElementById('box');
var iframe = document.getElementById('iframe');
var l6 = document.getElementById('l6');
var ul_two = document.getElementById('ul_two')
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
// d1.onclick = function () {
//     if (d2.style.display == 'none') {
//         d2.style.display = "block";
//     } else if (d2.style.display == 'block') {
//         d2.style.display = "none";
//     }
// }    
img2.onclick = function () {
    if (js1.style.display == 'none') {
        js1.style.display = "block";
    } else if (js1.style.display == 'block') {
        js1.style.display = "none";
    }
}
l6.onclick = function () {
    if (ul_two.style.display == 'none') {
        ul_two.style.display = "block";
    } else if (ul_two.style.display == 'block') {
        ul_two.style.display = "none";
    }
}
suo = true;
img3.onclick = function () {
    // if (calendar.style.display == 'none') {
    //     calendar.style.display = "block";
    // } else if (calendar.style.display == 'block') {
    //     calendar.style.display = "none";
    // }
    if (suo) {
        calendar.classList.remove('a')
        suo = false;
    } else {
        calendar.classList.add('a')
        suo = true;
    }

}
a1.onclick = function () {
    if (box.style.display == 'none') {
        box.style.display = "block";
    } else if (box.style.display == 'block') {
        box.style.display = "none";
    }
    iframe.width = "100%";
    iframe.height = "100%";
}
// a2.onclick = function () {
//     box.style.display = 'none';
//     iframe.width = "100%";
//     iframe.height = "100%";
// }
// demo3.datepicker({});