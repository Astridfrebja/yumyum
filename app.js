const drinks = [
    {
        name: "Oboy",
        prep: "1 min",
        ingredients: [
            "3 skjeer oboy",
            "2 dl melk"
        ],
        instructions: ["Ta oboy i et valgfritt glass", "Deretter heller du opp i melken", "Rør sammen, men la det være litt klumper på toppen", "Nyyyt!"]
    },
    {
        name: "Amaretto sour",
        prep: "5 min",
        ingredients: [
            "4cl amaretto",
            "4 cl sitronsaft",
            "2 cl sukkerlake",
            "2 cl eggehvite"
        ],
        instructions: ["Hell alle ingredientene bortsett fra eggehvite i en shaker med is", "Rist denne i ca 30 sekund", "Hell ut isen", "Tilsett eggehviten til ingredientene", "Rist alt sammen", "Hell over i et glass", "Tadaa en fin drink"]
    }
];

// This is the Node.js equivalent of your browser code's logic
function displayDrinks() {
    drinks.forEach(drink => {
        console.log(`--- ${drink.name.toUpperCase()} ---`);
        console.log(`Forberedelsestid: ${drink.prep}`);
        console.log("Ingredienser:");
        drink.ingredients.forEach(ingredient => {
            console.log(`  - ${ingredient}`);
        });
        console.log("Instruksjoner:");
        drink.instructions.forEach((instruction, index) => {
            console.log(`  ${index + 1}. ${instruction}`);
        });
        console.log("\n"); // Add a blank line for readability
    });
}

// Call the function to run the logic
displayDrinks();