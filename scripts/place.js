const temp = 78;
const windMph = 11;
const condition = "Cloudy";
let windChill;

// for wind chill testing #1
// const temp = 40;
// const windMph = 5;

// for wind chill testing #2
// const temp = 0;
// const windMph = 15;

// for wind chill testing #3
// const temp = 5;
// const windMph = 20;

const weatherList = document.getElementById('weather');

function calculateWindChill(temperature, windSpeed) {
    return (35.74 + 0.6215 * temperature - 35.75 * Math.pow(windSpeed, 0.16) + 0.4275 * temperature * Math.pow(windSpeed, 0.16)).toFixed(2);
}

document.addEventListener('DOMContentLoaded', function() {
    if (temp < 50 && windMph > 3) {
        windChill = calculateWindChill(temp, windMph)
        windChillEntry = `${windChill}°F`
    } else {
        windChillEntry = "N/A"
    }

    var firstItem = document.createElement('li');
    firstItem.innerHTML = `<strong>Temperature:</strong> ${temp}°F`;
    weatherList.appendChild(firstItem);

    var secondItem = document.createElement('li');
    secondItem.innerHTML = `<strong>Conditions:</strong> Cloudy`;
    weatherList.appendChild(secondItem);

    var thirdItem = document.createElement('li');
    thirdItem.innerHTML = `<strong>Wind:</strong> ${windMph}mph`;
    weatherList.appendChild(thirdItem);

    var fourthItem = document.createElement('li');
    fourthItem.innerHTML = `<strong>Wind Chill:</strong> ${windChillEntry}`
    weatherList.appendChild(fourthItem);

    fourthItem.style.marginBottom = "1rem";
});
