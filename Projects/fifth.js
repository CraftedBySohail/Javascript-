
let div = document.getElementById("time");
setInterval((handler)=>{


let time = new Date();
div.textContent = time.toLocaleTimeString();

},1000)

