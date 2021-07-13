const input1 = document.getElementById("number1") as HTMLInputElement;
const input2 = document.getElementById("number2") as HTMLInputElement;
const result = document.getElementById("result") as HTMLInputElement;
const btnSum = document.getElementById("btnSum")!;

function sum(a: number, b: number) {
  return a + b;
}

btnSum.addEventListener("click", () => {
  result.value = sum(Number(input1.value), Number(input2.value)).toString();
});
