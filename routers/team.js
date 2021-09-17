const express = require("express");
const { Router } = express;
const router = new Router();
const Teams = require("../models").team;
const player = require("../models").player;
const authMiddleware = require("../auth/middleware");



//GET all teams `localhost:4000/teams`
router.get("/teams", authMiddleware, async (request, response, next) => {
try {
    console.log("Teams are here", request.team);
    const teams = await Teams.findAll();
    response.send(teams);
} catch (e) {
    console.log(e.message);
}
});


// PUT update number of titles of a specific team `localhost:4000/team/:id`

router.put("/team/:id", authMiddleware, async (request, response, next) => {
    try {
        const titles = await Teams.findByPk(teams.teamId);
        response.send(titles);
    } catch (e) {
        console.log(e.message);
    }
});

// GET a specific team, including all its players `localhost:4000/team/:id`

router.get("/team/:id", authMiddleware, async (request, response, next) => {
    try {
        const oneTeam = await TodoList.findByPk({
            include: [{ model: player }],
          }); 
          const parsedPlayers = oneTeam.map(u => u.toJSON());
          console.log(parsedPlayers);
    } catch (e) {
        console.log(e.message);
    }
});
module.exports = router;
