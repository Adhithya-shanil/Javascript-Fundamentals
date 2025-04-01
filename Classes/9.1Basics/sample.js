class Person{
    constructor(name,age){
        this.name = name;
        this.age = age;
    }
    displaygreet(){
        console.log(`Hi ,${this.name}, you are ${this.age} years old.`);
    }
}

const person1 = new Person('Adhihtya',23);
person1.displaygreet();

class Student extends Person {
    constructor(name, age, grade) {
        super(name, age); // Calls the parent (Person) constructor
        this.grade = grade;
    }

    study() {
        console.log(`${this.name} is studying in grade ${this.grade}.`);
    }
}

const student1 = new Student("Charlie", 20, "10th");
student1.displaygreet(); // Hello, my name is Charlie.
student1.study(); 