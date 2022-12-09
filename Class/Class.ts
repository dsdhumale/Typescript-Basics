class Fruits {
    Name: string;
    taste: string;
    quntity: number;
    constructor(Name: string, taste: string, quntity: number) {
        this.Name = Name;
        this.taste = taste;
        this.quntity = quntity;
    }

}
let fruit1 = new Fruits("Apple", "Sweet", 15)
console.log(fruit1.Name);
console.log(fruit1);




