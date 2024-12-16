class Employee{
    public empName: string;
    protected empCode: number;

    constructor(name: string, code: number){
        this.empCode = code;
        this.empName = name;
    }
}


class SalesEmplyee extends Employee{
    private department: string;

    constructor(name: string, code: number, department: string){
        super(name,code);
        this.department = department;
    }
}

let emp = new SalesEmplyee("Prabhav",123,"tech no Sales");

console.log(emp.empName);
