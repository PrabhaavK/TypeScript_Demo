abstract class Person{
    abstract name: string;

    display(): void{
        console.log(this.name);
    }
}

class Employee extends Person{
    name: string;
    empCode: number;

    constructor(name:string,empCode:number){
        super();

        this.empCode = empCode;
        this.name = name;
    }
}

let emp: Person= new Employee("Prabhav",101);
emp.display();