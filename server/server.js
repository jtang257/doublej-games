const express = require('express');
const cors = require('cors');

// activate app
const app = express();

// activate middleware
app.use(cors());

// import data
const data = require('./data');

// build the card creator extract

app.get('/getMyCard', (request, response) => {
    let cardList = [];
   
    //pick 24 random words
    for (i = 0; i < 24; i++) {
        let randomIndex = Math.floor(Math.random() * (words.length));
        let targetWord = words[randomIndex];
        cardList.push(targetWord);
    }
    // const newQuestion = { ...question};
    // delete newQuestion.correctAnswer;
    response.send(cardList);
    // const randomIndex = Math.floor(Math.random() * arrayLength);
    // return randomIndex;
    
    console.log(cardList);
})



app.listen(7700, (request, response) => {
    console.log('The server is ready on port 7700');

})