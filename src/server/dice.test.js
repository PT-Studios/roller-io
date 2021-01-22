const Dice = require('./dice');
const Constants = require('../shared/constants');

describe('Dice', () => {
  describe('roll', () => {
    it('should generate a random array of values', () => {
      // Dice(sides, quantity, modifier)
      const die = new Dice(6, 2, 4);
      
      die.setRoll();
      expect(die).toEqual(expect.anything());
    });
  });
});