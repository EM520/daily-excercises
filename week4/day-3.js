// Q1:
// prevent myForm from refreshing the page on submit
// if the value of the input is "multiply"
// grab the value of #num1 and #num2
// and show the answer in the input
const form1 = document.querySelector("#myForm")
const num1 = document.querySelector("#num1")
const num2 = document.querySelector("#num2")
const input = document.querySelector("#answer")

form1.addEventListener("submit", function (e) {
  e.preventDefault()

  if (input.value == "multiply"){
     alert((num1.textContent)* (num2.textContent))
  }  
})



// Q2:
// update #box to the background color green when
//myBtn is clicked
const box = document.querySelector("#box");
const  btn= document.querySelector("#myBtn");
btn.addEventListener('click',function(e){
  box.style.backgroundColor = "green"
})
