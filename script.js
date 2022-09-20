let colors=[]

let cuadrados=document.querySelectorAll(".square")

let message = document.querySelector("#message")
let stripe = document.querySelector("#stripe")

generateRandomColors(6)
colores()
function colores() {
  

  for (let i = 0; i < colors.length; i++) {
    cuadrados[i].style.backgroundColor=colors[i];
      cuadrados[i].addEventListener("click", function(){
         let clickedColor=cuadrados[i].style.backgroundColor
  
  
  
         if (clickedColor == pickedColor) {
          message.textContent="Right!"
       
          span.style.backgroundColor= pickedColor
          botton.textContent= "Play again ?"
  
          changeColors(clickedColor)
      }else{
          cuadrados[i].style.backgroundColor = "rgb(0, 100, 0)"  
          
          message.textContent="Try again!!"
   
  
      }
      })
  
         
  } 


}




// color ganador

let pickedColor= pickColor(6)

let span=document.querySelector("#colorDisplay")

span.textContent=pickedColor


// funcion ganar 
    
   function changeColors(color) {
for (let i = 0; i < cuadrados.length; i++) {
    
        cuadrados[i].style.backgroundColor=color
        stripe.style.backgroundColor=color
       
        
}
 
    
}

// funcion color ganador

function pickColor(numero) {

 return colors[parseInt(Math.random()*numero)]
    
}

// color random

function randomColor() {


 let rojo = parseInt(Math.random()*254)
  let verde =parseInt(Math.random()*254)
  let azul= parseInt(Math.random()*254) 
 return `rgb(${rojo}, ${verde}, ${azul})`;
}
console.log(randomColor());



function generateRandomColors (numero){


let i = 0
      while (numero > 0) {
        

        colors.push(randomColor())

        numero --
      }

}


// boton reset

let botton= document.querySelector("#reset")

  

  botton.addEventListener("click", function(){
    if (colors.length < 4) {
      
      stripe.style.backgroundColor="grey"
      message.textContent=""
      easyFunction()

  }else{
   stripe.style.backgroundColor="grey"
    message.textContent=""
    hardGame()
}})

 

// dificultad EASY / HARD 
let easy = document.querySelector("#easyButton")
let hard = document.querySelector("#hardButton")
function easyFunction(){

  easy.classList.add("selected")
  hard.classList.remove("selected")
  colors=[]
    generateRandomColors(3)
    colores()
    pickedColor= pickColor(3)
    span.textContent=pickedColor
    botton.textContent="New colors"
    span.style.backgroundColor= "rgb(0, 100, 0)"  
    cuadrados[3].style.display="none"
    cuadrados[4].style.display="none"
    cuadrados[5].style.display="none"
    colors.splice(3,5)
}

easy.addEventListener("click",function(){
  stripe.style.backgroundColor="grey"
  message.textContent=""
  easyFunction()
})





hard.addEventListener("click", function(){
  
  stripe.style.backgroundColor="grey"
  message.textContent=""
  hard.classList.add("selected")
  easy.classList.remove("selected")
  hardGame()
})


// function GENERAR JUEGO HARD

function hardGame() {
  colors=[]
  generateRandomColors(6)
  colores()
  pickedColor= pickColor(6)
  span.textContent=pickedColor
  botton.textContent="New colors"
  span.style.backgroundColor= "rgb(0, 100, 0)"  
  cuadrados[3].style.display="block"
  cuadrados[4].style.display="block"
  cuadrados[5].style.display="block"



}


