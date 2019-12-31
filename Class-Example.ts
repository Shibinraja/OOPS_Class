class Employee{
    employee : string;


    constructor(name : string){

        this.employee = name;
    }

    greet() {
        console.log(`Good Morning ${this.employee}`)
    }
}

let emp1 = new Employee("Shibin");
console.log(emp1.employee);
emp1.greet();

class Manager extends Employee{
    constructor(mangerName : string) {
        super(mangerName);
    }

    delegatework(){
        console.log(`Manager delegating tasks`)
    }
}


let m1 = new Manager('Wayne')
console.log(m1.employee);
m1.delegatework();
m1.greet();