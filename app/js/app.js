//onReady
$(function(){
  if ("geolocation" in navigator) {
    navigator.geolocation.getCurrentPosition(function(position) {
      console.log("Lat: ", position.coords.latitude);
      console.log("Lng: ", position.coords.longitude);

      $.ajax({
        url: "http://api.openweathermap.org/data/2.5/weather",
        data: {
          lat: position.coords.latitude,
          lon: position.coords.longitude,
          units: "imperial",
          APPID: "b23d5d436b1305078f94a462e31d505d"
        },
        dataType: "json"
      }).done(function(json){
        console.log(json);

        $(".weatherCity").text(json.name);
        $(".weatherDescription").text(json.weather[0].description + " and ");
        $(".weatherTemperature").text(Math.floor(json.main.temp));
        $(".degreeScale").removeClass("wi-celsius").addClass("wi-fahrenheit");

        // Should we use the day or night icon?
        var d = Date.now().toString().slice(0, 10);
        if (d > json.sys.sunrise && d < json.sys.sunset) {
          $(".weatherIcon i").addClass("wi-owm-day-" + json.weather[0].id);
        } else {
          $(".weatherIcon i").addClass("wi-owm-night-" + json.weather[0].id);
        }
      }).fail(function(xhr, status, error) {
        console.log("Failed to get weather.");
        console.log("Error: ", error);
        console.log("Status: ", status);
        console.log(xhr);
      });
    });
  } else {
    console.log("No geolocation api access!");
  }
});
