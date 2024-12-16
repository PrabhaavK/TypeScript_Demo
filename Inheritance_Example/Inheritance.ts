class Shape {
    sides: number;
    constructor(sides:number)
    {
        this.sides = sides;
    }
}

class Rectangle extends Shape
{
    Display():void{
        console.log("Sides"+this.sides);
    }
}

let rect = new Rectangle(4);
rect.Display();