const num1Input = document.getElementById("num1");
const num2Input = document.getElementById("num2");
const multiplyButton = document.getElementById("multiplyButton");
const divideButton = document.getElementById("divideButton"); 
const resultpara = document.getElementById("res");

multiplyButton.addEventListener("click", function(){
    const num1 = parseFloat(num1Input.value);
    const num2 = parseFloat(num2Input.value);

    if(isNaN(num1) || isNaN(num2)){
        resultpara.textContent = "Please enter valid numbers";
    }
    else{
        const result = num1*num2;
        resultpara.textContent = "The result is:" + result;
    }
});

divideButton.addEventListener("click", function () {
  const num1 = parseFloat(num1Input.value);
  const num2 = parseFloat(num2Input.value);

  if (isNaN(num1) || isNaN(num2)) {
    resultpara.textContent = "Please enter valid numbers";
  } else {
    const result = num1 / num2;
    resultpara.textContent = "The result is:" + result;
  }
});