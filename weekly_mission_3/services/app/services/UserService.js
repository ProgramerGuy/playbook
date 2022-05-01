const User = require('./../models/User')

class UserService {
    static create(id, username, name) {
        return new User(id, username, name, "Bio")
    }

    static getInfo(user) {
        var data = [];
        for(var key in user){
            data.push(user[key]);
        }
        return data;
    }

    static updateUserUsername(user, username) {
        user.username = username
    }

    static getAllUsernames(users) {
        var data = [];
        for(var key in users){
            data.push(users[key].username);
        }
        return data;
    }
}

module.exports = UserService