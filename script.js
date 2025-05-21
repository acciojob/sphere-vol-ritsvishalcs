function volume_sphere() {
    //Write your code here
	const r = parseFloat(document.getElementById("radius").value)
    const voummeField = document.getElementById("voumme")
    if(NaN(r) || r < 0){
        voummeField.value = "NaN"
        return false
    }
    const volume = (4/3) * Math.PI * Math.pow(r,3)
    voummeField.value = volume.toFixed(4)

	return false
  
} 

window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;
