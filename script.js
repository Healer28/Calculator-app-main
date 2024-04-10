const display = document.getElementById(`display`);
var flag = false;
function add(input) {
  if (flag == true) {
    display.textContent = input;
    flag = false;
  } else {
    if (display.textContent == 0) {
      display.textContent = input;
    } else {
      display.textContent += input;
    }
  }
}
function clearall() {
  display.textContent = 0;
}
function calc() {
  try {
    if (display.textContent.length > 20) {
      display.textContent = "Error";
    } else {
      display.textContent = eval(display.textContent);
    }
  } catch (error) {
    flag = true;
    display.textContent = "Error";
  }
}
function del() {
  display.textContent = display.textContent.slice(
    0,
    display.textContent.length - 1
  );
}
const slider = document.getElementById("slider");
slider.oninput = function () {
  document.body.style.backgroundColor = "hsl(222, 26%, 31%)";
  document.body.style.color = "hsl(0, 0%, 100%)";
  document.body.classList.remove("theme3");
  document.body.classList.remove("theme2");
  if (slider.value == 2) {
    document.body.style.backgroundColor = "hsl(0, 0%, 90%)";
    document.body.style.color = "hsl(60, 10%, 19%)";
    document.body.classList.add("theme2");
  } else if (slider.value == 3) {
    document.body.style.backgroundColor = "hsl(268, 75%, 9%)";
    document.body.style.color = "hsl(52, 100%, 62%)";
    document.body.classList.add("theme3");
  }
};
