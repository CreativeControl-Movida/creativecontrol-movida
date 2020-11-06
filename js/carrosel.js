var cards = document.getElementsByClassName("card");
var cardwidth = cards[1].clientWidth;
var cardmargin =  getComputedStyle(cards[1].parentNode).paddingLeft.replace(/[^-\d\.]/g, '');
var cardpadding =  getComputedStyle(cards[1]).paddingLeft.replace(/[^-\d\.]/g, '');
var cardwrap = document.getElementsByClassName("card-stack")[0]
var cardsinview = 0;
var currentCard = 1;

setCards();

function setCards() {
  var wrapwidth = cardwrap.clientWidth;
  var canfit = (wrapwidth/cardwidth);
  var realfit =  Math.floor((wrapwidth/ (cardwidth)))
  var margin = ((cardmargin) * realfit) * 2;
  var padding = ((cardpadding) * realfit) * 2;
  // var newwidth = (wrapwidth - margin - padding) / realfit;

  cardsinview = realfit
  
  for(var i = 0; i < cards.length; i++){
    //  cards[i].setAttribute("style", "min-width:" +  newwidth + "px")
     cards[i].parentNode.id = 'card-'+(i+1)
  }
}

function scroll(direction) {
  var nextcardcount = 0
  
  if (direction == 'forward'){
     nextcardcount = (currentCard < cardsinview)? ((cardsinview * 2) > cards.length)? cards.length : cardsinview * 2: ((currentCard + cardsinview) > cards.length)? cards.length: currentCard + cardsinview
  }else {
     nextcardcount = (cardsinview == 1)? currentCard - cardsinview:(Math.floor(currentCard/cardsinview) <= cardsinview)? 1: currentCard/cardsinview
  }
  
  var nextelement = document.getElementById('card-'+ nextcardcount)
  nextelement.scrollIntoView({ behavior: 'smooth',  inline: 'nearest' });

  currentCard = nextcardcount;
  console.log(nextcardcount)

}

window.addEventListener('resize', function() {
  setCards();
  document.getElementById('card-'+ 1).scrollIntoView({ behavior: 'smooth',  inline: 'nearest' });
})