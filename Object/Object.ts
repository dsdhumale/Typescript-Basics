//Object

const car: { type: string, model: string, year?: number } = {
    type: "Toyota",
    model: "Corolla",
};
car.year = 2009;
console.log("Object", car.year);

//Type alias

type objtype = { type: string, model: string, year: number }

const modifycar: objtype = {
    type: "Toyota",
    model: "Corolla",
    year: 2009
};
console.log("Modify car", modifycar);

const Newcar: objtype = {
    type: "Tata",
    model: "Nexon",
    year: 2017
};
console.log("Newcar", Newcar);
