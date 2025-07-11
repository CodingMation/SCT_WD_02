let history = [];

// Hamburger toggle menu
const menuBtn = document.getElementById("menuBtn");
const menuPanel = document.getElementById("menuPanel");
menuBtn.addEventListener("click", () => {
  menuPanel.classList.toggle("hidden");
});
document.addEventListener("click", (e) => {
  if (!menuPanel.contains(e.target) && !menuBtn.contains(e.target)) {
    menuPanel.classList.add("hidden");
  }
});

// Clear history
const clearHistory = document.getElementById("clearHistory");
const historyList = document.getElementById("historyList");
clearHistory.addEventListener("click", () => {
  history = [];
  renderHistory();
});

function renderHistory() {
  historyList.innerHTML = "";
  history.forEach((item) => {
    const li = document.createElement("li");
    li.classList.add("bg-gray-600", "py-1", "px-2", "rounded-md");
    li.textContent = item;
    historyList.appendChild(li);
  });
}
