// when you have a URL like this: https://example.com/?name=John&age=30
// use URLSearchParams to extract the parameters:
const params = new URLSearchParams(window.location.search);
const name = params.get('name'); // "John"
const age = params.get('age'); // "30"

// use methods like .has(), .set(), 
// and .delete() to check for the existence of parameters, update their values, or remove them from the query string.

// check if a parameter exists:
if (params.has('name')) {
  console.log('Name parameter exists!');
}

// update a parameter's value:
params.set('age', 31); // Update age to 31

// remove a parameter:
params.delete('name'); // Remove name parameter

// convert the URLSearchParams object back to a query string using the .toString() method:
const queryString = params.toString(); // "age=31"