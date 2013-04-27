/*

Using Optional, Variable and Named Arguments

- every function has a `.argument` attribute where all passes parameters are stored
  -> you can pass as many parameters as you like even if only one is defined by the method (see code below)

- `==` vs. `===`: 

  undefined ==  null   -> true (checks value)
  undefined === null   -> false (checks type and value)

- `||` uses empty strings, null, undefined, 0, false:

  localParam == localParam || defaultValue

*/
(function(){

  var exampleOne    = {},
      exampleTwo    = {},
      exampleThree  = {},
      exampleFour   = {};


  exampleOne.repeat = function(rant, times){
    while(--times >= 0){
      puts(rant);
    }
  };

  puts('Chapter 3, example 1');
  exampleOne.repeat('Ranting!', 5);

})();






