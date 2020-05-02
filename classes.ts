class Point{

    constructor(x?:number,y?:number){ //the ?? make the params optional
        this.x=x;
        this.y=y;
    }
    draw(){
        //..
        console.log("X is "+ this.x +"Y is "+ this.y);
        
    }

}

// to make use of the method "draw",

let new_point = new Point(1,2);

new_point.draw(); //X is 1Y is 2