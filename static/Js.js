// Make a function that can make it so there is a dark mode and light mode

let changeColorEl = document.getElementById("changeColor")

changeColorEl.addEventListener("click", nightmode)

function nightmode(e){
    console.log("Hello")

}

// function changeColor(e){ 
//     console.log(colorEl.value)
//     let colorChange = colorEl.value
    
//     if (CSS.supports('color', colorChange)){
//         colorEl.style.color = "white"
//         bodyEl.style.backgroundColor = colorChange;
//     }
//     else{
//         colorEl.style.color = "White"
//     }
// }