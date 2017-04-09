$(document).ready(function(e) {
    $("#findWeather").click(function() {
        var lat, lng;
        var canContinue = true;
        if (navigator.geolocation) {
            navigator.geolocation.getCurrentPosition(function(position) {
                lat = position.coords.latitude;
                lng = position.coords.longitude;
                var data = jQuery.getJSON("http://api.openweathermap.org/data/2.5/weather?lat=" + lat + "&lon=" + lng + "&appid=08c4d8b874d378e7c8ee656df65a23b4", function() {
                    var items = [];
                    $.each(data, function(key, val) {
                        if (key == "responseText") {
                            //$.each(val, function(key1, val1) {
                                items.push( "<li class=\"weather\">" + key + ": " + val + "</li>" );
                            //});
                        }
                    });
                    $("<ul>", {
                            "class": "my-new-list",
                            html: items.join("")
                        }).appendTo("#show");
                    $("</ul>").appendTo("#show");
                });
            }, function() {
                alert("No weather could be uploaded due to unknown location.");
                canContinue = false;
            });
        }
    });
});
