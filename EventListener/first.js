let btn = document.getElementById("butn");
let div = document.getElementById("d");

function onClickBtn(event){
    btn.textContent = "Color Changed";
    div.style.backgroundColor = "red";

}

btn.addEventListener("click",onClickBtn);

