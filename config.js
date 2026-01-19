// ============================================
// 💝 CUSTOMIZE YOUR VALENTINE'S WEBSITE HERE 💝
// ============================================

<!DOCTYPE html>
<html lang="en">
<head>
<meta charset="UTF-8" />
<meta name="viewport" content="width=device-width, initial-scale=1.0" />
<title>Will You Be My Valentine? 💝</title>

<style>
    body {
        margin: 0;
        min-height: 100vh;
        font-family: Arial, sans-serif;
        text-align: center;
        background: linear-gradient(135deg, #ffafbd, #ffc3a0);
        color: #ff4757;
        overflow-x: hidden;
    }

    h1 {
        margin-top: 30px;
    }

    #persistent-image {
        text-align: center;
        margin: 20px 0;
    }

    #persistent-image img {
        width: 260px;
        border-radius: 20px;
        box-shadow: 0 10px 25px rgba(0,0,0,0.25);
    }

    #question {
        font-size: 22px;
        margin-top: 20px;
    }

    button {
        background: #ff6b6b;
        color: white;
        border: none;
        padding: 12px 20px;
        margin: 10px;
        border-radius: 20px;
        font-size: 16px;
        cursor: pointer;
    }

    button:hover {
        background: #ff8787;
    }

    input[type="range"] {
        width: 80%;
        margin-top: 20px;
    }
</style>
</head>

<body>

<h1 id="title"></h1>

<!-- Persistent Image -->
<div id="persistent-image">
    <img
        src="images/PXL_20241123_160435095.jpg"
        alt="Kenzie ❤️"
    />
</div>

<div id="question"></div>
<div id="controls"></div>

<script>
const CONFIG = {
    valentineName: "Kenzie",

    questions: {
        first: {
            text: "Do you like me?",
            yesBtn: "Yes",
            noBtn: "No"
        },
        second: {
            text: "How much do you love me?"
        },
        third: {
            text: "Will you be my Valentine on February 14th, 2026? 🌹",
            yesBtn: "Yes!",
            noBtn: "No"
        }
    }
};

document.getElementById("title").textContent =
    `Hey ${CONFIG.valentineName} 💝`;

const questionEl = document.getElementById("question");
const controlsEl = document.getElementById("controls");

function firstQuestion() {
    questionEl.textContent = CONFIG.questions.first.text;
    controlsEl.innerHTML = `
        <button onclick="secondQuestion()">Yes</button>
        <button onclick="alert('Wrong answer 😜')">No</button>
    `;
}

function secondQuestion() {
    questionEl.textContent = CONFIG.questions.second.text;
    controlsEl.innerHTML = `
        <input type="range" min="0" max="100" value="50" />
        <br />
        <button onclick="thirdQuestion()">Next ❤️</button>
    `;
}

function thirdQuestion() {
    questionEl.textContent = CONFIG.questions.third.text;
    controlsEl.innerHTML = `
        <button onclick="yesAnswer()">Yes!</button>
        <button onclick="alert('Try again 😏')">No</button>
    `;
}

function yesAnswer() {
    questionEl.textContent =
        "Yay! I'm the luckiest man in the world! 🎉💝";
    controlsEl.innerHTML =
        "<p>❤️❤️❤️</p>";
}

firstQuestion();
</script>

</body>
</html>


// Don't modify anything below this line unless you know what you're doing
window.VALENTINE_CONFIG = CONFIG; 
