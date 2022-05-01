const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1,"raulGomez", "Raul")
        expect(user.username).toBe("raulGomez")
        expect(user.id).toBe(1)
        expect(user.name).toBe("Raul")
        expect(user.bio).not.toBeUndefined()
    })
})