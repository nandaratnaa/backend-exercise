const express = require("express");

const { Router } = express;

const router = new Router();

//router.get("/", (request, response) => response.send ("welcome to the homepage"));

router.post("/users", async (req, res, next) => {
    try {
      const { email, password, name } = req.body;
      if (!email || !password || !name) {
        res.status(400).send("missing parameters");
      } else {
        const newUser = await User.create({
          email,
          password,
          fullName,
        });
        res.json(newUser);
      }
    } catch (e) {
      next(e);
    }
  });




module.exports = router;

