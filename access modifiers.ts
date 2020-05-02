class Pointer{
    constructor(private x?:number,private y:number){
    }

    // this method can show the points of an object
    draw(){
        console.log(`x is ${this.x}. y is ${this.y}`);
    }

    //to display individual private elements
    get Y(){
        return this.y;
    }

    // setting the value for our private x and y

    set x(value){
        if(value<0){
            throw new Error("Value must be greater than 0.");

            this.x=value;
        }
    }
}

//creating an instance

let new_point= new Pointer(1,2); // a point with x=1 and y=2

// to print all points
new_point.draw();


new_point.x=1;
new_point.y=2;