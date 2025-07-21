
var Resolution = "high";

// get the file name according to the chose resolution
function setResolution(resolutionImage) {
	if (Resolution == "high") {
		return resolutionImage.replace(/-lowres\.jpg/i, ".jpg"); 
	} else {
		if(!resolutionImage.match(/-lowres\.jpg/i)) {
			return resolutionImage.replace(/\.jpg/i, "-lowres.jpg"); 
		} else {
			return $resolution;
		}
	}
}


$(document).ready(function() {

$("body").on("contextmenu", "img", function(e) {
  return false;
});

				// Put the image in the facsimile viewing pane, if you click on it's thumb.
				$('.pages a:has(img)').click(function() {
					var imgSource = $(this).attr("href");
					imgSource = setResolution(imgSource);
                            $('#facsimile').attr("src", imgSource);
				    $('.pages a:has(img)').children('img').css("border", "none");
				    $(this).children('img').css("border-style", "solid");
                            $(this).children('img').css("border-width", "1px");
                            $(this).children('img').css("border-color", "#ffffff");
				    return false;
				
				});

				$('#highRes').click(function() {
					Resolution = "high";
					var highResSrc = setResolution($('#facsimile').attr("src"));
					$('#facsimile').attr("src", highResSrc );
					$('#highRes').css("background-color", "#aaaaaa");
					$('#lowRes').css("background-color", "");
				});			
				$('#lowRes').click(function() {
					Resolution = "low";
					var lowResSrc = setResolution($('#facsimile').attr("src"));
					$('#facsimile').attr("src", lowResSrc);
					$('#lowRes').css("background-color", "#aaaaaa");
					$('#highRes').css("background-color", "");
				});	


                        $('.nav img').click(function() {

                            $(this).parent('li').find('ul').slideToggle(250);

                        });

				// make it draggable
				$(function() {
    					$( "#facsimile" ).draggable({ cursor: "move"});
  				});


                        // ZOOM SLIDER
                        function refreshSwatch() {
                            var red = $("#slider").slider("value");
                            $('#facsimile').width(red + "%");
                        }

                        $(function() {
                            $("#slider").slider({
                                orientation: "horizontal",
                                range: "min",
                                min: 30,
                                max: 1000,
                                value: 100,
                                change: refreshSwatch
                            });
                            $("#slider").slider("value", 100);
                        });

                    });
