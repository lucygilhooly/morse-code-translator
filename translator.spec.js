import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it("'a' should translate to be .-", ()=> {
    // Arrange
      let string
    // Act
      string = 'a';
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe('.-');
  })

 })

 describe('Testing translateToMorse', () => {
    it("'hello' should translate to be .... . .-.. .-.. ---", () => {
        let string = 'hello'
        let result = translateToMorse(string)
        expect(result).toBe('.... . .-.. .-.. ---');
    })
 })

 describe('Testing translateToMorse', () => {
    it("' ' translate to be / ", () => {
        let string = ' '
        let result = translateToMorse(string)
        expect(result).toBe('/');
    })
 })

 describe('Testing translateToMorse', () => {
    it("'hello i am lucy' should translate to be .... . .-.. .-.. --- / .. / .- -- / .-.. ..- -.-. -.--", () => {
        let string = 'hello i am lucy'
        let result = translateToMorse(string)
        expect(result).toBe('.... . .-.. .-.. --- / .. / .- -- / .-.. ..- -.-. -.--');
    })
 })

 describe('Testing translateToMorse', () => {
    it("0 1 2 3 4 5 6 7 8 9 should translate to be ----- / .---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----.", () => {
        let string = '0 1 2 3 4 5 6 7 8 9'
        let result = translateToMorse(string)
        expect(result).toBe('----- / .---- / ..--- / ...-- / ....- / ..... / -.... / --... / ---.. / ----.');
    })
 })

 describe('Testing translateToMorse', () => {
    it("'10' should translate to be .---- -----", () => {
        let string = '10'
        let result = translateToMorse(string)
        expect(result).toBe('.---- -----');
    })
 })

 describe('Testing translateToMorse', () => {
    it(". , ? ; : - / '  should translate to be ._._._ / __..__ / ..__.. / _._._. / ___... / _...._ / _.._. / .____.", () => {
        let string = ". , ? ; : - / '"
        let result = translateToMorse(string)
        expect(result).toBe('._._._ / __..__ / ..__.. / _._._. / ___... / _...._ / _.._. / .____.');
    })
 })





 //what should translateToMorse function actually be able to do?

 // - recieve letters and translate those letters into morse code
 // - take into consideration captial letters - these also need to translate to morse code
 // - take into consideration spaces between words and translate these accordingly 
 // - numbers!!
 // - symbols??
 // - extension - other languages available other than english