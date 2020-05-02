interface Point{
    x:number, //interfaces help us to define object arguments
    y:number,
};

let drawPoints=(point:Point)=>{
    ///...
}

drawPoints(
    {
        x:1,
        y:3
    }
);

