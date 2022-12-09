var Fruits = /** @class */ (function () {
    function Fruits(Name, taste, quntity) {
        this.Name = Name;
        this.taste = taste;
        this.quntity = quntity;
    }
    return Fruits;
}());
var fruit1 = new Fruits("Apple", "Sweet", 15);
console.log(fruit1.Name);
console.log(fruit1);
