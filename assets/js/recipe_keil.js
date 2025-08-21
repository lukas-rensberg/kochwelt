const INGREDIENTS = [
  [150, "g Schweinefilet (n)"],
  [0.5, "dl. Saucenhalbrahmen (n)"],
  [2, "scheiben. Specktranchen (n)"],
  [0.38, "EL Tomartenmark"],
  [62.5, "g Champigons"],
  "Bratbutter",
  "Salz, Pfeffer und Paprikapulver",
];

function generateTable(ingredients) {
  const table = document.querySelector(".recipe_ingredients table");
  table.innerHTML = "";
  ingredients.forEach((ingredient) => {
    const tableRow = document.createElement("tr");
    const tableCell = document.createElement("td");
    if (Array.isArray(ingredient)) {
      tableCell.textContent = ingredient[0].toFixed(2) + " " + ingredient[1];
    } else {
      tableCell.textContent = ingredient;
    }
    tableRow.appendChild(tableCell);
    table.appendChild(tableRow);
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
    const tableRow = document.createElement("tr");
    const tableCell = document.createElement("td");
    
    if (Array.isArray(ingredient)) {
      // Calculate new amount
      const newAmount = (ingredient[0] * recipePortion).toFixed(2);
      tableCell.textContent = newAmount + " " + ingredient[1];
    } else {
      // Non-numeric ingredient (like "Salz und Pfeffer nach Geschmack")
      tableCell.textContent = ingredient;
    }
    
    tableRow.appendChild(tableCell);
    table.appendChild(tableRow);
  });
}

// Initialize table on page load
document.addEventListener('DOMContentLoaded', function() {
  generateTable(INGREDIENTS);
});