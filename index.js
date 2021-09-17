const express = require("express");
const app = express();
const PORT = 4000;

const teamRouter = require("./routers/team");
const playerRouter = require("./routers/player");
const userRouter = require("./routers/user");

 
//register middleware
app.use(express.json());

//register routers
app.use("/teams", teamRouter);
app.use("/players", playerRouter);
app.use("/users", userRouter);



app.listen(PORT, () => console.log("Hey server running at 4000"));
