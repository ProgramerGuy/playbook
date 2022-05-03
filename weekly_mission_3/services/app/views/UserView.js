const User = require("../models/User");
const UserService = require("./../services/UserService")

class UserView {

    constructor() {

    }

    static createUser(payload) {
        let result = {error: null}
        if (payload === null) {
            result.error = "payload no existente"
            return result;
        }

        const nullObjects = Object.values(payload).some(o => o === null);

        if (nullObjects){
            result.error = "necesitan tener un valor valido"
            return result;
        }

        const userClass = {id:null, username: null, name: null}
        const missingProperty = Object.keys(userClass).every((key) => payload[key]  !== undefined)

        if (!missingProperty){
            result.error = "necesitan tener un valor valido"
            return result;
        }

        const newUser = UserService.create(payload.id, payload.username, payload.name);
        return newUser;
    }
}

module.exports = UserView