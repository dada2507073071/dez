// var but = $(".box_input");
var box_tong = $(".box_select");
console.log(box_tong);
var box_down = $(".box_day");
// var box_day = $(".box_day");
$(function () {
    for (var i = 0; i < $(".box_input").length; i++) {
        // console.log("ok");
        // $(".box_input").eq(i).data("index",i);
        $(".box_input").eq(i).change(function () {
            console.log(i);
            var check = $(this).is(":checked");
            if (check == true) {
                box_tong.slideDown("slow");
                box_down.slideDown("slow");
                $(this).slideDown("none");
            } else {
                box_tong.slideUp("slow");
                box_down.slideUp("slow");
                $(this).slideDown("none");
            }
        });
    }

})