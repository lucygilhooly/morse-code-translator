import { translateToMorse } from "./translator";

describe('Testing translateToMorse', () => {
  it("a should translate to be *-", ()=> {
    // Arrange
      let string
    // Act
      string = 'a';
      let result = translateToMorse(string)
    // Assert
    expect(result).toBe('*-');
  })

 })

 describe('Testing translateToMorse', () => {
    it("hello should translate to be .... . .-.. .-.. ---", () => {
        let string = 'hello'
        let result = translateToMorse(string)
        expect(result).toBe('.... . .-.. .-.. ---');
    })
 })
 

 //what should translateToMorse function actuall be able to do?

 // - recieve letters and translate those letters into morse code
 // - take into consideration captial letters - these also need to translate to morse code
 // - take into consideration spaces between words and translate these accordingly 
 // - numbers!!
 // - symbols??
 // - extension - other languages available other than english