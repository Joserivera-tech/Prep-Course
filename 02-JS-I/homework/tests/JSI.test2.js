const {
    tienenMismaLongitu,
} = require('../prueba.js');
describe('tienenMismaLongitud(str1, str2)', function() {
    it('Deberia devolver true si los strings tienen la misma longitud y sino false', function() {
      expect(tienenMismaLongitud('hi', 'there')).toBe(false);
      expect(tienenMismaLongitud('javascript', 'bumfuzzled')).toBe(true);
    });
  });