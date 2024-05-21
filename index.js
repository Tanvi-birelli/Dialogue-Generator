const nextBtn = document.getElementById('next-btn');
const quote = document.getElementById("quote"); 
const person = document.getElementById("person");


const quotes =[
    {
        quote: "Yer a wizard Harry.",
        person: "Rubeus Hagrid"
    },
    {
        quote: "I solemnly swear I am up to no good.",
        person: "Harry Potter"
    },
    {
        quote: "I hope you're pleased with yourselves. We could all have been killed — or worse, expelled. Now if you don't mind, I'm going to bed.",
        person: "Hermione Granger"
    },
    {
        quote: "Do not pity the dead, Harry. Pity the living, and, above all those who live without love.",
        person: "Albus Dumbledore"
    },
    {
        quote: "Of course it is happening inside your head, Harry, but why on earth should that mean that it is not real?",
        person: "Albus Dumbledore"
    },
    {
        quote: "Love as powerful as your mother’s for you leaves its own mark. To have been loved so deeply, even though the person who loved us is gone, will give us some protection forever.",
        person: "Albus Dumbledore"
    },
    {
        quote: "You're a little scary sometimes, you know that? Brilliant... but scary.",
        person: "Ron Weasley"
    },
    {
        quote: "It takes a great deal of bravery to stand up to our enemies, but just as much to stand up to our friends.",
        person: "Albus Dumbledore"
    },
    {
        quote: "Books! And cleverness! There are more important things — friendship and bravery.",
        person: "Hermione Granger"
    },
    {
        quote: "I mean, it's sort of exciting, isn't it, breaking the rules?",
        person: "Hermione Granger"
    }  
]



nextBtn.addEventListener("click",()=>{
    const random = Math.floor(Math.random()*quotes.length);
    quote.innerText = quotes[random].quote;
    person.innerText= quotes[random].person
})