function upDate(previewPic) {
    // Console log to check if the event is triggering
    console.log("Mouse over event triggered");
    
    // Console log to check the alt and source of previewPic
    console.log("Alt text:", previewPic.alt);
    console.log("Image source:", previewPic.src);
    
    // Change the text of the element with ID "image" to the alt text
    document.getElementById('image').innerHTML = previewPic.alt;
    
    // Change the background image of the element with ID "image"
    document.getElementById('image').style.backgroundImage = "url('" + previewPic.src + "')";
}

function undo() {
    // Reset the background image to empty
    document.getElementById('image').style.backgroundImage = "url('')";
    
    // Reset the text to the original message
    document.getElementById('image').innerHTML = "Hover over an image below to display here.";
}