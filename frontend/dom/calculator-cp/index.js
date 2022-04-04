function number(number) {
    // TODO: answer here
    document.getElementById("input").value += number;
}

//handle when the Del button, AC button and other operators (+, /, -, x) are pressed. It renders the operator into #input element
function operator(operator) {
    // TODO: answer here
    switch (operator) {
        case "AC":
            document.getElementById("input").value = "";
            break;
        case "Del":
            var del = document.getElementById("input").value.slice(0, -1);
            document.getElementById("input").value = del;
            break;
        case "/":
            document.getElementById("input").value += operator;
            break;
        case "*":
            document.getElementById("input").value += operator;
            break;
        case "-":
            document.getElementById("input").value += operator;
            break;
        case "+":
            document.getElementById("input").value += operator;
            break;
        case "=":
            document.getElementById("input").value += operator;
            break;
        case ".":
            document.getElementById("input").value += operator;
            break;
    }
}

//handle when = button is pressed. It renders the result into #input element
function calculate() {
    // TODO: answer here
    document.getElementById("input").value = eval(document.getElementById("input").value);
}