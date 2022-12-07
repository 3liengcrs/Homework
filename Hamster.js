class Hamster {
    constructor(name, owner="", price=15) {
      this.name = name;
      this.owner = owner;
      this.price = price;
  
    }
  
  
    wheelRun() {
      console.log("squeak squeak");
    }
    eatFood() {
      console.log("nibble nibble");
    }
    getPrice() {
      return this.price;
    }
  }
  //
  
  class Person {
    constructor(
      name,
      age = 0,
      height = 0,
      weight = 0,
      mood = 0,
      hamsters = [],
      bankAccount = 0,
    ) {
      this.name = name;
      this.age = age;
      this.height = height;
      this.weight = weight;
      this.mood = mood;
      this.hamsters = hamsters;
      this.bankAccount = bankAccount;
  
    }
    getName() {
      return this.name;
    }
  
    getAge() {
      return this.age;
    }
    getWeight() {
      return this.weight;
    }
    greet() {
      console.log(`Hi. My name is ${this.name}`);
    }
    eat(num) {
   this.weight+= num;
   this.mood+= num;
    }
    exercise(num) {
      this.weight-= num;
    }
    ageUp(num) {
      this.age+= num;
      this.height+= num;
      this.weight+= num;
      this.mood-= num
      this.bankAccount+=10;
    }
    buyHamster(hamster) {
      if (this.bankAccount >= hamster.getPrice()) {
      this.bankAccount -= hamster.getPrice();
      this.hamsters.push(hamster);
      this.mood += 10;
      return `You bought the hamster.`
      } else 
      return`You don't have enough money.`;
    }
    getPrice() {
      
    }
    
  }
  let timmy = new Person('Timmy');
  let gus = new Hamster('Gus');
  console.log(gus);
  gus.owner = 'Timmy';
  console.log(gus.owner);
  timmy.ageUp(5);
  timmy.eat(5);
  timmy.exercise(5);
  console.log(timmy);
  timmy.ageUp(9);
  console.log(timmy);
  console.log(timmy.bankAccount);
  console.log(timmy.buyHamster(gus));
  console.log(timmy.bankAccount);
  console.log(timmy.weight);
  timmy.eat(5);
  console.log(timmy.weight);
  timmy.exercise(2);
  console.log(timmy.weight);
  
  //
  
  class Dinner {
      constructor(appetizer, entree, desert){
          this.appetizer = appetizer;
          this.entree = entree;
          this.desert = desert;
      }
  
  newDinner() {
      return `My dinner for today will be ${this.appetizer}  ${this.entree}  ${this.desert}`
  }
  
  getDesert(){
      return this.desert;
  }
  
  
  }
  const chef1 = new Dinner('CheeseBurger', 'Salad', 'pie');
  console.log(chef1.desert);
  console.log(chef1.newDinner());
  
  class Chef extends Dinner {
    constructor(appetizer, entree, desert, job, favKnife) {
      super(appetizer, entree, desert);
  
      this.job = job;
      this.favKnife = favKnife;
    }
  
    theDinner() {
      return `My dinner for today will be ${this.appetizer}  ${this.entree}  ${this.desert}`;
    }
  }
  const chef2 = new Chef('chicker nuggets', 'salad', 'pudding');
  console.log(chef2);
  const chef3 = new Chef("pizza", "salad", "fruit");
  const chef4 = new Chef("meat loaf", "salad", "candy");
  
  console.log(chef2);
  console.log(chef3);
  console.log(chef4);
  
  console.log(chef2.theDinner());
  console.log(chef3.theDinner());
  console.log(chef4.theDinner());