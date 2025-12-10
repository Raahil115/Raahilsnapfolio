// CLOCK
function updateClock() {
    const now = new Date();
    document.getElementById("time").textContent =
        now.toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" });
}
setInterval(updateClock, 1000);
updateClock();

// PANEL SWITCHING
function hideAll() {
    document.getElementById("heartPanel").style.display = "none";
    document.getElementById("stepsPanel").style.display = "none";
}

function showClock() {
    hideAll();
    document.getElementById("time").style.display = "block";
}

function showSteps() {
    hideAll();
    document.getElementById("stepsPanel").style.display = "block";
    document.getElementById("time").style.display = "none";
}

function showHeart() {
    hideAll();
    document.getElementById("heartPanel").style.display = "block";
    document.getElementById("time").style.display = "none";
}

// STEPS COUNTER
let steps = 0;
document.getElementById("addStepBtn").addEventListener("click", () => {
    steps++;
    document.getElementById("steps").textContent = steps + " steps";
});

// HEART RATE SIMULATOR
setInterval(() => {
    const bpm = Math.floor(Math.random() * 50) + 60; // 60–110 bpm
    document.getElementById("bpm").textContent = bpm + " BPM";
}, 3000);

// THEME TOGGLE
let isLight = false;
function toggleTheme() {
    const watch = document.querySelector(".watch");
    isLight = !isLight;
    if (isLight) watch.classList.add("light");
    else watch.classList.remove("light");
}
