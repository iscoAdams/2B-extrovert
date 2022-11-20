import "dotenv/config";
import express from "express";
import { sequelize } from "./DBconfig";
import registerRoute from "./routes/registerRoute";
import loginRoute from "./routes/loginRoute";
import notfound from "./middlewares/notfound";
const app = express();
app.use(express.json());
const port = 8000;
/* (async () => {
  try {
    await sequelize.sync()
  } catch (e) {
    console.error(e)
  }
})() */

//connect to database
try {
  sequelize.authenticate();
  console.log("Connection has been established successfully.");
} catch (error) {
  console.error("Unable to connect to the database:", error);
}

app.get("/", (req, res) => {
  res.send(
    "<h1 style = color:BurlyWood;font-family:verdana;text-align:center>welcome abroad🚀</h1>"
  );
});

app.use("/api/v1", registerRoute);
app.use("/api/v1", loginRoute);

app.use(notfound);

app.listen(port, () => {
  return console.log(`Express is listening at http://localhost:${port}`);
});
