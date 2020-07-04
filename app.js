const container = document.querySelectorAll(".container");
const SQUARE_NO = 500;
const colors = ["#e743c3", "#844ade", "#3498db", "e67e22", "#2ecc71"];

console.log(container);
for (i = 0; i < SQUARE_NO; i++) {
  const square = document.createElement("div");
  square.classList.add("square");

  square.addEventListener("mouseover", () => {
    setColorToElement(square);
  });

  square.addEventListener("mouseout", () => {
    removeColorFromElement(square);
  });

  container[0].appendChild(square);
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

// Second Box

let SECOND_SQUARE_NO = 290;
if (screen.width < 700) {
  SECOND_SQUARE_NO = 100;
}

for (i = 0; i < SECOND_SQUARE_NO; i++) {
  const square = document.createElement("div");
  square.classList.add("square2");

  square.addEventListener("mousemove", () => {
    setColorToElement2(square);
  });

  //   ["click", "ontouchstart"].forEach((evt) =>
  //     square.addEventListener(evt, dosomething, false)
  //   );

  square.addEventListener("mouseout", () => {
    removeColorFromElement2(square);
  });

  container[1].appendChild(square);
}

setColorToElement2 = (element) => {
  const color = generateRandomColor();
  //   element.style.background = color; // run after commenting this line gives best effect
  element.style.boxShadow = `0 0 5px ${color},0 0 20px ${color},0 0 50px ${color}`;
};

removeColorFromElement2 = (element) => {
  //   element.style.background = "#1d1d1d";
  element.style.boxShadow = "0 0 0 #000";
};
