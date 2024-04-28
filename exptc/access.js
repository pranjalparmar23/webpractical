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
var Person = /** @class */ (function () {
    function Person(name, age, gender) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }
    Person.prototype.introduce = function () {
        return "Hi, my name is ".concat(this.name, ", I am ").concat(this.age, " years old, and I am ").concat(this.gender, ".");
    };
    return Person;
}());
var Employee = /** @class */ (function (_super) {
    __extends(Employee, _super);
    function Employee(name, age, gender, employeeId) {
        var _this = _super.call(this, name, age, gender) || this;
        _this.employeeId = employeeId;
        return _this;
    }
    Employee.prototype.getEmployeeInfo = function () {
        return "".concat(_super.prototype.introduce.call(this), " My employee ID is ").concat(this.employeeId, ".");
    };
    return Employee;
}(Person));
var person1 = new Person("Pranjal", 21, "Female");
console.log(person1.introduce());
var employee1 = new Employee("Dipesh", 43, "Male", 1001);
console.log(employee1.introduce());
console.log(employee1.getEmployeeInfo());
