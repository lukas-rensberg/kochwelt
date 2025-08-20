const INGREDIENTS = [
  ["th", "Für den Mürbeteig:"],
  [200, "g Weizenmehl (Type 405)"],
  [75, "g Zucker"],
  [75, "g weiche Butter"],
  [1, "Ei (Gr. M)"],
  [1, "TL Backpulver"],
  "etwas Butter für die Form",
  ["th", "Für den Belag:"],
  [500, "g Magerquark"],
  [1, "Ei (Gr. M)"],
  [1, "Pck. Vanillepuddingpulver"],
  [1, "Pck. Vanillezucker"],
  [200, "ml Milch"],
  [125, "ml Sonnenblumenöl"],
  [120, "g Zucker"],
  [2, "Dose Mandarinen (Abtropfgewicht: 175 g pro Dose)"],

];

function generateTable(ingredients) {
  const table = document.querySelector(".recipe_ingredients table");
  table.innerHTML = "";
  ingredients.forEach((ingredient) => {
    if (Array.isArray(ingredient)) {
      const tableRow = document.createElement("tr");
      if (ingredient[0] === "th") {
        const tableHeader = document.createElement("th");
        tableHeader.textContent = ingredient[1];
        tableRow.appendChild(tableHeader);
        table.appendChild(tableRow);
      } else {
        const tableCell = document.createElement("td");
        tableCell.textContent = ingredient[0] + " " + ingredient[1];
        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);
      }
    }
  });
}

function generateTableWithCalculatedIngredientsCount() {
  const recipePortion = parseInt(document.getElementById("recipe_portion").value);
  
  if (recipePortion < 1 || isNaN(recipePortion)) {
    alert("Bitte geben Sie eine gültige Anzahl von Portionen ein (mindestens 1)");
    return;
  }
  
  const table = document.querySelector(".recipe_ingredients table");
  table.innerHTML = "";
  
  INGREDIENTS.forEach((ingredient) => {
    if (Array.isArray(ingredient)) {
      const tableRow = document.createElement("tr");
      if (ingredient[0] === "th") {
        const tableHeader = document.createElement("th");
        tableHeader.textContent = ingredient[1];
        tableRow.appendChild(tableHeader);
        table.appendChild(tableRow);
      } else {
        const tableCell = document.createElement("td");
        tableCell.textContent = ingredient[0] * recipePortion + " " + ingredient[1];
        tableRow.appendChild(tableCell);
        table.appendChild(tableRow);
      }
    }
  });
}

// Initialize table on page load
document.addEventListener('DOMContentLoaded', function() {
  generateTable(INGREDIENTS);
});