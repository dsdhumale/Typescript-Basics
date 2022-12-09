var ourTuple;
ourTuple = [5, false, 'Devendra']; // initialize correctly
ourTuple.push(45);
console.log("ourTuple", ourTuple);
// ourTuple = [5, 6, 'Devendra'];         //  initialize incorrectly
// ourTuple = [5, true, 'Devendra',45];         //  allows only 3 element during initialising
var isTuple;
isTuple = [5, false, 'Devendra'];
// isTuple.push("ssss");      // Due to readonly cannot able to add another element
console.log("isTuple", isTuple);
