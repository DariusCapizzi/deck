$(function(){

    event.preventDefault();

    /// variable declarations
    var numbers = ["Ace","1","2","3","4","5","6","7","8","9","10","Jack","Queen","King"];
    var suits = [" of clubs", " of spades", " of diamonds", " of hearts"];


    // put a "of suit" at the end of each number
    // card = number.concat(suit)

    // iterate by suit
    suits.forEach(function(suit){
      // iterate by number
      numbers.forEach(function(number){
        card = number.concat(suit)
        console.log(card)
      });

    });
});
