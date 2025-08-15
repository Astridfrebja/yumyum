const drinks = [
    {
    name: "Oboy",
    prep: "1 min",
    image: "path/to/oboy-image.jpg", // Added a placeholder for the missing image property
    ingredients: [
        "3 skjeer oboy",
        "2 dl melk"
    ],
    instructions: ["Ta oboy i et valgfritt glass", "Deretter heller du opp i melken", "Rør sammen, men la det være litt klumper på toppen", "Nyyyt!"]
    },

    {
        name:"Amaretto sour",
        prep: "5 min",
        image: "path/to/amaretto-sour-image.jpg", // Added a placeholder for the missing image property
        ingredients: [
            "4cl amaretto",
            "4 cl sitronsaft",
            "2 cl sukkerlake",
            "2 cl eggehvite"
        ],
        instructions: ["Hell alle ingredientene bortsett fra eggehvite i en shaker med is", "Rist denne i ca 30 sekund", "Hell ut isen", "Tilsett eggehviten til ingredientene", "Rist alt sammen", "Hell over i et glass", "Tadaa en fin drink"]
    }

]

document.addEventListener("DOMContentLoaded", () => {
    const nav = document.querySelector(".drinks-nav");
    const card = document.querySelector(".info-card");
    const clickSound = document.getElementById("click-sound"); // Assuming you have an audio element with this ID

    drinks.forEach((drink) => {
        const btn = document.createElement("button");
        btn.className = "drink-btn";

        const img = document.createElement("img");
        img.src = drink.image;
        img.alt = drink.name;
        img.className = "btn-img";
        btn.appendChild(img);

        const drinkName = document.createElement("span");
        drinkName.textContent = drink.name;
        btn.appendChild(drinkName);

        btn.addEventListener("click", () => {
            card.innerHTML = `
                <h2>${drink.name}</h2>
                <img src="${drink.image}" alt="${drink.name}">
                <p><strong>Forberedelsestid: </strong>${drink.prep}</p>
                <p><strong>Ingredienser: </strong></p>
                <ul>
                    ${drink.ingredients.map(item => `<li>${item}</li>`).join("")}
                </ul>
                <p>Steg: </p>
                <ol>
                    ${drink.instructions.map(step => `<li>${step}</li>`).join("")}
                </ol>
            `;
            if (clickSound) {
                clickSound.play();
            }
            card.style.display = "block";
        });
        nav.appendChild(btn);
    });
});