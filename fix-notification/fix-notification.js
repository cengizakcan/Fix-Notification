/*
*   Autor       : Cengiz AKCAN
*   Mail        : info@cengizakcan.com
*   Time        : 2016-19-5 22:20:00 / 12.03.2018
*   Project     : Fix Basic Notification
*   Version     : 1.0.0 Beta
*   Github      : cengizakcan
*   Facebook    : cengizakcan1996
*   Twitter     : cengiz_akcan
*
* */
(function($) {

    "use strict";


    $.fn.fix = function(param) {

        var hi = this;

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
             $(".fixall").removeClass("fadeInUp").addClass("fadeOutDown").fadeOut(function () {
                 $(this).remove();
             });
             hi.append('<div class="fixall animated fixexit" ><div class="fix-content"><div class="fix-svg"></div><div class="fix-title">'+ x.title+'</div><div class="fix-message">'+ x.message+'</div></div></div>');


             /*
              * @ Param Selector
              * @ Mix Selector
              * */
             var    fixall     =    $(".fixall");
             var    fixexit    =    $(".fixexit");
			 var	svg		   =    $(".fix-svg");

         
             /*
              * @ Param
              * @ Mix Timer
              * */
              if(x.timer !== "" && $.isNumeric(x.timer)){ setTimeout(function(){ $(".svgEffect").removeClass("fadeInUp").addClass("fadeOutDown");  fixall.removeClass("fadeInUp").addClass("fadeOutDown",function () {

                  $(this).fadeOut(function () {
                      fixall.remove();
                  });
              });    x.end("finis"); }, x.timer ); }

			  var success_svg = "<?xml  version='1.0' encoding='iso-8859-1'?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg class='svgEffect animated' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52;' xml:space='preserve'><g><path d='M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'/><path d='M38.252,15.336l-15.369,17.29l-9.259-7.407c-0.43-0.345-1.061-0.274-1.405,0.156c-0.345,0.432-0.275,1.061,0.156,1.406l10,8C22.559,34.928,22.78,35,23,35c0.276,0,0.551-0.114,0.748-0.336l16-18c0.367-0.412,0.33-1.045-0.083-1.411C39.251,14.885,38.62,14.922,38.252,15.336z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
			  
			  var warning_svg = "<?xml version='1.0' encoding='iso-8859-1'?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg class='svgEffect animated' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52;' xml:space='preserve'><g><path d='M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'/><path d='M26,10c-0.552,0-1,0.447-1,1v22c0,0.553,0.448,1,1,1s1-0.447,1-1V11C27,10.447,26.552,10,26,10z'/><path d='M26,37c-0.552,0-1,0.447-1,1v2c0,0.553,0.448,1,1,1s1-0.447,1-1v-2C27,37.447,26.552,37,26,37z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
			  
			  var info_svg = "<?xml version='1.0' encoding='iso-8859-1'?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg class='svgEffect animated' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52;' xml:space='preserve'><g><path d='M26,0C11.663,0,0,11.663,0,26s11.663,26,26,26s26-11.663,26-26S40.337,0,26,0z M26,50C12.767,50,2,39.233,2,26S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'/><path d='M26,37c-0.553,0-1,0.447-1,1v2c0,0.553,0.447,1,1,1s1-0.447,1-1v-2C27,37.447,26.553,37,26,37z'/><path d='M26.113,9.001C26.075,9.001,26.037,9,25.998,9c-2.116,0-4.106,0.815-5.615,2.304C18.847,12.819,18,14.842,18,17c0,0.553,0.447,1,1,1s1-0.447,1-1c0-1.618,0.635-3.136,1.787-4.272c1.153-1.137,2.688-1.765,4.299-1.727c3.161,0.044,5.869,2.752,5.913,5.913c0.029,2.084-0.999,4.002-2.751,5.132C26.588,23.762,25,26.794,25,30.158V33c0,0.553,0.447,1,1,1s1-0.447,1-1v-2.842c0-2.642,1.276-5.105,3.332-6.432c2.335-1.506,3.706-4.063,3.667-6.84C33.939,12.599,30.401,9.061,26.113,9.001z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
			  
			  var danger_svg = "<?xml version='1.0' encoding='iso-8859-1'?><!-- Generator: Adobe Illustrator 19.0.0, SVG Export Plug-In . SVG Version: 6.00 Build 0) --><svg class='svgEffect animated ' version='1.1' id='Capa_1' xmlns='http://www.w3.org/2000/svg' xmlns:xlink='http://www.w3.org/1999/xlink' x='0px' y='0px' viewBox='0 0 52 52' style='enable-background:new 0 0 52 52;' xml:space='preserve'><g><path d='M26,0C11.664,0,0,11.663,0,26s11.664,26,26,26s26-11.663,26-26S40.336,0,26,0z M26,50C12.767,50,2,39.233,2,26S12.767,2,26,2s24,10.767,24,24S39.233,50,26,50z'/><path d='M35.707,16.293c-0.391-0.391-1.023-0.391-1.414,0L26,24.586l-8.293-8.293c-0.391-0.391-1.023-0.391-1.414,0s-0.391,1.023,0,1.414L24.586,26l-8.293,8.293c-0.391,0.391-0.391,1.023,0,1.414C16.488,35.902,16.744,36,17,36s0.512-0.098,0.707-0.293L26,27.414l8.293,8.293C34.488,35.902,34.744,36,35,36s0.512-0.098,0.707-0.293c0.391-0.391,0.391-1.023,0-1.414L27.414,26l8.293-8.293C36.098,17.316,36.098,16.684,35.707,16.293z'/></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g><g></g></svg>";
			  

             /*
              * @ Param
              * @ Mix Status
              * */
              if((x.status !== "") && (x.status !== "danger") && (x.status !== "success") && (x.status !== "warning") && (x.status !== "warning") && (x.status !== "info") ){ x.status = "success"; }
              if(x.status == "success") { svg.html(success_svg); 	}
              if(x.status == "danger")  { svg.html(danger_svg); 	}
              if(x.status == "warning") { svg.html(warning_svg); 	}
              if(x.status == "info")    { svg.html(info_svg); 		}


             /*
              * @ Param
              * @ Mix Exit and remove
              * */
             fixexit.click(function(){
                 fixall.removeClass("fadeInUp").addClass("fadeOutDown",function () {
                     $(".svgEffect").removeClass("fadeInUp").addClass("fadeOutUp");
                     $(this).fadeOut(function () {
                         fixall.remove();
                     });
                 });
             });



             /*
              * @ Param x.color
              * @ Mix Animated
              * */
             if((x.type !== "bottom") && (x.type !== "top") && (x.type !== "box-right-bottom") && (x.type !== "box-right-top") ) { x.type = "top"; }
             if(x.class == "")                          { fixall.removeClass("fix-four fix-two fix-three"); fixall.addClass("fix-one " + x.status); }
             if(x.type == "bottom")                     { fixall.removeClass("fix-one fix-one fix-two fix-three"); fixall.addClass("fix-four " + x.status); }
             if(x.type == "top")                        { fixall.removeClass("fix-four fix-two fix-three"); fixall.addClass("fix-one " + x.status); }
             if(x.type == "box-right-bottom")           { fixall.removeClass("fix-four fix-one fix-three"); fixall.addClass("fix-two " + x.status); }
             if(x.type == "box-right-top")              { fixall.removeClass("fix-four fix-one fix-two"); fixall.addClass("fix-three " + x.status); }


             /*
              * @ Param
              * @ Mix Show Notification
              * */
             $(".svgEffect").addClass("fadeInUp");
             fixall.addClass("fadeInUp").fadeIn();


        }


        /*
        *
        * Running Plugin
        *
        * */
        return end()


    }


})(jQuery);
