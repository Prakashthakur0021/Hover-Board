const container = document.querySelector(".container");
const SQUARE_NO = 500;
const colors = ["#e743c3", "#844ade", "#3498db", "e67e22", "#2ecc71"];

for (i = 0; i < SQUARE_NO; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColorToElement(square);
  });

  square.addEventListener("mouseout", () => {
    removeColorFromElement(square);
  });

  container.appendChild(square);
}

setColorToElement = (element) => {
  const color = generateRandomColor();
  element.style.background = color; // run after commenting this line gives best effect
  element.style.boxShadow = `0 0 2px ${color},0 0 10px ${color}`;
};

removeColorFromElement = (element) => {
  element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 0 #000";
};

generateRandomColor = () => {
  return colors[Math.floor(Math.random() * colors.length)];
};
