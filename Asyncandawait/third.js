

async function github(){
    try{
        console.log("Hello World");
    const response = await fetch("https://api.github.com/users");
    if(response.ok == false){
        throw new Error("data is not present");
    }
    const data = await response.json();
    const parent = document.getElementById('first');
    for(let users of data){
        const element = document.createElement("div");
        element.classList.add("user");


        const image = document.createElement("img");
        image.src = users.avatar_url;


        const userName = document.createElement("h2");
        userName.textContent = users.login;

        const anchor = document.createElement('a');
        anchor.href = users.html_url;
        anchor.textContent = "Visit Profile";

        element.append(image,userName,anchor);
        parent.append(element);


    }
}
catch(error){
    console.log("error");
}

}



github();