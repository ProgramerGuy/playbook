const User = require('./../../app/models/User')

describe("Unit test for User object", () => {
    test('Create an User Object', () => {
        const user = new User(1, "raulggg", "Raul", "Bio")
        user.setUsername = "PedroFuentes"
        expect(user.username).toBe("PedroFuentes")

        user.setBio = "New Bio"
        expect(user.bio).toBe("New Bio")
    })
})