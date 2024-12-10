let x;

document.getElementById("generate").onclick = function() {
    // Generate a random index between 1 and 100
    x = Math.floor(Math.random() * 100);

    // Fetch the text file asynchronously
    fetch("index.txt")
    .then(response => response.text())  // Convert the response to text
    .then(data => {
        // Split the data into lines
        const lines = data.split("\n");

        // Ensure x is a valid index
        if (x < lines.length) {
            // Display the verse in the HTML
            const lineNumber = lines[x];
            document.getElementById("xlabel").innerHTML = lineNumber;
        } else {
            document.getElementById("xlabel").innerHTML = "No verse found!";
        }
    })
    .catch(error => {
        console.error("Error fetching the file:", error);
        document.getElementById("xlabel").innerHTML = "Error loading verses.";
    });
};
