const Constants = require('../shared/constants');
const backgroundJSON = require('../../public/json/backgrounds.json');

class Background {
  constructor() {
    this.getRandomBG();
  }

  update(dt) {
    return null;
  }

  getRandomBG() {
    const keys = Object.keys(backgroundJSON['Backgrounds']);
    const randIndex = Math.floor(Math.random() * keys.length) - 1;
    const randKey = keys[randIndex];
    const bg = backgroundJSON['Backgrounds'][randKey];

    this.name = bg.Name;
    this.text = bg.Text;
    this.possessions = bg.Possessions;
    this.skills = bg.Skills;
    this.special = bg.Special;
    this.source = bg.Source;
  }

  serializeForUpdate() {
    return {
      name: this.name,
      text: this.text,
      possessions: this.possessions,
      skills: this.skills,
      special: this.special,
      source: this.source,
    };
  }
}

module.exports = Background;
