const User = require('./../../app/models/User')

describe("Unit test for User object", () => {
    test('Create an User Object', () => {
        const user = new User(1, "raulggg", "Raul", "Bio")

        expect(user.id).toBe(1)
        expect(user.getUsername).toBe("raulggg")
        expect(user.getBio).toBe("Bio")
        expect(user.getDateCreated).not.toBeUndefined()
        expect(user.getLastUpdated).not.toBeUndefined()
    })
})