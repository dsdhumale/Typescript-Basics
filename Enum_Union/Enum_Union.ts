//Enum-----A group of constant ,can assign a number to your string,readonly properties

enum Days {
    Monday,
    Tuesdau,
    Wednesday,
    Thursday,
    Friday,
    Saturday,
    Sunday
}
console.log(Days.Monday);

enum StatusCodes {
    NotFound = 404,
    Success = 200,
    Accepted = 202,
    BadRequest = 400
}

console.log(StatusCodes.BadRequest);
//   StatusCodes.Success=500    // Cannot re-assign value becoz having readonly properties

// Union

function combine(a:string | number , b:string | number){
    if (typeof a == 'number' && typeof b == 'number') {
        return a+b;
    } else {
        return a.toString()+b.toString();
    }
}
console.log(combine(45,18));
console.log(combine("Rohit", "Virat"));

