// Inheritance Example 1
class CreateAccount{
    makeEmail(person){
        return `${person}@gmail.com`
    }
}
class Users extends CreateAccount{
    addUser(user){
        return `${user} is added successfully`
    }
}
const U1= new Users();
console.log(U1.addUser("Rohit"));
console.log(U1.makeEmail("Rohit"));



// Inheritance Example 2

class BasicsOperation {
    addtion(num1,num2){
        return `Addition is ${num1+num2} `
    }
    subtraction(num1,num2){
        return `Subtraction is ${num1-num2} `
    }
}
class MainOperation extends BasicsOperation{
    square(value) {
        return ` Square is ${value ** 2} `;
    }
}
class Calculator extends MainOperation{
    multiplication(num1,num2){
        return `Multiplication is ${num1*num2} `
    }
}
const OP1= new Calculator();
console.log(OP1.addtion(4,5));
console.log(OP1.subtraction(8,1));
console.log(OP1.multiplication(4,5));
console.log(OP1.square(13));