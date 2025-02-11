let newWindow = null; // Declare a variable to store the window reference

// Flag to ensure the window opens only once
let isWindowOpen = false;

window.onload = function() {
    // Function to open the new window based on the background size
    function openLiveWindow() {
        // If the window is already open, don't open it again
        if (isWindowOpen) {
            return; // Stop the function if the window is already open
        }

        // Get the background image size
        var background = document.querySelector('.background1');
        
        // Get the width and height of the background image
        var width = background.naturalWidth;
        var height = background.naturalHeight;

        // Open the new window with the size of the background image and hide window controls
        var features = `width=${width},height=${height},toolbar=no,menubar=no,location=no,status=no,resizable=no,scrollbars=no`;
        newWindow = window.open("index.html", "LiveWindow", features);

        // Set the flag to true to prevent opening the window again
        isWindowOpen = true;
    }

    // Trigger the openLiveWindow function immediately when the page loads (Go Live)
    openLiveWindow();
};

