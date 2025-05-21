function volume_sphere(event) {
  // Prevent form submission and page reload
  event.preventDefault();

  // Get the radius value from the input field
  const radiusInput = document.getElementById("radius").value;
  const radius = parseFloat(radiusInput);

  // Get the volume output field
  const volumeField = document.getElementById("volume");

  // Validate input: must be a number and non-negative
  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN";
    return;
  }

  // Calculate volume: (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Display volume rounded to 4 decimal places
  volumeField.value = volume.toFixed(4);
}

// Attach the function to the form's submit event
document.getElementById("MyForm").addEventListener("submit", volume_sphere);

