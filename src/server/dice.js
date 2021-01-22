class Object {
  constructor(username, sides, qty, modifiers) {
    this.username = username;
    this.sides = sides;
    this.qty = qty;
    this.modifiers = modifiers;
    this.max = sides;
    this.min = 1;
    this.result = -1;
    this.indexedResult = [];
    this.rollTime = Date.now();

    this.rollTheDie();
  }

  rollTheDie() {
    let totalArray = [];
    let total = 0;
    for (let i = 0; i < this.qty; i++) {
      let singleRoll = Math.floor(Math.random() * (this.max - this.min + 1)) + this.min;
      totalArray.push(singleRoll);
      total += singleRoll; 
    }
    
    this.result = parseInt(total) + parseInt(this.modifiers);
    this.indexedResult = totalArray
  }

  serializeForUpdate() {
    return {
      sides: this.sides,
      qty: this.qty,
      result: this.result,
      indexedResult: this.indexedResult,
      modifiers: this.modifiers,
      rollTime: this.rollTime,
      username: this.username,
    };
  }
}

module.exports = Object;
