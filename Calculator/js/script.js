let input = document.getElementById("input");
let buttons = document.querySelectorAll("button");

buttons.forEach((button) => {
  button.addEventListener("click", (e) => {
    let value = e.target.textContent;
    if (value === "C") {
      input.innerText = "";
    } else if (value === "<") {
      input.innerText = input.innerText.slice(0, -1);
    } else if (value === "=") {
      try {
        input.innerText = eval(input.innerText);
      } catch {
        input.innerText = "Error";
      }
    } else {
      input.innerText += value;
    }
    input.scrollLeft = input.scrollWidth;
  });
});
