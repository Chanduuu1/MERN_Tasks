const dateButton = document.getElementById("dateShow");
const dateTButton = document.getElementById("DtShow");
const ds = document.getElementById("ds");
const dts = document.getElementById("dts");

dateButton.addEventListener('click', function(){
    const currDate = new Date();
    const formatedDate = currDate.toLocaleDateString();
    ds.textContent = "todays date is : "+formatedDate;
});

dateTButton.addEventListener("click", function () {
  const currDate = new Date();
  
  dts.textContent = "todays date and Time is : " + currDate;
});