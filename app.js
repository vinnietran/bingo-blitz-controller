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

async function generateWinner() {
    console.log("generateWinner");
    try {
        const response = await fetch(`${apiUrl}?action=generateWinningCallouts`);

        const result = await response.json();
        console.log("Game started:", result);
    } catch (error) {
        console.error("Error starting the game:", error);
    }
}



// Fetch player count from the server
// async function fetchPlayerCount() {
//     const playerCountDisplay = document.getElementById("player-count");
//     console.log("fetchPlayerCount");
//     try {
//         const response = await fetch(`${apiUrl}?action=getPlayerCount`, {
//             method: "GET",
//             headers: { "Content-Type": "application/json" }
//         });

//         const data = await response.json();
//         console.log("data", data);
//         if (data && data.count !== undefined) {
//             playerCountDisplay.textContent = `Players Joined: ${data.count}`;
//         } else {
//             playerCountDisplay.textContent = "Players Joined: 0";
//         }
//     } catch (error) {
//         console.error("Error fetching player count:", error);
//         playerCountDisplay.textContent = "Error fetching player count";
//     }
// }

// // Update player count every 3 seconds
// setInterval(fetchPlayerCount, 3000);


