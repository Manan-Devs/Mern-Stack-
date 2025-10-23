const quotes = [
    "The best way to get started is to quit talking and begin doing. : Walt Disney",
    "Don’t let yesterday take up too much of today. — Will Rogers",
    "It always seems impossible until it’s done. — Nelson Mandela",
    "If you want to achieve greatness, stop asking for permission. — Anonymous",
    "Dream big. Start small. Act now. — Robin Sharma",
    "Success is not final, failure is not fatal: It is the courage to continue that counts. — Winston Churchill",
    "The harder you work for something, the greater you’ll feel when you achieve it. — Anonymous",
    "Don’t watch the clock; do what it does. Keep going. — Sam Levenson",
    "Believe you can and you’re halfway there. — Theodore Roosevelt",
    "Your time is limited, don’t waste it living someone else’s life. — Steve Jobs",
    "Push yourself, because no one else is going to do it for you. — Anonymous",
    "You miss 100% of the shots you don’t take. — Wayne Gretzky",
    "Do what you can, with what you have, where you are. — Theodore Roosevelt",
    "Great things never come from comfort zones. — Anonymous",
    "Everything you can imagine is real. — Pablo Picasso" ,
     "Don’t be afraid to give up the good to go for the great. — John D. Rockefeller",
     "Opportunities don’t happen. You create them. — Chris Grosser",
     "Act as if what you do makes a difference. It does. — William James",
     "Success doesn’t just find you. You have to go out and get it. — Anonymous",
     "You must do the thing you think you cannot do. - Eleanor Roosevelt."
]

const bgimages = [
   "url('./assets/inspiration.jpg')",
   "url('./assets/inspiration2.jpg')",
   "url('./assets/inspiration3.jpg')"
]

   const button = document.querySelector('button');
   const quote = document.querySelector('h1');
   button.addEventListener('click', () => {
   
    const index2 = Math.floor(Math.random() * bgimages.length);
     
    console.log(index2);
    document.querySelector('body').style.backgroundImage = bgimages[index2];
    quote.style.color = "black";
    document.body.style.backgroundSize = "cover, contain, cover";
    document.body.style.backgroundPosition = "center, top right, bottom left";
    document.body.style.backgroundRepeat = "no-repeat, no-repeat, no-repeat";
       
    const index = Math.floor(Math.random() * 20 );
    console.log(index);
    quote.textContent = quotes[index];
});



