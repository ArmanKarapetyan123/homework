class Employee {
    constructor(name, position){
        this.name = name;
        this.position = position;
        
    }
    working(){
        return ("working");
    } 
};

class Manager extends Employee{
    haveMeetings(){
        return (`${this.name} + is in the meeting`);
    }
}

const employeer = new Employee("Hakob" , "administrator")
const manager = new Manager("Hayk", "Manager");
console.log(employeer.working());
console.log(manager.haveMeetings());