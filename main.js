let scoreA = document.getElementById("team-a-score");
let scoreB = document.getElementById("team-b-score");
let minesA1 = document.getElementById("min1a");
let plusA1 = document.getElementById("pl1a");
let minesA2 = document.getElementById("min2a");
let plusA2 = document.getElementById("pl2a");
let minesA3 = document.getElementById("min3a");
let plusA3 = document.getElementById("pl3a");
let minesB1 = document.getElementById("min1b");
let plusB1 = document.getElementById("pl1b");
let minesB2 = document.getElementById("min2b");
let plusB2 = document.getElementById("pl2b");
let minesB3 = document.getElementById("min3b");
let plusB3 = document.getElementById("pl3b");
let reset = document.getElementById("reset-button");

let scoreTeamA = 0;
function updateA() {
  scoreA.textContent = scoreTeamA;
}
let scoreTeamB = 0;
function updateB() {
  scoreB.textContent = scoreTeamB;
}
minesA1.onclick = function () {
  scoreTeamA -= 1;
  updateA();
};
plusA1.onclick = function () {
  scoreTeamA += 1;
  updateA();
};
minesA2.onclick = function () {
  scoreTeamA -= 2;
  updateA();
};
plusA2.onclick = function () {
  scoreTeamA += 2;
  updateA();
};
minesA3.onclick = function () {
  scoreTeamA -= 3;
  updateA();
};
plusA3.onclick = function () {
  scoreTeamA += 3;
  updateA();
};

minesB1.onclick = function () {
  scoreTeamB -= 1;
  updateB();
};
plusB1.onclick = function () {
  scoreTeamB += 1;
  updateB();
};
minesB2.onclick = function () {
  scoreTeamB -= 2;
  updateB();
};
plusB2.onclick = function () {
  scoreTeamB += 2;
  updateB();
};
minesB3.onclick = function () {
  scoreTeamB -= 3;
  updateB();
};
plusB3.onclick = function () {
  scoreTeamB += 3;
  updateB();
};

reset.onclick = function () {
  if (scoreTeamA > scoreTeamB) {
    alert("congratulations Team A Won");
    scoreTeamA = 0;
    scoreTeamB = 0;
    updateB();
    updateA();
  } else if (scoreTeamA < scoreTeamB) {
    alert("congratulations Team B Won");
    scoreTeamA = 0;
    scoreTeamB = 0;
    updateB();
    updateA();
  } else {
    alert("It's Draw");
    scoreTeamA = 0;
    scoreTeamB = 0;
    updateB();
    updateA();
  }
};
updateB();
updateA();
