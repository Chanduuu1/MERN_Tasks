let img = document.getElementById("trainn");
let st = document.getElementById("start");

var id = null;
st.addEventListener("click", function start(){
    
    var initialPos = 0;
    clearInterval(id);
    id = setInterval(frame, 10);
    function frame(){
        if(initialPos == 1100){
            clearInterval(id);
        }
        else{
            initialPos++;
            img.style.marginLeft = initialPos + "px";
        }
        
        
    }
        
    
    
    
});

