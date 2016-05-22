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
            title:      "TITLE",
            message:    "MESSAGE",
            status:     "danger",
            timer:      "5000",
            show:       250,
            end:        function(data){}


        }, param);

         function end(){
			 
			/*
              * @ Param
              * @ Mix Alert
              * */
             $("body").append('<div class="fixall fixexit" ><div class="fix-content"><div class="fix-title">'+ x.title+'</div><div class="fix-message">'+ x.message+'</div></div></div>');

			 
             /*
              * @ Param Selector
              * @ Mix Selector
              * */
             var    fixall     =   $(".fixall");
             var    fixexit    =   $(".fixexit");

         
             /*
              * @ Param
              * @ Mix Timer
              * */
              if(x.timer !== "" && $.isNumeric(x.timer)){ setTimeout(function(){ fixall.fadeOut(x.show).remove();    x.end("finis"); }, x.timer ); }


             /*
              * @ Param
              * @ Mix Status
              * */
              if((x.status !== "") && (x.status !== "danger") && (x.status !== "success") && (x.status !== "warning") && (x.status !== "warning") && (x.status !== "info") ){ x.status = "success"; }
              if(x.status == "success") {}
              if(x.status == "danger")  {}
              if(x.status == "warning") {}
              if(x.status == "info")    {}


             /*
              * @ Param
              * @ Mix Exit and remove
              * */
             fixexit.click(function(){  $(this).fadeOut(x.show); $(this).remove(); x.end("remove"); });



             /*
              * @ Param x.color
              * @ Mix Animated
              * */
             if((x.type !== "bottom") && (x.type !== "top") && (x.type !== "box-right-bottom") && (x.type !== "box-right-top") ){ x.type = "top"; }
             if(x.class == "")                          { fixall.removeClass("fix-four fix-two fix-three"); fixall.addClass("fix-one " + x.status); }
             if(x.type == "bottom")                     { fixall.removeClass("fix-one fix-one fix-two fix-three"); fixall.addClass("fix-four " + x.status); }
             if(x.type == "top")                        { fixall.removeClass("fix-four fix-two fix-three"); fixall.addClass("fix-one " + x.status); }
             if(x.type == "box-right-bottom")           { fixall.removeClass("fix-four fix-one fix-three"); fixall.addClass("fix-two " + x.status); }
             if(x.type == "box-right-top")              { fixall.removeClass("fix-four fix-one fix-two"); fixall.addClass("fix-three " + x.status); }


             /*
              * @ Param
              * @ Mix Show Notification
              * */
             fixall.fadeIn(x.show);


        }


        /*
        *
        * Running Plugin
        *
        * */
        return end()


    }


})(jQuery);