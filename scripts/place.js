document.addEventListener("DOMContentLoaded", function () {
    const currentYear = new Date().getFullYear();
    document.getElementById("current-year").textContent = currentYear;

    const lastModified = new Date(document.lastModified);
    const formattedDate =
        lastModified.toLocaleDateString("en-US", {
            year: "numeric",
            month: "2-digit",
            day: "2-digit",
        }) +
        " " +
        lastModified.toLocaleTimeString("en-US", {
            hour: "2-digit",
            minute: "2-digit",
            second: "2-digit",
        });
    document.getElementById("last-modified").textContent = formattedDate;

    const temperature = 28;
    const windSpeed = 12;

    calculateAndDisplayWindChill(temperature, windSpeed);
});

/**
 * Calculate wind chill factor using metric formula
 * @param {number} temp - Temperature in Celsius
 * @param {number} windSpeed - Wind speed in km/h
 * @returns {number} - Wind chill factor in Celsius
 */

function calculateWindChill(temp, windSpeed) {
    return (
        13.12 +
        0.6215 * temp -
        11.37 * Math.pow(windSpeed, 0.16) +
        0.3965 * temp * Math.pow(windSpeed, 0.16)
    );
}

/**
 * Calculate and display wind chill with conditions check
 * @param {number} temperature - Temperature in Celsius
 * @param {number} windSpeed - Wind speed in km/h
 */
function calculateAndDisplayWindChill(temperature, windSpeed) {
    const windChillElement = document.getElementById("wind-chill");

    // Check conditions for viable wind chill calculation (metric)
    // Temperature <= 10°C AND Wind speed > 4.8 km/h
    if (temperature <= 10 && windSpeed > 4.8) {
        const windChill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = Math.round(windChill) + "°C";
    } else {
        windChillElement.textContent = "N/A";
    }
}
