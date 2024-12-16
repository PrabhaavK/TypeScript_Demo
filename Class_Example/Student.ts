class Student {
    public fName: string;
    public lName: string;
    protected MobileNo: number;
    public Marks: number;
    public Standerd: string;

    constructor(fName:string,lName: string, Mobileno: number,Marks: number,Standerd: string)
    {
        this.Marks = Marks;
        this.MobileNo = Mobileno;
        this.lName = lName;
        this.fName = fName;
        this.Standerd =Standerd;
    }
}
class NewStudent extends Student{
   
}