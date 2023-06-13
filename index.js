const input= document.querySelector(".inputField");
const button = document.querySelector(".btn");
const toDoCantainer = document.querySelector(".toDoList");

button.addEventListener("click", function (){
    const item = document.createElement("li");
    item.innerText = input.value;
    item.classList.add("toDoAdded");
    toDoCantainer.appendChild(item);
    input.value = "";
    item.addEventListener("click", function() {
        item.classList.add("toDoCompleted")
    })

    item.addEventListener("dblclick", function() {
        toDoCantainer.removeChild(item);
    })

})

gsap.from(".header", {x:100, duration:3, opacity:0.5, duration:3})





