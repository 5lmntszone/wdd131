window.addEventListener("DOMContentLoaded", () => {
    const temperature = 8; // degrees Celsius
    const windSpeed = 10;
    
    const windChillElement = document.getElementById("WindChill");

    function calculateWindChill(temp, speed) {
        return (
            13.12 +
            0.6215 * temp -
            11.37 * Math.pow(speed, 0.16) +
            0.3965 * temp * Math.pow(speed, 0.16)
        ).toFixed(1);
    }

    if (temperature <= 10 && windSpeed > 4.8) {
        const chill = calculateWindChill(temperature, windSpeed);
        windChillElement.textContent = `${chill} °C`;
      } else {
        windChillElement.textContent = "N/A";
    }
});
