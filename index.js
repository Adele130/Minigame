let newWindow = null;

window.onload = function() {
    // Check if the "live" parameter is present in the URL
    const urlParams = new URLSearchParams(window.location.search);
    const isLiveWindow = urlParams.get('live');

    if (!isLiveWindow) { // Only open a new window if it's NOT a live window
        function openLiveWindow() {
            if (newWindow && !newWindow.closed) {
                return;
            }

            var background = document.querySelector('.background1');
            var width = background.naturalWidth;
            var height = background.naturalHeight;

            var features = `width=<span class="math-inline">\{width\},height\=</span>{height},toolbar=no,menubar=no,location=no,status=no,resizable=no,scrollbars=no`;
            newWindow = window.open("index.html?live=true", "LiveWindow", features);
        }
        openLiveWindow();
    } else {
      // This is the new/live window.  Do NOT open another window.  You can put any initialization code for your game here.
      console.log("This is the live window.  Starting game...");
      // Example:
      // let gameCanvas = document.getElementById("gameCanvas"); // Assuming you have a canvas element
      // initializeGame(gameCanvas);
    }
}
