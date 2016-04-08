# fcc-local_weather
Local weather project for Free Code Camp

## Summary
Project number four for [Free Code Camp](https://www.freecodecamp.com) is a simple page to show the [local weather](https://www.freecodecamp.com/challenges/show-the-local-weather).  This involves using a geolocation service either by IP through [ipinfo.io](http://ipinfo.io/) or through the browser's geolocation API.  Once the location has been established, we can use [Open Weather API](http://openweathermap.org/current#geo) to get the actual weather info in json format.

## Objective:
Build a [CodePen.io](https://codepen.io) app that is functionally similar to [the example project](http://codepen.io/FreeCodeCamp/full/bELRjV).

### Rules:
1. Don't look at the example project's code.  Figure it out for yourself.
2. Fulfill the below user stories.  Use whichever libraries or APIs you need.  Give it your own personal style.

### User Stories:
* I can see the weather in my current location.
* I can see a different icon or background image (e.g. snowy mountain, hot desert) depending on the weather.
* I can push a button to toggle between Fahrenheit and Celsius.

## Technology and Libraries:
* jQuery for ajax and DOM manipulation.
* [Open Weather API](http://openweathermap.org)
* The browser geolocation API.
* If the above fails, maybe attempt to locate by ip from [ipinfo.io](http://ipinfo.io).
* Weather icons from [weathericons.io](http://weathericons.io).
