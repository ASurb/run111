
var vis = (function(){
    var stateKey, 
        eventKey, 
        keys = {
                hidden: "visibilitychange",
                webkitHidden: "webkitvisibilitychange",
                mozHidden: "mozvisibilitychange",
                msHidden: "msvisibilitychange"
    };
    for (stateKey in keys) {
        if (stateKey in document) {
            eventKey = keys[stateKey];
            break;
        }
    }
    return function(c) {
        if (c) document.addEventListener(eventKey, c);
        return !document[stateKey];
    }
})();


vis(function(){
					
    if(vis()){	

	      setTimeout(function(){ 

            visibleResume();
            

          
        },300);		
												
    } else {
	

        visiblePause();
        

    }
});


var notIE = (document.documentMode === undefined),
    isChromium = window.chrome;
      
if (notIE && !isChromium) {

   

} else {
    

    if (window.addEventListener) {


        window.addEventListener("focus", function (event) {
          
            setTimeout(function(){                 
                 

                 visibleResume();
              

              
            },300);

        }, false);


        window.addEventListener("blur", function (event) {


            visiblePause();
          

        }, false);

    } else {


        window.attachEvent("focus", function (event) {

            setTimeout(function(){                 

                 visibleResume();
               

              
            },300);

        });


        window.attachEvent("blur", function (event) {


            visiblePause();
          


        });
    }
}