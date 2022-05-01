class User {
    constructor(id, username, name, bio, dateCreated, lastUpdated) {
        this.id = id;
        this.username = username;
        this.name = name;
        this.bio = bio;
        this.dataCreated = new Date();
        this.lastUpdated = new Date();
    }
}

module.exports = User;