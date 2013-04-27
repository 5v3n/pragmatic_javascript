/*

Using Optional, Variable and Named Arguments

- every function has a `.argument` attribute where all passes parameters are stored
  -> you can pass as many parameters as you like even if only one is defined by the method (see exampleTwo below)

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

  //declare parameters
  exampleOne.repeat = function(rant, times){
    while(--times >= 0){
      puts(rant);
    }
  };

  puts('------------------ Chapter 3, example 1');
  exampleOne.repeat('Ranting!', 5);

  //grab arguments (however way)
  exampleTwo.repeat = function(times) {
    puts('arguments: ');
    puts(arguments);
    while(--times >= 0){
      for(var index = 0, len = arguments.length; index < len; ++index){
        puts('arguments[' + index + ']: ' + arguments[index]);
      }
    }
  };

  puts('------------------ Chapter 3, example 2');
  exampleTwo.repeat(2, 'second argument', 'third argument');

  //take optional arguments with default values
  exampleThree.repeat = function(times, rant) {
    if(undefined === rant){
      rant = 'Standard rant. Can\'t you try harder?'
    }
    while(--times >= 0){
      puts(rant);
    }
  };

  puts('------------------ Chapter 3, example 3');
  exampleThree.repeat(3);
  exampleThree.repeat(3, 'Ranting again!');



})();
