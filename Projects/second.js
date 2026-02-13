let parent = document.getElementById('parent');

parent.addEventListener('click', (event)=>{
     const child = event.target;
     const body = document.querySelector('body');
     body.style.backgroundColor = child.id;
});