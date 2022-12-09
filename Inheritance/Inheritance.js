var __extends = (this && this.__extends) || (function () {
    var extendStatics = function (d, b) {
        extendStatics = Object.setPrototypeOf ||
            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
            function (d, b) { for (var p in b) if (Object.prototype.hasOwnProperty.call(b, p)) d[p] = b[p]; };
        return extendStatics(d, b);
    };
    return function (d, b) {
        if (typeof b !== "function" && b !== null)
            throw new TypeError("Class extends value " + String(b) + " is not a constructor or null");
        extendStatics(d, b);
        function __() { this.constructor = d; }
        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
    };
})();
// Inheritance Example 1
var CreateAccount = /** @class */ (function () {
    function CreateAccount() {
    }
    CreateAccount.prototype.makeEmail = function (person) {
        return "".concat(person, "@gmail.com");
    };
    return CreateAccount;
}());
var Users = /** @class */ (function (_super) {
    __extends(Users, _super);
    function Users() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Users.prototype.addUser = function (user) {
        return "".concat(user, " is added successfully");
    };
    return Users;
}(CreateAccount));
var U1 = new Users();
console.log(U1.addUser("Rohit"));
console.log(U1.makeEmail("Rohit"));
// Inheritance Example 2
var BasicsOperation = /** @class */ (function () {
    function BasicsOperation() {
    }
    BasicsOperation.prototype.addtion = function (num1, num2) {
        return "Addition is ".concat(num1 + num2, " ");
    };
    BasicsOperation.prototype.subtraction = function (num1, num2) {
        return "Subtraction is ".concat(num1 - num2, " ");
    };
    return BasicsOperation;
}());
var MainOperation = /** @class */ (function (_super) {
    __extends(MainOperation, _super);
    function MainOperation() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    MainOperation.prototype.square = function (value) {
        return " Square is ".concat(Math.pow(value, 2), " ");
    };
    return MainOperation;
}(BasicsOperation));
var Calculator = /** @class */ (function (_super) {
    __extends(Calculator, _super);
    function Calculator() {
        return _super !== null && _super.apply(this, arguments) || this;
    }
    Calculator.prototype.multiplication = function (num1, num2) {
        return "Multiplication is ".concat(num1 * num2, " ");
    };
    return Calculator;
}(MainOperation));
var OP1 = new Calculator();
console.log(OP1.addtion(4, 5));
console.log(OP1.subtraction(8, 1));
console.log(OP1.multiplication(4, 5));
console.log(OP1.square(13));
