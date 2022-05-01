const User = require('./../../app/models/User')

describe("Unit test for User object", () => {
    test('Create an User Object', () => {
        const user = new User(1, "raulggg", "Raul", "Bio", "10/05/2022", "10/05/2022")

        expect(user.id).toBe(1)
        expect(user.username).toBe("raulggg")
        expect(user.name).toBe("Raul")
        expect(user.bio).toBe("Bio")
        expect(user.dataCreated).toBe("10/05/2022")
        expect(user.lastUpdated).toBe("10/05/2022")
    })
})