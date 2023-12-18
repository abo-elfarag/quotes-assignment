
var quotes = [
    {quote: "The best revenge is massive success." , owner: "Frank Sinatra" , imageUrl: "./imgs/220471.jpg"},
    {quote: "It's not what happens to you, but how you react to it that matters." , owner: "Epictetus" , imageUrl: "./imgs/13852.jpg"},
    {quote: "Do not take life too seriously. You will not get out alive." , owner: "Elbert Hubbard" , imageUrl: "./imgs/114059.jpg"},
    {quote: "You miss 100% of the shots you don't take." , owner: "Wayne Gretzy" , imageUrl: "./imgs/3565.jpg"},
    {quote: "Resentment is like drinking poison and waiting for your enemies to die." , owner: "Nelson Mandela" , imageUrl: "./imgs/367338.jpg"},
    {quote: "Be yourself; everyone else is already taken." , owner: "Oscar Wilde" , imageUrl: "./imgs/3565.jpg"},
    {quote: "I'm selfish, impatient and a little insecure. I make mistakes, I am out of control and at times hard to handle. But if you can't handle me at my worst, then you sure as hell don't deserve me at my best." , owner: "Marilyn Monroe" , imageUrl: "./imgs/82952.jpg"},
    {quote: "Two things are infinite: the universe and human stupidity; and I'm not sure about the universe." , owner: "Albert Einstein" , imageUrl: "./imgs/9810.jpg"},
    {quote: "A friend is someone who knows all about you and still loves you." , owner: "Elbert Hubbard" , imageUrl: "./imgs/114059.jpg"},
    {quote: "A room without books is like a body without a soul." , owner: "Marcus Tullius Cicero" , imageUrl: "./imgs/13755.jpg"},
    {quote: "Be who you are and say what you feel, because those who mind don't matter, and those who matter don't mind." , owner: "Bernard M. Baruch" , imageUrl: "./imgs/5768330.jpg"},
]

function randomQuotes(){

    var quoteContact = document.getElementById("quoteDescription");
    var quoteOwner = document.getElementById("quoteOwner");
    var ownerImg = document.getElementById("owner-Img");

    var randomIndex = Math.floor(Math.random() * quotes.length);

    document.getElementById("quoteDescription").innerHTML = `❝  ${quotes[randomIndex].quote}  ❞`;
    document.getElementById("quoteOwner").innerHTML = quotes[randomIndex].owner;
    document.getElementById("owner-Img").src = quotes[randomIndex].imageUrl;
    document.getElementById("owner-Img").alt = quotes[randomIndex].owner;
}
