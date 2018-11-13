let friends = require("../data/friends.js");

module.exports = function(app) {

    app.post("/api/friends", function(req, res) {
        let newPerson = req.body;
        newPerson.answers.forEach((value, index) => { newPerson.answers[index] = parseInt(value); });
        const matches = findClosestMatches(newPerson);
        friends.push(newPerson);
        res.send(matches);
    });

    app.get("/api/friends", function(req, res) {
        res.send(friends);
    });

}

// Finds friend with lowest total score difference. Multiple friends are only returned if there is a tie.
function findClosestMatches(person) {
    let matches = [];
    differenceToBeat = 41; //(highest possible + 1)
    friends.forEach(friend => {
        let difference = 0;
        friend.answers.forEach((value, index) => {
            difference += value > person.answers[index] ? value - person.answers[index] : person.answers[index] - value;
        });
        if (difference < differenceToBeat) {
            matches = [friend];
            differenceToBeat = difference;
        }
        else if (difference === differenceToBeat) matches.push(friend);
    });
    return {
        matches,
        difference: differenceToBeat
    };
}