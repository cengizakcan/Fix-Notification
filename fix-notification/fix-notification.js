/*
*   Autor       : Cengiz AKCAN
*   Mail        : cengiz@polotasarim.com
*   Time        : 2016-19-5 22:20:00
*   Project     : Fix Basic Notification
*   Version     : 1.0.0 Beta
*   Github      : cengizakcan1996
*   Facebook    : cengizakcan1996
*   Twitter     : cengiz_akcan
*
* */
(function($) {

    "use strict";


    $.fn.fix = function(param) {


        var x = $.extend({

            type:       "bottom",
            title:      "TİTLE",
            message:    "MESSAGE",
            class:      "",
            color:      "#5e35b1",
            timer:      "5000",
            show:       250


        }, param);

         function end(){
			 
			/*
              * @ Param
              * @ Mix Alert
              * */
             $("body").append('<div class="fix-one" ><div class="fix-content"><div class="fix-title">'+ x.title+'</div><div class="fix-message">'+ x.message+'</div><div class="fix-exit">X</div></div></div>');


			 
             /*
              * @ Param Selector
              * @ Mix Selector
              * */
             var    one     =   $(".fix-one");
             var    exit    =   $(".fix-exit");

             /*
              * @ Param
              * @ Mix All Notification Remove
              * */
            //one.remove();

         
             /*
              * @ Param
              * @ Mix Timer
              * */
              if(x.timer !== "" && $.isNumeric(x.timer)){ setTimeout(function(){ one.fadeOut(x.show); }, x.timer ); }


             /*
              * @ Param
              * @ Mix Exit
              * */
             exit.click(function(){  one.fadeOut(x.show); });



             /*
              * @ Param x.color
              * @ Mix Animated
              * */
             if(x.class !== "")         { one.addClass(x.class); }
             if(x.type == "bottom")     { one.css({ bottom:"0px" }); }
             if(x.type == "top")        { one.css({ top:"0px" }); }


             /*
              * @ Param
              * @ Mix Alert
              * */
             one.css(
                 {
                     background:    x.color,
                     color:         "white"
                 }
             );


             /*
              * @ Param
              * @ Mix Show Notification
              * */
            one.fadeIn(x.show);

        }


        /*
        *
        * Running Plugin
        *
        * */
        return end()


    }


})(jQuery);