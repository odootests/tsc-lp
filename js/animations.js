$(document).ready(function(){
    var sec1_anims = function(){
        setTimeout(function(){
            $("#img_sec1").css({"display": "block"}).addClass("fadeInLeft");
            $("#div_beside_img_sec1").css({"display": "block"}).addClass("fadeIn");
            $("#sec1_h3").css({"display": "block"}).addClass(" fadeInDown");
        }, 400);
        setTimeout(function(){
            $("#span_below_sec1_h3").css({"display": "block"}).addClass(" fadeInRight");
        }, 600);
        setTimeout(function(){
            $("#btn_below_span_sec1").css({"display": "block"}).addClass(" fadeInRight");
        }, 800);
        setTimeout(function(){
            $("#elemleft_in_btn_below_span").css({"display": "inline"}).addClass(" zoomIn");
        }, 1500);
        setTimeout(function(){
            $("#elemright_in_btn_below_span").css({"display": "inline"}).addClass(" zoomIn");
        }, 2000);
    }
    sec1_anims();
    // var doc_begin_position = $("#fullpage").position();
    // console.log(doc_begin_position.top);
    // if ( == $("#section1").offset()){
        //
    // }
});