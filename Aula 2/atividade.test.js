const StringManipulations = require('./atividade1')

describe('Class StringManipulations - findFirstMatch', () => {
    it('should return the firt substring that maches', () => {
        const stringM = new StringManipulations("Banana split")
        const subStringTest = "an"

        const result = stringM.findFirstMatch(subStringTest)
        expect(result).toBe(subStringTest)
    })

    it('should not return the firt substring that maches', () => {
        const stringM = new StringManipulations("Banana split")
        const subStringTest = "test"

        const result = stringM.findFirstMatch(subStringTest)
        expect(result).toBeNull()
    })
})

describe('Class StringManipulations - findLastMatch', () => {

    it('should return the last substring that maches', () => {
        const stringM = new StringManipulations("Banana split")
        const subStringTest = "an"

        const result = stringM.findLastMatch(subStringTest)
        expect(result).toBe(subStringTest)
    })

    it('should not return the last substring that maches', () => {
        const stringM = new StringManipulations("Banana split")
        const subStringTest = "ok"

        const result = stringM.findLastMatch(subStringTest)
        expect(result).toBeNull()
    })
})

describe('Class StringManipulations - substringBetweenMatches', () => {

    it('should return the substring between', () => {
        const stringM = new StringManipulations("Banana split")
        const subString1 = "an"
        const subString2 = "it"
        const expected = "ana spl"

        const result = stringM.substringBetweenMatches(subString1, subString2)
        expect(result).toBe(expected)
    })

    it('should return the substring between - 2', () => {
        const stringM = new StringManipulations("Banana split")
        const subString1 = "B"
        const subString2 = "ana"
        const expected = "an"

        const result = stringM.substringBetweenMatches(subString1, subString2)
        expect(result).toBe(expected)
    })
})


describe('Class StringManipulations - both_ends', () => {

    it('should return the substring both ends less than 2', () => {
        const stringM = new StringManipulations("a")
        const expected = ""

        const result = stringM.both_ends()
        expect(result).toBe(expected)
    })

    it('should return the substring both ends with 2 chars', () => {
        const stringM = new StringManipulations("oi")
        const expected = "oioi"

        const result = stringM.both_ends()
        expect(result).toBe(expected)
    })

    it('should return the substring both ends', () => {
        const stringM = new StringManipulations("Morango")
        const expected = "Mogo"

        const result = stringM.both_ends()
        expect(result).toBe(expected)
    })
})

describe('Class StringManipulations - fix_start', () => {

    it('should return the masked string', () => {
        const stringM = new StringManipulations("")
        const str1 = "Arara"
        const expected = "Ar*r*"

        const result = stringM.fix_start(str1)
        expect(result).toBe(expected)
    })

    it('should return the original string', () => {
        const stringM = new StringManipulations("")
        const str1 = "Passaro"
        const expected = "Passaro"

        const result = stringM.fix_start(str1)
        expect(result).toBe(expected)
    })
})