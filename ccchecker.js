let params= new URLSearchParams(window.location.search);
let ccNum= Number(params.get('cc-num'));
let validateCred=(array)=>{
  let sum = 0;
  let times2 = num => {return num*2;}
  let sub9 = num => {return num-9;}
  let numAfter = 0;
  let num = 0;

  for(let i = array.length-1; i >= 0; i--){
    num = array[i];
    sum = sum + num;
    if( i > 0 ){
    numAfter = times2(array[i-1]);
      if(numAfter > 9){
        numAfter = sub9(numAfter);
      }
    sum = sum + numAfter;
    }
    i--;
  }
  return sum % 10 === 0;
}
let isValid= validateCred(ccNum) ? "Valid" : "Invalid";
let statement= `<p>Results: ${ccNum} is ${isValid} <a href="index.html">Start Over!</a></p>`;
let result = document.getElementById("result");
result.innerHTML = statement;
