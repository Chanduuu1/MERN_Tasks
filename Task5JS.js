function myFunction(){
    let displayText = document.getElementById("textD");
    let tField = document.getElementById("fname");
    let displayText1 = document.getElementById("textM");
    let tField1 = document.getElementById("mail");
    let displayText2 = document.getElementById("textW");
    let tField2 = document.getElementById("webb");
    let displayText3 = document.getElementById("textMsg");
    let tField3 = document.getElementById("msg");

    displayText.innerHTML = "This field is required";
    displayText.style.marginLeft = "20px";
    tField.style.border = "2px solid red"; 
    displayText1.innerHTML = "This field is required";
    displayText1.style.marginLeft = "20px";
    tField1.style.border = "2px solid red"; 
    displayText2.innerHTML = "This field is required";
    displayText2.style.marginLeft = "20px";
    tField2.style.border = "2px solid red"; 
    displayText3.innerHTML = "This field is required";
    displayText3.style.marginLeft = "20px";
    tField3.style.border = "2px solid red"; 
}