//Theme selector:

const LightThemeButton = document.getElementById("LightModeButton");
const NightThemeButton = document.getElementById("NightModeButton");
const AutoThemeButton = document.getElementById("AutoModeButton");
const html = document.documentElement;

function LightModeSelect() {
  LightThemeButton.classList.add("selected");
  NightThemeButton.classList.remove("selected");
  AutoThemeButton.classList.remove("selected");

  html.className = "LightMode";
}

function NightModeSelect() {
  LightThemeButton.classList.remove("selected");
  NightThemeButton.classList.add("selected");
  AutoThemeButton.classList.remove("selected");

  html.className = "NightMode";
}

function AutoModeSelect() {
  LightThemeButton.classList.remove("selected");
  NightThemeButton.classList.remove("selected");
  AutoThemeButton.classList.add("selected");

  html.className = "AutoMode";
}

// Sidebar:

const Sidebar = document.getElementById("mySidebar");
const Body = document.querySelectorAll("body");

function SidebarOpen() {
  Sidebar.classList.remove("close");
  Sidebar.classList.add("open");
}

function SidebarClose() {
  Sidebar.classList.remove("open");
  Sidebar.classList.add("close");
}

function SidebarBut() {
  if (Sidebar.classList.contains("close")) {
    SidebarOpen();
  } else if (Sidebar.classList.contains("open")) {
    SidebarClose();
  } else {
    Sidebar.classList.add("open");
  }
}

function SidebarForciblyClose() {
  if (Sidebar.classList.contains("open")) {
    SidebarClose();
  }
}

//

const answersPhysics = [
  [
    [6, 5, 12, 8, 11, 10, 1, 2, 3, 7],
    [8, 9, 1, 3, 10, 12, 7, 4, 2, 5],
  ],
  [
    [12, 11, 7, 6, 4, 2, 3, 5, 8, 11],
    [1, 8, 10, 2, 6, 11, 8, 7, 4, 5],
  ],
  [
    [10, 1, 2, 12, 3, 5, 6, 8, 11, 4],
    [11, 7, 9, 8, 2, 1, 3, 4, 12, 6],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [5, 1, 7, 2, 11, 9, 3, 4, 8, 12],
  ],
  [
    [9, 2, 4, 1, 7, 8, 12, 10, 11, 3],
    [6, 9, 5, 11, 4, 10, 1, 2, 7, 12],
  ],
  [
    [11, 12, 8, 1, 7, 3, 6, 10, 9, 2],
    [7, 10, 1, 11, 8, 3, 2, 6, 4, 5],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [4, 7, 6, 2, 10, 12, 5, 11, 9, 8],
  ],
  [
    [0, 0, 0, 0, 0, 0, 0, 0, 0, 0],
    [7, 4, 1, 12, 10, 9, 5, 11, 2, 3],
  ],
  [
    [10, 4, 8, 9, 1, 12, 11, 2, 3, 6],
    [2, 5, 10, 8, 1, 4, 9, 3, 7, 6],
  ],
  [
    [9, 11, 6, 5, 10, 2, 1, 8, 11, 4],
    [12, 4, 7, 8, 1, 5, 9, 2, 10, 6],
  ],
  [
    [7, 3, 11, 4, 12, 10, 1, 5, 2, 6],
    [3, 10, 6, 2, 9, 12, 7, 1, 4, 8],
  ],
  [
    [6, 1, 2, 6, 7, 5, 3, 11, 4, 12],
    [11, 9, 8, 1, 7, 5, 6, 4, 2, 10],
  ],
  [
    [5, 12, 7, 2, 10, 8, 1, 3, 8, 6],
    [11, 5, 7, 1, 9, 2, 8, 10, 4, 3],
  ],
  [
    [4, 3, 9, 10, 12, 6, 5, 2, 7, 6],
    [7, 3, 11, 10, 2, 4, 8, 9, 12, 5],
  ],
  [
    [10, 1, 5, 2, 7, 9, 6, 4, 8, 3],
    [12, 11, 5, 1, 8, 4, 9, 2, 7, 6],
  ],
  [
    [4, 5, 12, 10, 9, 6, 11, 7, 1, 8],
    [2, 11, 12, 4, 6, 9, 8, 1, 7, 10],
  ],
  [
    [11, 9, 5, 3, 2, 1, 6, 4, 7, 12],
    [5, 8, 7, 4, 6, 2, 12, 3, 9, 11],
  ],
  [
    [12, 1, 11, 6, 10, 4, 2, 8, 7, 3],
    [4, 1, 6, 5, 11, 12, 10, 9, 2, 7],
  ],
  [
    [9, 5, 1, 4, 12, 10, 11, 3, 2, 7],
    [4, 10, 6, 7, 3, 2, 8, 9, 5, 1],
  ],
  [
    [2, 5, 6, 9, 8, 1, 10, 7, 3, 4],
    [3, 9, 4, 1, 12, 7, 6, 2, 10, 5],
  ],
  [
    [7, 3, 1, 4, 8, 5, 9, 10, 6, 2],
    [11, 7, 3, 10, 1, 8, 2, 5, 12, 4],
  ],
  [
    [10, 9, 5, 1, 6, 2, 9, 3, 4, 8],
    [11, 9, 8, 1, 7, 5, 6, 4, 2, 3],
  ],
  [
    [5, 12, 7, 2, 10, 8, 1, 3, 8, 6],
    [11, 5, 7, 1, 9, 2, 8, 10, 4, 3],
  ],
  [
    [4, 3, 9, 10, 12, 6, 5, 2, 7, 6],
    [7, 3, 11, 10, 2, 4, 8, 9, 12, 5],
  ],
  [
    [10, 1, 5, 2, 7, 9, 6, 4, 8, 3],
    [12, 11, 5, 1, 8, 4, 9, 2, 7, 6],
  ],
  [
    [4, 5, 12, 10, 9, 6, 11, 7, 1, 8],
    [2, 11, 12, 4, 6, 9, 8, 1, 7, 10],
  ],
  [
    [11, 9, 5, 3, 2, 1, 6, 4, 7, 12],
    [5, 8, 7, 4, 6, 2, 12, 3, 9, 11],
  ],
  [
    [12, 1, 11, 6, 10, 4, 2, 8, 7, 3],
    [4, 1, 6, 5, 11, 12, 10, 9, 2, 7],
  ],
  [
    [9, 5, 1, 4, 12, 10, 11, 3, 2, 7],
    [4, 10, 6, 7, 3, 2, 8, 9, 5, 1],
  ],
  [
    [2, 5, 6, 9, 8, 1, 10, 7, 3, 4],
    [3, 9, 4, 1, 12, 7, 6, 2, 10, 5],
  ],
];

const answersPDR = [
  [[3,4,2,3,4,3,1,2,2,1,3,3,3,2,3,2,3,1,2,3]], 
  [[3,5,3,1,1,3,1,2,1,2,2,3,1,3,3,1,4,2,2,1]], 
  [[1,2,4,2,2,2,1,2,3,2,2,3,5,3,2,3,2,2,1,3]],
  [[1,3,5,2,4,1,2,1,2,2,2,1,2,1,1,2,2,4,4,3]], 
  [[4,1,2,3,4,1,1,2,3,1,3,2,1,5,1,3,5,3,5,2]], 
  [[4,5,2,4,3,3,2,3,4,2,2,2,3,5,2,1,1,3,3,2]], 
  [[2,3,3,4,1,3,3,3,1,2,1,3,3,3,1,3,2,4,4,1]], 
  [[1,2,3,2,2,3,3,1,1,2,3,3,3,2,3,4,1,1,2,2]], 
  [[4,2,2,1,2,1,4,2,2,1,2,4,2,1,2,1,2,2,4,3]], 
  [[1,1,2,2,1,3,2,2,1,"2/3",1,3,2,2,1,5,2,1,4,1]], 
  [[1,1,3,2,4,2,2,2,2,2,2,2,2,1,3,4,4,3,1,3]],
];

const answersHTML = document.querySelector(".answers");
const confirmPhysicsBtn = document.getElementById("#confirmPhysics");
const confirmPdrBtn = document.getElementById("#confirmPDR");
const searchBtn = document.querySelector(".search");

function validate(answers) {
  const value = searchBtn.value.trim();
  if (value > 0 && value <= answers.length) {
    getAnswers(answers, value - 1);
  } 
  else if (value == 69) {
  	answersHTML.innerHTML =
      '<h2 class="warning">You are GEY</h2>';
  }
  else if (value == 2004) {
  	answersHTML.innerHTML =
      '<h2 class="warning">The site was made by Andrii and Bohdan</h2>';
  }
  else {
    answersHTML.innerHTML =
      '<h2 class="warning">Ви ввели неіснуючий номер білету</h2>';
  }
}

function getAnswers(answers, index) {
  let html = ``;
  const ticket = answers[index];
  answersHTML.innerHTML = "";

  html += `<p class="answers__number">Білет: ${index + 1}<p>`;
  ticket.forEach((level, i) => {
    if (ticket.length > 1) {
      html += `<h3>Завдання ${i + 1}</h3>`;
    }

    if (ticket.length === 1 && ticket[0].length > 10) {
      let rows = Math.trunc((ticket[0].length + 1) / 10);

      for (let i = 0, start = 0; i <= rows; ++i, start = i * 10) {
        html += `<table>`;
        html += `<tr>`;
        console.log(start)
        for (let j = start; j < level.length && j < start + 10; j++) {
          html += `<th>${j + 1}</th>`;
        }

        html += `</tr><tr>`;

        for (let k = start; k < level.length && k < start + 10; k++) {
          const answer = level[k];
          html += `<td>${answer}</td>`;
        }

        html += `</tr>`;
        html += `</table>`;
      }
    } else {
      html += `<table>`;
      html += `<tr>`;
      level.forEach((_, j) => {
        html += `<th>${j + 1}</th>`;
      });

      html += `</tr><tr>`;

      level.forEach((answer) => {
        html += `<td>${answer}</td>`;
      });

      html += `</tr>`;
      html += `</table>`;
    }
  });
  answersHTML.insertAdjacentHTML("beforeend", html);
}

confirmPhysicsBtn &&
  confirmPhysicsBtn.addEventListener("click", () => {
    validate(answersPhysics);
  });

confirmPdrBtn &&
  confirmPdrBtn.addEventListener("click", () => {
    validate(answersPDR);
  });

document.addEventListener("keypress", (e) => {
  if (e.key === "Enter") {
    confirmPhysicsBtn && confirmPhysicsBtn.click();
    confirmPdrBtn && confirmPdrBtn.click();
  }
});
