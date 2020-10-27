var firstNumber = "0";    
var secondNumber = "0";
var opr = "";
var output;

function clac(x) {
    document.getElementById("result").value += x
    
    if (x=="+" || x=="-" || x=="*" || x=="/" || x=="%") {
        
        if (opr=="") {
            opr = x;
        }

        else {
            alert("You can use only one opeartor at a time.")
            document.getElementById("result").value = 0;
            opr = "";
        }
    }

    else {

        if(document.getElementById("result").value.includes("+") || document.getElementById("result").value.includes("-") || document.getElementById("result").value.includes("*") || document.getElementById("result").value.includes("/") || document.getElementById("result").value.includes("%")) { 
            secondNumber += x;
        }

        else {
            firstNumber += x;
        }
    }
 }

 function clr() {
    document.getElementById("result").value = 0;
    firstNumber = "";
    secondNumber = "";
    opr = "";
 }

 function solve() {
    if (opr=="+") {
        output = parseFloat(firstNumber) + parseFloat(secondNumber);     
    }

    else if (opr=="-") {
        output = parseFloat(firstNumber) - parseFloat(secondNumber);
    }

    else if (opr=="*") {
        output = parseFloat(firstNumber) * parseFloat(secondNumber);
    }

    else if (opr=="/") {
        output = parseFloat(firstNumber) / parseFloat(secondNumber);
    }
    
    else if (opr=="%") {
        output = parseFloat(firstNumber) % parseFloat(secondNumber);
    }

    document.getElementById("result").value = output;
    firstNumber = output;
    secondNumber = "0";
    opr = "";
 }