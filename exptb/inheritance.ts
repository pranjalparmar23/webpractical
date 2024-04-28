// single inheritance
class Animal{
    name : string;
    constructor(name:string){
       this.name = name;
    }
    move(distance:number = 0) {
       console.log(`${this.name} moved ${distance} meters`)
    }
}
class Dog extends Animal{
    breed : string;
    constructor(name:string , breed:string){
       super(name);
       this.breed = breed;
    }
    bark(){
       console.log('bhau bhau')
    }
}
const dog = new Dog("Tyson","Platinum mislayer");
dog.bark();
dog.move(10)

// Multilevel
class Bird extends Animal{
   
    fly(distance : number){
       console.log(`${this.name} flew ${distance} meters`)
    }
}
class Parrot extends Bird{
    speak(){
       console.log("I can speak")
    }
}
const parrot = new Parrot("Pakshi")
parrot.fly(10);
parrot.move();    
parrot.speak()
    
// Heirarchical
class Cat extends Animal {
    meow() {
       console.log("Meow!");
    }
}
const cat = new Cat("Pitty");
cat.move(3);
cat.meow();
    
//Multiple Inheritance
// Define interfaces for the properties and methods each superclass should have
interface Swim {
    swim(): void;
}
interface Fly {
    fly(): void;
}
// Define mixins implementing the interfaces
class Swimmer implements Swim {
    swim() {
       console.log("Swimming...");
    }
}
class Flier implements Fly {
    fly() {
       console.log("Flying...");
    }
}
// Class inheriting from multiple mixins
class Duck implements Swim, Fly {
    constructor(private name: string) {}
    swim() {
       console.log(`${this.name} is swimming`);
    }
    fly() {
       console.log(`${this.name} is flying`);
    }
}
// Create instances and use methods
const duck = new Duck("Daffy");
duck.swim(); // Output: Daffy is swimming
duck.fly(); // Output: Daffy is flyin