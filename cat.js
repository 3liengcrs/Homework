class cat{
    constructor( name, color, age){
        this.name = name;
        this.color = color;
        this.age = age;

    }
   marning() {
    
       console.log("myoo myooo");
     }
    goOut(){
        console.log("I'm out");
    }
    afterFive(){
        console.log("go To sleep");
    }
    callThemAll(){
this.marning();
this.goOut();
this.afterFive();
this.marning();
this.goOut();
this.afterFive();


    }
    
    

}
let  catOne = new cat("noo","black",2,);
let catTwo = new cat("novoo", "Yellow", 3)

console.log(catOne);
console.log(catTwo);
catOne.callThemAll();


