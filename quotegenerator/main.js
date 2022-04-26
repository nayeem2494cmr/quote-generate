let btn=document.getElementById('btn');
let output=document.getElementById('output');
let quote=[
    '“It is a far, far better thing that I do, than I have ever done, it is a far, far better rest I go to than I have ever known--Charles Dickens"',
    '“All we have to decide is what to do with the time that is given us --J.R.R. Tolkein"',
    '“You have brains in your head. You have feet in your shoes. You can steer yourself any direction you choose. You’re on your own. And you know what you know. And YOU are the one who’ll decide where to go-- Dr Seuss"',
    '“It matters not what someone is born, but what they grow to be.--J.K. Rowling"',
    '“Whatever our souls are made of, his and mine are the same.-- Emily Bronte alex"',
    '“Whenever you feel like criticizing anyone … just remember that all the people in this world haven’t had the advantages that you’ve had.-- F. Scott Fitzgerald"',
    '“Real courage is when you know you’re licked before you begin, but you begin anyway and see it through no matter what--To Kill a Mockingbird, Harper Lee"',
    '“A bear, however hard he tries, grows tubby without exercise.--A.A. Milne"',
];

btn.addEventListener('click',function() 
{
    var randomQuote=quote[Math.floor(Math.random()*quote.length)]
    output.innerHTML=randomQuote;    
});
