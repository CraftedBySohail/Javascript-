// Promises are object
 console.log("Hello");

 let p1 = fetch("https://api.gthub.com/users/octocat");

 console.log(p1);

 let p2 = p1.then((Response)=>{
    return Response.json();
 })
 .catch((err)=>{
    console.log(`failed to fetch ${err}`);
    return null;
 })

 const div1 = document.getElementById("first");
p2.then(data => {
    if (!data) {
        div1.textContent = "Failed to load user.";
        return;
    }
    div1.textContent = `name: ${data.name}, id: ${data.id}`;
});
