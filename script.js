// Slected all id from html
const main = document.getElementById("main-container");
const input = document.getElementById("myInput");
const copyBtn = document.getElementById("copyBtn");
const changeBtn = document.getElementById("changeBtn");
const input2 = document.getElementById("myInput2");
const copyBtn2 = document.getElementById("copyBtn2");

// Window onload function

window.onload = function () {
  mainFun();
};

// Created mainFun function
function mainFun() {
  changeBtn.addEventListener("click", function () {
    const myColor = generatedDecimalColor();
    const colorBg = generatedHexcolor(myColor);
    const colorRgb = generatedRgbColor(myColor);
    main.style.backgroundColor = colorBg;
    input.value = colorBg.substring(1);
    input2.value = colorRgb;
  });
  copyBtn.addEventListener("click", function () {
    navigator.clipboard.writeText(`#${input.value}`);
    if (isValid(input.value)) {
      toastMsgFun(`#${input.value} copied!`);
    } else {
      alert("Invalid color code!");
    }
  });
  copyBtn2.addEventListener("click", function () {
    navigator.clipboard.writeText(`${input2.value}`);
    toastMsgFun(`${input2.value} copied!`);
  });
  input.addEventListener("keyup", function (e) {
    const color = e.target.value;
    if (color) {
      input.value = color.toUpperCase();
      if (isValid(color)) {
        main.style.backgroundColor = `#${color}`;
      }
    }
  });
}

// generatedHexcolor function
// function generatedHexcolor() {
//   const red = Math.floor(Math.random() * 255);
//   const green = Math.floor(Math.random() * 255);
//   const blue = Math.floor(Math.random() * 255);
//   return `#${red.toString(16)}${green.toString(16)}${blue.toString(
//     16
//   )}`.toUpperCase();
// }

function generatedHexcolor({ red, green, blue }) {
  // const { red, green, blue } = generatedDecimalColor();
  // const toCodeRed = red <= 9 ? `0${red}` : red.toString(16);
  // const toCodeGreen = green <= 9 ? `0${green}` : green.toString(16);
  // const toCodeBlue = blue <= 9 ? `0${blue}` : blue.toString(16);
  const getTwoCode = function (value) {
    const hex = value.toString(16);
    return hex.length === 1 ? `0${hex}` : hex;
  };
  // return `#${toCodeRed}${toCodeGreen}${toCodeBlue}`.toUpperCase();
  return `#${getTwoCode(red)}${getTwoCode(green)}${getTwoCode(
    blue
  )}`.toUpperCase();
}

// GeneratedRGBColor function
function generatedRgbColor({ red, green, blue }) {
  // const { red, green, blue } = generatedDecimalColor();

  return `rgb(${red}, ${green}, ${blue})`;
}

// toastMsg function
function toastMsgFun(msg) {
  const div = document.createElement("div");
  div.innerHTML = msg;
  div.className = "css-Toast-msg toast-message-slide-in";
  div.addEventListener("click", function () {
    div.classList.remove("toast-message-slide-in");
    div.classList.add("toast-message-slide-out");
    div.addEventListener("animationend", function () {
      div.remove();
    });
  });
  document.body.appendChild(div);
}

// isValid function
function isValid(color) {
  if (color.length !== 6) return false;
  return /^[0-9a-fA-F]{6}$/i.test(color);
}

// generatedDecimalColor function
function generatedDecimalColor() {
  const red = Math.floor(Math.random() * 255);
  const green = Math.floor(Math.random() * 255);
  const blue = Math.floor(Math.random() * 255);

  return {
    red: red,
    green: green,
    blue: blue,
  };
}
