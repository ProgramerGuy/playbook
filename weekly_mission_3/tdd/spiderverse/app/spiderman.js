class Spiderman {
    constructor(name, age, actorName, moviesCount, studios) {
        this.name = name;
        this.age = age;
        this.actorName = actorName;
        this.moviesCount = moviesCount;
        this.studios = studios;
    }

    getInfo() {
        return `Hey, I'm ${this.actorName} from ${this.studios} Studio`
    }
}

module.exports = Spiderman;