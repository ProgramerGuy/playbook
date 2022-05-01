const UserService = require('./../../app/services/UserService')

describe("Test for UserService", () => {
    test("1. Create a new user using the UserService", () => {
        const user = UserService.create(1,"raulGomez", "Raul")

        expect(user.username).toBe("raulGomez")
        expect(user.id).toBe(1)
        expect(user.name).toBe("Raul")
        expect(user.bio).not.toBeUndefined()
    })

    test("2. Get all user data in a list", () => {
        const user = UserService.create(1,"raulGomez", "Raul")
        const userInfoInList = UserService.getInfo(user)

        expect(userInfoInList[0]).toBe(1)
        expect(userInfoInList[1]).toBe("raulGomez")
        expect(userInfoInList[2]).toBe("Raul")
        expect(userInfoInList[3]).toBe("Bio")
    })

    test("3. Update username", () => {
        const user = UserService.create(1,"raulGomez", "Raul")
        UserService.updateUserUsername(user, "pedroMar")

        expect(user.username).toBe("pedroMar")
    })

    test("4. Given a list of users give me the list of usernames", () => {
        const user1 = UserService.create(1,"raulGomez", "Raul")
        const user2 = UserService.create(1,"mariaB", "Maria")
        const user3 = UserService.create(1,"pedroBel", "Pedro")
        const usernames = UserService.getAllUsernames([user1, user2, user3])

        expect(usernames).toCaontain("raulGomez")
        expect(usernames).toCaontain("mariaB")
        expect(usernames).toCaontain("pedroBel")
    })
})