
let firstPage = document.getElementById("body1");
let secondPage = document.getElementById("body2");
let thirdPage = document.getElementById("body3");
 let boxContainer = document.getElementById("boxes");
 let nextButton =document.getElementById("next");
boxContainer.addEventListener("click",function(event){
    firstPage.style.display = "none";
    secondPage.style.display = "grid";
    if(event.target.dataset.id == 1){
        document.getElementById("navparagraph").innerHTML = "TABLE SERVICE";
    }
    else if(event.target.dataset.id == 2){
        document.getElementById("navparagraph").innerHTML = "CAFE";
    }
    else if(event.target.dataset.id == 3){
        document.getElementById("navparagraph").innerHTML = "TAKE OUT";
    }
    else{
        document.getElementById("navparagraph").innerHTML = "BUFFET"; 
    }
})
document.getElementById("splitgeneral").addEventListener("click",function(event){
    if(event.target.dataset.id == 10){
       let firstDivide =  parseFloat(total(result.innerHTML)) / 1
       document.getElementById("totalcount").innerHTML = "$" + firstDivide.toFixed(2);
    }
    else if(event.target.dataset.id == 20){
        let secondDivide =  parseFloat(total(result.innerHTML)) / 2
        document.getElementById("totalcount").innerHTML =  "$" + secondDivide.toFixed(2);
        }
    else{
        let thirdDivide =  parseFloat(total(result.innerHTML)) / 3
        document.getElementById("totalcount").innerHTML =  "$" + thirdDivide.toFixed(2);
    }
})
nextButton.addEventListener("click",function(){
    secondPage.style.display = "none";
    thirdPage.style.display = "grid";
    document.getElementById("totalvalue").innerHTML =   document.getElementById("totalvalue").innerHTML + result.innerHTML;
    document.getElementById("taxvalue").innerHTML =    document.getElementById("taxvalue").innerHTML + calculateTax(result.innerHTML);
    document.getElementById("tipvalue").innerHTML =     document.getElementById("tipvalue").innerHTML + calculateTip(result.innerHTML);
    document.getElementById("amount").innerHTML =   document.getElementById("amount").innerHTML + calculateTip(result.innerHTML);
    document.getElementById("totalcount").innerHTML =   document.getElementById("totalcount").innerHTML + total(result.innerHTML);

})
let result = document.getElementById("result");
let resultContainer = document.getElementById("resultContainer");
function display(num){
         result.innerText =  result.innerText + num;
}
resultContainer.scrollLeft = resultContainer.scrollWidth;
document.getElementById("clear").addEventListener("click",function(){
    result.innerText = "";
})
let rangeResult = document.getElementById("rangeresult");
rangeResult.innerHTML = document.getElementById("range").value + "%";
document.getElementById("range").addEventListener("mousemove",function(event){
    rangeResult.innerHTML = event.target.value + "%" ;
   let input = parseFloat(result.innerHTML);
    let tax = parseFloat(event.target.value) / 100;
    let finalValue =  input * tax;
    document.getElementById("tipvalue").innerHTML = finalValue.toFixed(2);
    let totalCount = parseFloat(calculateTax(result.innerHTML)) + parseFloat(result.innerHTML) + parseFloat(calculateTip(finalValue))  ;
    document.getElementById("totalcount").innerHTML = "$" + totalCount.toFixed(2);
})
document.getElementById("range").addEventListener("change",function(event){
    rangeResult.innerHTML = event.target.value +"%" ;
    let input = parseFloat(result.innerHTML);
    let tax = parseFloat(event.target.value) / 100;
    let finalValue =  input * tax;
    document.getElementById("tipvalue").innerHTML =  "$" + finalValue.toFixed(2);
    let totalCount = parseFloat(calculateTax(result.innerHTML)) + parseFloat(result.innerHTML) + parseFloat(calculateTip(finalValue))  ;
    document.getElementById("totalcount").innerHTML = "$" + totalCount.toFixed(2);
})
function calculateTax(input){
    parseFloat(input);
    const tax = 6.8/100;
    let finalValue = input * tax;
    return finalValue.toFixed(2);

}
function calculateTip(input){
    parseFloat(input);
    let tax = parseFloat(rangeResult.innerHTML) / 100;
    let finalValue = input * tax;
    return finalValue.toFixed(2);

}
function total(input){
     let totalCount = parseFloat(calculateTax(input)) + parseFloat(input) + parseFloat(calculateTip(input))  ;
     return totalCount.toFixed(2);
}
let firstCloseIcon = document.getElementById("left1");
let secondCloseIcon = document.getElementById("left2");
let thirdCloseIcon = document.getElementById("left3");
let redoIcon = document.getElementById("redo");

secondCloseIcon.addEventListener("click",function(){
     secondPage.style.display = "none";
     firstPage.style.display = "grid";
})
thirdCloseIcon.addEventListener("click",function(){
    thirdPage.style.display = "none";
    secondPage.style.display = "grid";
})
redoIcon.addEventListener("click",function(){
    window.location.reload();
})