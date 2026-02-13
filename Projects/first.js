const quotes = [
    "The only way to do great work is to love what you do.",
    "In the middle of difficulty lies opportunity.",
    "Your time is limited, don’t waste it living someone else’s life.",
    "Success is not final, failure is not fatal: it is the courage to continue that counts.",
    "Believe you can and you're halfway there.",
    "Do something today that your future self will thank you for.",
    "Dream big and dare to fail.",
    "Hardships often prepare ordinary people for an extraordinary destiny.",
    "Happiness depends upon ourselves.",
    "Don’t let yesterday take up too much of today.",
    "Opportunities don't happen. You create them.",
    "What we think, we become.",
    "It always seems impossible until it's done.",
    "Small steps in the right direction can turn out to be the biggest steps of your life.",
    "Act as if what you do makes a difference. It does."
];

const button = document.querySelector('button');
let quote = document.querySelector('h1');
button.addEventListener('click', ()=>{
    const index = Math.floor(Math.random()*10);

    quote.textContent = quotes[index];
})