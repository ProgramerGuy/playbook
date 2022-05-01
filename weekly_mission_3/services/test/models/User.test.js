const User = require('./../../app/models/User')

describe("Unit test for User object", () => {
    test('Create an User Object', () => {
        const user = new User(1, "raulggg", "Raul", "Bio")
        
        expect(user.username).toBe("raulggg")
        expect(user.name).toBe("Raul")
        expect(user.bio).toBe("Bio")
    })
})