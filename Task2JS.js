let str = 'webmaster';

reverseString(str);
function reverseString(str){
    let revstr = "";
    for(let i = 97; i < 123; i++){
        for(let j = 0; j < str.length; j++){
            if(str.charCodeAt(j) == i){
                revstr += str.charAt(j) + '';
            }
            
        }
    }
    console.log(revstr);
}

