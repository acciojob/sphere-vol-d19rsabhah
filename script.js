// function volume_sphere() {
//     //Write your code here
  
// } 

// window.onload = document.getElementById('MyForm').onsubmit = volume_sphere;

function volume_sphere(event) {
    event.preventDefault(); // Prevent form from submitting and refreshing the page

    // Get the radius input value
    let radius = parseFloat(document.getElementById("radius").value);

    // Calculate the volume if the input is valid
    let volume = (radius > 0) ? ((4 / 3) * Math.PI * Math.pow(radius, 3)).toFixed(4) : NaN;

    // Display the calculated volume
    document.getElementById("volume").value = volume;
}

// Attach the function to the form submit event
window.onload = function() {
    document.getElementById('MyForm').onsubmit = volume_sphere;
};
