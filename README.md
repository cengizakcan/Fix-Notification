# Fix-Notification


Basic Use 

           $(document).fix({

                    title:          "TITLE",                        // Notification title
                    message:        "This is a testing message",    // Notification message detalis
                    type:           "bottom",                              // Notification type top - bottom - box-right-bottom - box-right-top
                    status:         "success",                         // Notification  success - danger - warning - info
                    class:          "test",                         // Notification add class
                    timer:          "",                          // Notification show and hide time secont Examples 5 second ( 5000 = 5 )
                    show:           250,
                    end:            function(){

                        $(".return").html("finis");

                    }

                });

    
    
