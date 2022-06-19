const quotes = [
    {
        quote: "A true friend looks at the tears hidden in forced smile.",
        author: "Winnie the pooh",
    },
    {
        quote: "It doesn’t matter what other people think. It matters what I think of myself.",
        author: "The little mermaid",
    },
    {
        quote: "The past can hurt. But the way I see it, you can either run from it or learn from it.",
        author: "Lion King",
    },
    {
        quote: "Do what you like, love what you do.",
        author: "Tangled",
    },
    {
        quote: "Today’s special moments are tomorrow’s memories.",
        author: "Aladdin",
    },
    {
        quote: "Don’t beat yourself up. Don’t need to run so fast. Sometimes we come last but we did our best.",
        author: "Zootopia",
    },
    {
        quote: "Success is not givin for free. You have to be able to do anything for your goal.",
        author: "Coco",
    },
    {
        quote: "The very things that hold you down are going to lift you up.",
        author: "Dumbo",
    },
    {
        quote: "Remember you’re the one who can fill the world with sunshine.",
        author: "Snow White and the seven dwarfs",
    },
    {
        quote: "The only thing we know is things don’t always go the way we plan.",
        author: "Lion King",
    },
]

const quote = document.querySelector("#quote span:first-child");
const author = document.querySelector("#quote span:last-child");

const todaysQuote = quotes[Math.floor(Math.random() * quotes.length)];

quote.innerText = `😎${todaysQuote.quote}`;
author.innerText = todaysQuote.author;