let submit = document.getElementById("regButton");
let adtxt = document.getElementById("fn");
let adtxt1 = document.getElementById("fn1");
let adtxt2 = document.getElementById("fn2");
let adtxt3 = document.getElementById("fn3");
let adtxt4 = document.getElementById("fn4");
let adtxt5 = document.getElementById("fn5");
let adtxt6 = document.getElementById("fn6");
let adtxt7 = document.getElementById("fn7");
let adtxt8 = document.getElementById("fn8");


submit.addEventListener("click", function success() {
  let firstName = document.getElementById("fName");
  let fnValue = firstName.value;
  const fnL = fnValue.length;
  if (fnL == 0) {
    adtxt.innerHTML = "Poor";
  }
  let firstName1 = document.getElementById("lName");
  let fnValue1 = firstName1.value;
  const fnL1 = fnValue.length;
  if (fnL1 == 0) {
    adtxt1.innerHTML = "Poor";
  }
  let firstName2 = document.getElementById("Email");
  let fnValue2 = firstName2.value;
  const fnL2 = fnValue.length;
  if (fnL2 == 0) {
    adtxt2.innerHTML = "Poor";
  }
  let firstName3 = document.getElementById("password");
  let fnValue3 = firstName3.value;
  const fnL3 = fnValue.length;
  if (fnL3 == 0) {
    adtxt3.innerHTML = "Poor";
  }
  let firstName4 = document.getElementById("repassword");
  let fnValue4 = firstName4.value;
  const fnL4 = fnValue.length;
  if (fnL4 == 0) {
    adtxt4.innerHTML = "Mismatch";
  }
  let firstName5 = document.getElementById("age");
  let fnValue5 = firstName5.value;
  const fnL5 = fnValue.length;
  if (fnL5 == 0) {
    adtxt5.innerHTML = "Poor";
  }
  let firstName6 = document.getElementById("phnNo");
  let fnValue6 = firstName6.value;
  const fnL6 = fnValue.length;
  if (fnL6 == 0) {
    adtxt6.innerHTML = "Poor";
  }

  let firstName7 = document.getElementById("Address");
  let fnValue7 = firstName7.value;
  const fnL7 = fnValue.length;
  if (fnL7 == 0) {
    adtxt7.innerHTML = "Poor";
  }
  let firstName8 = document.getElementById("State");
  let fnValue8 = firstName8.value;
  const fnL8 = fnValue.length;
  if (fnL8 == 0) {
    adtxt8.innerHTML = "Poor";
  }
});
