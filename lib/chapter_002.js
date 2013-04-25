/*

Achieving Code Privacy with the Module Pattern

- decalration with 'var' makes variable's scope local inside a function
- expose public attributes/methods by returninng a hash calling the local attributes/methods

*/

var obj = (function(){
  var privateField = 42;
  var publicField = 'fooBar';

  function processInternals(){
    alert('Internal Stuff: ' + privateField);
  };

  function run(){
    processInternals();
    alert('Still private stuff: ' + privateField);
    alert('Public Stuff: ' + publicField);
  };
  return {
    publicField: publicField,
    run: run
  };
})();

obj.run(); // three alerts

puts(obj.publicField); // fooBar
puts(obj.privateField); //undefined
puts(obj.processInternals()); // type error
