const MissionCommander = require('./../app/missionCommander')

describe("1) Create a mission commander objet", () => {
    test('Caso de prueba 1', () => {
        const myMissionCommander = new MissionCommander('ProgramerGuy')
        expect(myMissionCommander.name).toBe('ProgramerGuy');
    })
})