// Get DOM elements
const celsiusInput = document.getElementById("celsius");
const convertButton = document.getElementById("convert");
const resultElement = document.getElementById("result");

// Conversion function
function convertTemperature() {
    const celsius = parseFloat(celsiusInput.value);

    if (!isNaN(celsius)) {
        const fahrenheit = (celsius * 9/5) + 32;
        resultElement.textContent = ` Result : ${celsius} Celsius is equal to ${fahrenheit.toFixed(2)} Fahrenheit.`;
    } else {
        resultElement.textContent = "Please enter a valid temperature in Celsius.";
    }
}

// Add click event listener to the Convert button
convertButton.addEventListener("click", convertTemperature);
