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
            $("#scroll_div").css({"display": "inline-block"}).addClass(" slideInUp");
        }, 1000);
        setTimeout(function(){
            $("#connect_div_whole").css({"display": "inline-block"}).addClass(" slideInRight");
        }, 1200);
        setTimeout(function(){
            $("#elemleft_in_btn_below_span").css({"display": "inline"}).addClass(" zoomIn");
        }, 1500);
        setTimeout(function(){
            $("#elemright1_in_btn_below_span").css({"display": "inline"}).addClass(" zoomIn");
            $("#connect_div_twtic").css({"display": "block"}).addClass(" zoomIn");
        }, 2000);
        
        setTimeout(function(){
            $("#elemright2_in_btn_below_span").css({"display": "inline"}).addClass(" zoomIn");
            $("#connect_div_fbic").css({"display": "block"}).addClass(" zoomIn");
        }, 2300);
        setTimeout(function(){
            $("#connect_div_igic").css({"display": "block"}).addClass(" zoomIn");
        }, 2600);
    }

    var sec2_anims = function(){
        setTimeout(function(){
            $("#img_sec2").css({"display": "block"}).addClass("fadeInLeft");
            $("#div_beside_img_sec2").css({"display": "block"}).addClass("fadeIn");
            $("#sec2_h3").css({"display": "block"}).addClass(" fadeInDown");
        }, 400);
        setTimeout(function(){
            $("#span_below_sec2_h3").css({"display": "block"}).addClass(" fadeInRight");
        }, 600);
        setTimeout(function(){
            $("#btn_below_span_sec2").css({"display": "block"}).addClass(" fadeInRight");
        }, 800);
        setTimeout(function(){
            $("#scroll_div2").css({"display": "inline-block"}).addClass(" slideInUp");
        }, 1000);
        setTimeout(function(){
            $("#connect_div_whole2").css({"display": "inline-block"}).addClass(" slideInRight");
        }, 1200);
        setTimeout(function(){
            $("#elemleft_in_btn_below_span2").css({"display": "inline"}).addClass(" zoomIn");
        }, 1500);
        setTimeout(function(){
            $("#elemright1_in_btn_below_span2").css({"display": "inline"}).addClass(" zoomIn");
            $("#connect_div_twtic2").css({"display": "block"}).addClass(" zoomIn");
        }, 2000);
        
        setTimeout(function(){
            $("#elemright2_in_btn_below_span2").css({"display": "inline"}).addClass(" zoomIn");
            $("#connect_div_fbic2").css({"display": "block"}).addClass(" zoomIn");
        }, 2300);
        setTimeout(function(){
            $("#connect_div_igic2").css({"display": "block"}).addClass(" zoomIn");
        }, 2600);
    }
    
    sec1_anims();
    sec2_anims();


    // var doc_begin_position = $("#fullpage").position();
    // console.log(doc_begin_position.top);
    // if ( == $("#section1").offset()){
        //
    // }
});