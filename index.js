// HOME BUTTONS GETTERS
let onePointHomeBtn = document.querySelector("#one-point-home-btn");
let twoPointsHomeBtn = document.querySelector("#two-points-home-btn");
let treePointsHomeBtn = document.querySelector("#tree-points-home-btn");


// GUEST BUTTONS GETTERS
let onePointGuestBtn = document.querySelector("#one-point-guest-btn");
let twoPointsGuestBtn = document.querySelector("#two-points-guest-btn");
let treePointsGuestBtn = document.querySelector("#tree-points-guest-btn");


// GET HOME SCORE
let scoreHome = document.querySelector("#score-home");
let scoreHomeResult = parseInt(scoreHome.textContent); // Covert to integer


// GET GUEST SCORE
let scoreGuest = document.querySelector("#score-guest")
let scoreGuestResult = parseInt(scoreGuest.textContent); // Covert to integer


// HOME SCORE TRIGGERS
onePointHomeBtn.addEventListener("click", function() {
    scoreHomeResult += 1;
    scoreHome.textContent = scoreHomeResult;
});

twoPointsHomeBtn.addEventListener("click", function() {
    scoreHomeResult += 2;
    scoreHome.textContent = scoreHomeResult;
});

treePointsHomeBtn.addEventListener("click", function() {
    scoreHomeResult += 3;
    scoreHome.textContent = scoreHomeResult;
});


// GUEST SCORE TRIGGERS
onePointGuestBtn.addEventListener("click", function() {
    scoreGuestResult += 1;
    scoreGuest.textContent = scoreGuestResult;
});

twoPointsGuestBtn.addEventListener("click", function() {
    scoreGuestResult += 2;
    scoreGuest.textContent = scoreGuestResult;
});

treePointsGuestBtn.addEventListener("click", function() {
    scoreGuestResult += 3;
    scoreGuest.textContent = scoreGuestResult;
});


// RESET BUTTON
let resetButton = document.getElementById("reset-btn");

resetButton.addEventListener("click", function() {
    scoreHomeResult = 0;
    scoreHome.textContent = 0;
    scoreGuestResult = 0;
    scoreGuest.textContent = 0;
});