const apiUrl = "https://script.google.com/macros/s/AKfycbx6Y_j5WGZd_EP73gc2SEvfQujCqPR8b8O2fH0qi5XtI-G1j0nxQ5wdYKTiKc_5py7z8g/exec";

// Function to start the game
async function startGame() {
    generateWinner();
    try {
        const response = await fetch(`${apiUrl}?action=startGame`, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();
        console.log("Game started:", result);
    } catch (error) {
        console.error("Error starting the game:", error);
    }
}

async function endGame() {
    generateWinner();
    try {
        const response = await fetch(`${apiUrl}?action=endGame`, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();
        console.log("Game ended:", result);
    } catch (error) {
        console.error("Error ending the game:", error);
    }
}

async function generateWinner() {
    console.log("generateWinner");
    try {
        const response = await fetch(`${apiUrl}?action=generateWinningCallouts`, {
            method: "POST",
            mode: "no-cors",
            headers: { "Content-Type": "application/json" }
        });

        const result = await response.json();
        console.log("Game started:", result);
    } catch (error) {
        console.error("Error starting the game:", error);
    }
}
