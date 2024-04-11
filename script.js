window.addEventListener("DOMContentLoaded", () => {
    const display = document.querySelector(".input");
    const line = document.querySelector(".line");
    const buttons = document.querySelectorAll("button");
    const operators = document.querySelectorAll(".operator");
    const specialCharts = ["+", "-", "*", "/", "%", "="];
    let output = display.innerHTML;

    const calculate = (btnvalue) => {
        if (btnvalue === "=" && btnvalue !== "") {
            output = eval(output.replace("calculate"));
        } else if (btnvalue === "AC") {
            output = "";
        } else if (btnvalue === "DEL") {
            output = output.toString().slice(0, -1);
        } else {
            if (output === "" && specialCharts.includes(btnvalue)) return;
            output += btnvalue;
        }
        display.innerText = output;
    };
    buttons.forEach((button) => {
        button.addEventListener("click", (e) => {
            calculate(e.target.textContent);
        });
    });
});
