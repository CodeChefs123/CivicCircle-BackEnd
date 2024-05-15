import express from "express";
import bodyParser from "body-parser";
import dotenv from "dotenv";
import cors from "cors";
import PORT from "./config/app.js";
import authRouter from "./routes/home/auth/AuthRoutes.js";
import orgAuthRouter from "./routes/home/orgAuth/OrgAuthRoutes.js";

const app = express();

app.use(
  cors({
    origin: "*",
  })
);

dotenv.config();
app.use(bodyParser.json());

app.get("/", (_, res) => {
  res.send("Hello World!");
});

app.use((err, _, res, __) => {
  console.error(err.stack);
  res.status(500).send("Internal Server Error");
});

app.use("/auth", authRouter);
app.use("/auth/org", orgAuthRouter);
// Start the server
const server = app.listen(PORT, () => {
  const host = server.address().address;
  const port = server.address().port;
  console.log(`App listening at http://${host}:${port}`);
});
