"use strict";
var input1 = document.getElementById("number1");
var input2 = document.getElementById("number2");
var result = document.getElementById("result");
var btnSum = document.getElementById("btnSum");
function sum(a, b) {
    return a + b;
}
btnSum.addEventListener("click", function () {
    result.value = sum(Number(input1.value), Number(input2.value)).toString();
});
