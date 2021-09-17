const { Router } = require("express");
const player = require("../models/player");
const router = new Router();
const authMiddleware = require("../auth/middleware");


//POST create a new player `localhost:4000/player`

router.post("/player", authMiddleware, async (request, response, next) => {

try {
const { name, age } = req.body;
if (!name || !age) {
    response.status(400).send("Missing parameters");
} else {
const newPlayer = await player.create ({ 
    name, 
    age
});
response.send(newPlayer);
}
} catch (e) {
console.log(e.message);
}
});



module.exports = router;