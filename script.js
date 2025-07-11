const primary = {
  green: "text-[#6dee0a]",
  orange: "bg-[orange]",
};
const buttons = [
  { id: 1, title: "AC", color: primary.green },
  { id: 1, title: "DEL", color: primary.green },
  { id: 1, title: "%", color: primary.green },
  { id: 1, title: "/", color: primary.green },
  { id: 1, title: "7" },
  { id: 1, title: "8" },
  { id: 1, title: "9" },
  { id: 1, title: "*", color: primary.green },
  { id: 1, title: "4" },
  { id: 1, title: "5" },
  { id: 1, title: "6" },
  { id: 1, title: "-", color: primary.green },
  { id: 1, title: "1" },
  { id: 1, title: "2" },
  { id: 1, title: "3" },
  { id: 1, title: "+", color: primary.green },
  { id: 1, title: "00" },
  { id: 1, title: "0" },
  { id: 1, title: "." },
  { id: 1, title: "=", bgColor: primary.orange },
];

// UI Logic
const container = document.querySelector(".buttons");
const btn_class = [
  "custom-shadow",
  "bg-[transparent]",
  "h-16",
  "w-16",
  "md:h-20",
  "md:w-20",
  "text-3xl",
  "font-bold",
  "text-white",
  "flex",
  "items-center",
  "justify-center",
  "rounded-full",
  "cursor-pointer",
];
buttons.map((btn) => {
  const gridItem = document.createElement("div");
  gridItem.classList.add(...btn_class, btn.color, btn.bgColor);
  gridItem.textContent = btn.title;
  container.appendChild(gridItem);
});

// Calculation logic
const input = document.querySelector("input");
let expression = "";

container.addEventListener("click", (e) => {
  const value = e.target.textContent;
  if (!e.target.classList.contains("cursor-pointer")) return;

  if (value === "AC") {
    expression = "";
    input.value = "0";
  } else if (value === "DEL") {
    expression = expression.slice(0, -1);
    input.value = expression || "0";
  } else if (value === "=") {
    try {
      let result = eval(expression);
      history.unshift(`${expression} = ${result}`);
      if (history.length > 5) history.pop();
      renderHistory();

      expression = result;
      input.value = expression;
    } catch {
      input.value = "Error";
      expression = "";
    }
  } else {
    expression += value;
    input.value = expression;
  }
});

// button logic
document.addEventListener("keydown", (e) => {
  if (e.key.match(/[0-9+\-*/.%]/)) {
    expression += e.key;
    input.value = expression;
  } else if (e.key === "Enter") {
    try {
      let result = eval(expression);
      history.unshift(`${expression} = ${result}`);
      if (history.length > 5) history.pop();
      renderHistory();

      expression = result.toString();
      input.value = expression;
    } catch {
      input.value = "Error";
      expression = "";
    }
  } else if (e.key === "Backspace") {
    expression = expression.slice(0, -1);
    input.value = expression || "0";
  }
});
