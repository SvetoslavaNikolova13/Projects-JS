
// Variables 

let btn = document.querySelector('#next-quote');
let quote = document.querySelector('.quote');
let author = document.querySelector('.author');

const quotes = [{

    quote: '"Those who don\'t believe in magic will never find it."',
    author: 'Roald Dahl'
},
{
    quote: '"Try to be a rainbow in someone\'s cloud."',
    author: 'Maya Angelou'
},
{
    quote: '"What lies behind you and what lies in front of you, pales in comparison to what lies inside of you."',
    author: 'Ralph Waldo Emerson'
},
{
    quote: '"Most people are nice when you finally see them."',
    author: 'Harper Lee'
},
{
    quote: '"Try to be a rainbow in someone\'s cloud."',
    author: 'Maya Angelou'
},
{
    quote: '"All our dreams can come true, if we have the courage to pursue them."',
    author: 'Walt Disney'
},
{
    quote: '"Do what is true to your soul."',
    author: 'Dalai Lama'
},
{
    quote: '"Be the change that you wish to see in the world."',
    author: 'Mahatma Gandhi'
},
{
    quote: '"The next choice is the most important choice."',
    author: 'George Wells'
},
{
    quote: '"The power of imagination makes us infinite."',
    author: 'John Muir'
},
{
    quote: '"When I let go of what I am, I become what I might be."',
    author: 'Lao Tzu'
},
{   quote: '"The mind is everything. What you think you become."',
    author: 'Buddha'

} ];

btn.addEventListener('click', function(){
    let random = Math.floor(Math.random() * quotes.length);

    quote.innerText = quotes[random].quote;
    author.innerText = quotes[random].author;
})