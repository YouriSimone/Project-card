const btn_text = document.getElementById("btn");
const text = document.querySelector("p");

let counter = 0;

btn_text.addEventListener("click", (e)=>{
    counter ++;

    if(counter %2 !== 0){
    text.style.display = "none";
    e.target.textContent = "Mostra testo";
    }

    else {
    text.style.display = "none";
    e.target.textContent = "Nascondi testo";

    }
})