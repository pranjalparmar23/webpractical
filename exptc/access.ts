class Person {
    public name: string;
    private age: number;
    protected gender: string;


    constructor(name: string, age: number, gender: string) {
        this.name = name;
        this.age = age;
        this.gender = gender;
    }


    public introduce(): string {
        return `Hi, my name is ${this.name}, I am ${this.age} years old, and I am ${this.gender}.`;
    }
}


class Employee extends Person {
    private employeeId: number;


    constructor(name: string, age: number, gender: string, employeeId: number) {
        super(name, age, gender);
        this.employeeId = employeeId;
    }


    public getEmployeeInfo(): string {
        return `${super.introduce()} My employee ID is ${this.employeeId}.`;
    }
}


let person1 = new Person("Pranjal", 21, "Female");
console.log(person1.introduce());


let employee1 = new Employee("Dipesh", 43, "Male", 1001);
console.log(employee1.introduce());
console.log(employee1.getEmployeeInfo());