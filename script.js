function volume_sphere() {
  // Get the radius input value
  const radius = parseFloat(document.getElementById("radius").value);

  // Get the volume field
  const volumeField = document.getElementById("volume");

  // Check if radius is a valid non-negative number
  if (isNaN(radius) || radius < 0) {
    volumeField.value = "NaN"; // Return a string, not NaN
    return false;
  }

  // Calculate volume using formula (4/3) * π * r^3
  const volume = (4 / 3) * Math.PI * Math.pow(radius, 3);

  // Set the result rounded to 4 decimal places
  volumeField.value = volume.toFixed(4);

  return false; // To prevent form submission
}
