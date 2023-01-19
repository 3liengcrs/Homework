
window.addEventListener("load", (e) => {


const start_game = () => {
  alert('Welcome to The Game!');
  const response = prompt(`Enter 'p' to play or 'e' to exit.`);
  if (response.toLowerCase() === 'e') {
    alert(`See You Next Time!.\n\n  If you chose to retreat at any time just leave the page. But know that choice has doomed Earth!`)
  } else if (response.toLowerCase() === 'p') {
    alert('Earth has been attacked by the aliens!\n\nYou are the captain of the Earth Ship.\n\nYour mission is to destroy every last alien ship.')
    lockAndLoad()
  } else {
    alert(`I don't understand your response.\n\nTry again next time!`)
  }
}

//  Hero Ship class
class PlayerShip {
    constructor() {
      this.hull = 20;
      this.firepower = 5;
      this.accuracy = .7
    }
  
    attack() {
      let rand = Math.random()
      if (rand < this.accuracy) {
        alien_ship.hull -= this.firepower;
        alert(`YOU JUST TAGGED THEM! \n\n LET'S LOAD UP NOW...`)
      } else {
        alert(`YOU GOT TAGGED! \n\n LET'S LOAD UP NOW...`)
      }
    }
  }
  
  const hero_ship = new PlayerShip()
  
  
  // Alien Ship class
  class Alien {
    constructor() {
      this.hull = Math.floor(Math.random() * (6 - 3) + 3)
      this.firepower = Math.floor(Math.random() * (4 - 2) + 2)
      this.accuracy = Math.random() * (.8 - .6) + .6
    }
    attack() {
      let randnum = Math.random()
      if (randnum < this.accuracy) {
        hero_ship.hull -= this.firepower;
        alert(`YOU'VE BEEN HIT!`)
      } else {
        alert(`NOT EVEN A SCRATCH!`)
      }
    }
  }
  
  const alien_ship = new Alien()
  
  
  // Initiate Game

  
  
  // Check Status
  const staTus = () => {
    alert(`Your Status >>> HULL: ${hero_ship.hull} | FIREPOWER: ${hero_ship.firepower} | ACCURACY: ${hero_ship.accuracy*100}%\n\nAlien#${alien_ship_Count} Status >>> HULL: ${alien_ship.hull} | FIREPOWER: ${alien_ship.firepower} | ACCURACY: ${Math.floor(alien_ship.accuracy*100)}%`)
    
  }
  
  // let alienShip = document.getElementsByClassName("");


  // Get Ready to Battle
  let alien_ship_Count = 6;
  
  const lockAndLoad = () => {
  
    staTus()
  
    while (alien_ship_Count > 0) {
      if (alien_ship.hull < 1) {
        alien_ship_Count--
      }
  
      if (alien_ship_Count > 0 && hero_ship.hull > 0) {
        alien_ship.hull = Math.floor(Math.random() * (7 - 3) + 3)
        alien_ship.firepower = Math.floor(Math.random() * (5 - 2) + 2)
        alien_ship.accuracy = Math.random() * (.8 - .6) + .6
      } else if (alien_ship_Count < 1 && hero_ship.hull < 1) {
        return alert(`Game Over!`)
      } else if (alien_ship_Count < 1 && hero_ship.hull > 0) {
        return alert(`Alien ship is destroyed!!! you have saved the Universe from complete destruction!!`)
      } else {
        return alert(`They attack us, You die!! Game Over!!`)
       
      }
  
      const response = prompt(`Enter 'a' to attack or 'q' to retreat`)
      if (response.toLowerCase() === 'q') {
        alert(`YOU LOSE!`)
        hero_ship.hull = 0;
        hero_ship.firepower = 0;
        hero_ship.accuracy = 0;
        staTus()
      } else if (response.toLowerCase() === 'a') {
        engage()
      } else {
        alert(`I don't understand your response.\n\n Try again!`)
      }
  
    }
  }

  const removeNodesFromList = () => {
  //   // const alienShip = document.getElementsByClassName('image');
  const alienShip = document.querySelector('.image');
  const lastLi = alienShip.lastElementChild;
    
    
    if (alien_ship.hull < 1){
      alienShip.removeChild(lastLi);
      console.log(lastLi)

    }
    
  };
  
  // Battle
  const engage = () => {
    hero_ship.attack();
    alien_ship.attack();
    removeNodesFromList()
    lockAndLoad();

  };
  setTimeout(start_game,1000);
  start_game(); // Initialize

});




// let listOfCity = document.querySelector("#past-races");
// document.querySelectorAll('#past-races > li').forEach((item) =>{
//   if (item.textContent.trim() === "Chicago"){
//     document.querySelector("#past-races").removeChild(item);
//   }
// })