const apiUrl = "https://script.google.com/macros/s/AKfycbwJPp1yrZpIz5t_lcjrQXou639uz5fT2qS5GkewmUCbVUudbruxOUcq3t-KaEnZatmWYw/exec";

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



