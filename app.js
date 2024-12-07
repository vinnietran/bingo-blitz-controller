const apiUrl = "https://script.google.com/macros/s/AKfycbzshw0wQWt-BVdQbKL6TBO4S0ZCX-GJoewXkD2m8mwE86lrxHqc1aiAxXj3TQcxIzd4/exec";

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




