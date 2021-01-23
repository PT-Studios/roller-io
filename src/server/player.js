const ObjectClass = require('./object');
const Bullet = require('./bullet');
const Constants = require('../shared/constants');

class Player extends ObjectClass {
  constructor(id, username, x, y) {
    super(id, x, y, Math.random() * 2 * Math.PI, Constants.PLAYER_SPEED);
    this.username = username;
    this.rolls = [];
    this.lastRoll = null;
    this.bg = null;

    //TODO: REMOVE BELOW
    this.hp = Constants.PLAYER_MAX_HP;
    this.fireCooldown = 0;
    this.score = 0;
  }

  // Returns a newly created bullet, or null.
  update(dt) {
    super.update(dt);
    
    this.x = Math.max(0, Math.min(Constants.MAP_SIZE, this.x));
    this.y = Math.max(0, Math.min(Constants.MAP_SIZE, this.y));

    return null;
  }

  takeBulletDamage() {
    this.hp -= Constants.BULLET_DAMAGE;
  }

  onDealtDamage() {
    this.score += Constants.SCORE_BULLET_HIT;
  }

  setRoll(roll) {
    this.rolls.push(roll);
    this.lastRoll = Date.now();
  }

  setBackground(bg) {
    this.bg = bg;
  }

  serializeForUpdate() {
    return {
      ...(super.serializeForUpdate()),
      bg: this.bg,
      direction: this.direction,
      hp: this.hp,
      lastRoll: this.lastRoll,
      rolls: this.rolls,
    };
  }
}

module.exports = Player;
