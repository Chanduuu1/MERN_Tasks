function reverseNumber(x){
    while (x > 0) {
      console.log(x % 10);
      x = (x - (x % 10)) / 10;
    }
}

let x = 12345;
reverseNumber(x);
