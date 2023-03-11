document.addEventListener("DOMContentLoaded", () =>{
    console.log(changeText())
})
function changeText(){
    let element = document.getElementById("text")
    element.innerHTML = "This is really cool!"
    return element.innerHTML
}