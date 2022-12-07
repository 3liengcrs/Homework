class Pirate {
    constructor(name,weigth,age){
        this.name = name;
        this.weigth = weigth;
        this.age = age;

    }
}
let jollyRoger = [new Pirate("One" , 180, 20),new Pirate("Two" , 150 , 21), new Pirate("Three" , 145 , 40)];
let blackPrearl= [new Pirate("One2" , 220, 10),new Pirate("Two2" , 50 , 11), new Pirate("Three2" , 225 , 10)];
for (i=0; i<jollyRoger.length; i++){
    console.log(jollyRoger[i]);
}