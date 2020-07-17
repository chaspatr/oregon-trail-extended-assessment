class Traveler {
  //class for the player character (also known as PC)
  constructor(name) {
    this.name = name;
    this.food = 1;
    this.isHealthy = true;
  }
  hunt() {
    //when this function runs it adds 2 to the food attribute
    this.food += 2;
  }

  eat() {
    //when this function runs, if there is any food, it lowers the value by 1, if there is no food then the isHealthy is no longer true
    if (this.food > 0) {
      this.food -= 1;
    } else {
      this.isHealthy = false;
    }
  }
}

class Wagon {
  constructor(capacity) {
    this.capacity = capacity;
    this.passengers = [];
  }
  getAvailableSeatCount() {
    return this.capacity - this.passengers.length;
  }
  join(traveler) {
    if (this.passengers.length < this.capacity) {
      this.passengers.push(traveler);
    }
  }
  shouldQuarantine() {
    if (this.passengers.some((traveler) => traveler.isHealthy === false)) {
      return true;
    } else {
      return false;
    }
  }
  totalFood() {
    let food = this.passengers.map((traveler) => traveler.food);
    return food.reduce((current, next) => current + next);
  }
}

class Doctor extends Traveler {
  constructor(name) {
    super(name);
  }
  heal(traveler) {
    if (traveler.isHealthy === false) traveler.isHealthy = true;
  }
}

class Hunter extends Traveler {
  constructor(name) {
    super(name);
    this.food = 2;
  }
  hunt() {
    this.food += 5;
  }
  eat() {
    if (this.food >= 2) {
      this.food -= 2;
    } else {
      this.food = 0;
      this.isHealthy = false;
    }
  }
  giveFood(traveler, numOfFoodUnits) {
    if (this.food >= numOfFoodUnits) {
      this.food -= numOfFoodUnits;
      traveler.food += numOfFoodUnits;
    }
  }
}
