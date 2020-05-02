let a:number;
let b:string;
let c:boolean;
let d:any;
let e:string[]; //array of strings
let f:number[]=[1,2,3,4];
let g:any[]=["jona",1,2,3,4,"heh",true];


//enums
const colorRed =0;
const colorBlue=1;
const colorGreen=7;

//all these are related to each other and their values can be stored in an enum 

// forexample

enum Color{colorRed,Green,Blue};

let background_color=Color.Blue; //sets it to Blue
