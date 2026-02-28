/* Function to update the main display area */
function upDate(previewPic) {
    console.log("Event triggered: update display"); // [cite: 39]
    console.log("Alt text: " + previewPic.alt);
    console.log("Source: " + previewPic.src);

    var displayDiv = document.getElementById('image');
    
    // Update text and background image [cite: 8, 9, 35]
    displayDiv.innerHTML = previewPic.alt;
    displayDiv.style.backgroundImage = "url('" + previewPic.src + "')";
}

/* Function to reset the main display area */
function unDo() {
    var displayDiv = document.getElementById('image');
    
    // Reset to hardcoded original values [cite: 25, 27]
    displayDiv.style.backgroundImage = "url('')";
    displayDiv.innerHTML = "Hover over an image below to display here.";
}

/* Function to automatically add tabindex attributes on page load */
function addTabFocus() {
    console.log("Page loaded: adding tabindex attributes"); // [cite: 39]
    
    // Select all preview images
    var images = document.getElementsByClassName('preview');
    
    // Loop through each image to add tabindex [cite: 43]
    for (var i = 0; i < images.length; i++) {
        images[i].setAttribute("tabindex", "0");
        console.log("Tabindex added to image " + (i + 1));
    }
}