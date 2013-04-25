/*

Dynamically Selecting a Method/Property

e.g.: 

  element[shouldBeVisible ? 'show' : 'hide']();

  is equal to

  if(shouldBeVisible){
    element.show();
  }
  else
  {
    element.hide();
  }

*/

var love = {
  firstName: 'Élodie',
  lastName: 'Porteneuve'
};

var useFirstName = true;

alert(love[useFirstName ? 'firstName' : 'lastName']);