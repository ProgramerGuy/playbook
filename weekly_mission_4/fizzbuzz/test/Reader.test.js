const Reader = require("./../lib/utils/Reader")

describe("Unit test for Reader class ", () => {
    test('1) read json file and return the content', () => {
        const explorers = Reader.readJsonFile("./../explorers.json")

        expect(explorers).not.toBeUndefined()
    })
})