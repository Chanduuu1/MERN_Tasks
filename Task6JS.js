let submit = document.getElementById("subBut");
let adtxt = document.getElementById("inv");
let adtxt2 = document.getElementById("inv2");
submit.addEventListener("click", success);
function success() {
  let username = document.getElementById("un");
  let unValue = username.value;
  const unL = unValue.length;  
  let pass = document.getElementById("ps");
  let psValue = pass.value;
  const psL = psValue.length;  
  if(unL == 0){
    adtxt.innerHTML = "Please enter your username";   
  }
  if(psL == 0){
    adtxt2.innerHTML = "Please enter your password";   
  }
}


