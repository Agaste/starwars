'use strict';

var quotes = [{
  'author': '- Yoda',
  'quote': 'When 900 years old, you reach… Look as good, you will not.'
}, {
  'author': '- Senator palpatine',
  'quote': 'The Dark Side of the Force is the pathway to many abilities some consider to be.. Unnatural.'
}, {
  'author': '- Count Dooku',
  'quote': 'I sense great fear in you, Skywalker. You have hate… you have anger… but you don’t use them.'
}, {
  'author': '- Darth vader',
  'quote': 'Luke, you can destroy the Emperor. He has foreseen this. It is your destiny. Join me, and together we can rule the galaxy as father and son.'
}, {
  'author': '- Princess leila',
  'quote': 'Aren\'t you a little short for a storm trooper?'
}, {
  'author': '- Yoda',
  'quote': 'Mmm. Lost a planet, Master Obi-Wan has. How embarrassing.'
}, {
  'author': '- Qui-Gon Jinn',
  'quote': 'Your focus determines your reality'
}, {
  'author': '- Yoda',
  'quote': 'Do. Or do not. There is no try.'
}, {
  'author': '- Obi-Wan-Kenobi',
  'quote': 'In my experience there is no such thing as luck.'
}, {
  'author': '- Yoda',
  'quote': 'If once you start down the dark side, forever will it dominate your destiney, consume you it will, as it did Obi-Wan\'s apprentice'
}, {
  'author': '- Darth Vader',
  'quote': 'The Force is strong with this one.'
}];

/*var quote_content;
var author_content;*/

function getRandomQuote() {

    var randomIndex = Math.floor(Math.random()*quotes.length);
    var quotation = quotes[randomIndex];

    ReactDOM.render(
      React.createElement('h3',null,quotation.quote),
      document.getElementById('quote-content')
      );

    ReactDOM.render(
      React.createElement('h1',null,quotation.author),
      document.getElementById('author-content')
      );

    ReactDOM.render(
      React.createElement('h2',null, quotation.quote),
      document.getElementById('quote-content')
     );    

/*    console.log('Author : '+quotation.author);
    console.log('Citation : '+quotation.quote);*/
}


function getAuthor(sentence) {
    for(var i=0;i<quotes.length;i++) {
      var reg = quotes[i].quote.search(sentence);
      if(reg!=-1) {
        console.log('The author : '+quotes[i].author+' made the quote : '+quotes[i].quote);
        //quote_content = "\""+quotes[i].quote+"\"";
        //author_content = quotes[i].author;
    }
    }
}


function getRandomQuoteAuthor(authors) {


    var quotes_author = [];
    var auteur = '';

    for(var i=0; i<quotes.length; i++) {
      var reg = quotes[i].author.search(authors);
      if(reg != -1) {
        quotes_author.push(quotes[i].quote);
      }
    }

    var randomIndex = Math.floor(Math.random()*quotes_author.length);
    var quotation = quotes_author[randomIndex];

    ReactDOM.render(
      React.createElement('h2',null, quotation),
      document.getElementById('darth-vader-content')
     );  

    console.log(auteur+' said : '+quotation);
}

getRandomQuote();
getRandomQuoteAuthor('Darth');


//getRandomQuote('Yoda');