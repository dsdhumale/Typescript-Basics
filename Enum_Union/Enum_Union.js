//Enum-----A group of constant ,can assign a number to your string,readonly properties
var Days;
(function (Days) {
    Days[Days["Monday"] = 0] = "Monday";
    Days[Days["Tuesdau"] = 1] = "Tuesdau";
    Days[Days["Wednesday"] = 2] = "Wednesday";
    Days[Days["Thursday"] = 3] = "Thursday";
    Days[Days["Friday"] = 4] = "Friday";
    Days[Days["Saturday"] = 5] = "Saturday";
    Days[Days["Sunday"] = 6] = "Sunday";
})(Days || (Days = {}));
console.log(Days.Monday);
var StatusCodes;
(function (StatusCodes) {
    StatusCodes[StatusCodes["NotFound"] = 404] = "NotFound";
    StatusCodes[StatusCodes["Success"] = 200] = "Success";
    StatusCodes[StatusCodes["Accepted"] = 202] = "Accepted";
    StatusCodes[StatusCodes["BadRequest"] = 400] = "BadRequest";
})(StatusCodes || (StatusCodes = {}));
console.log(StatusCodes.BadRequest);
//   StatusCodes.Success=500    // Cannot re-assign value becoz having readonly properties
// Union
function combine(a, b) {
    if (typeof a == 'number' && typeof b == 'number') {
        return a + b;
    }
    else {
        return a.toString() + b.toString();
    }
}
console.log(combine(45, 18));
console.log(combine("Rohit", "Virat"));
