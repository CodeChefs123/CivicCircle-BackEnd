import { Router } from "express";
import { API_KEY, APP_ID } from "../config/mindstudio.js";

const chatRouter = Router();
chatRouter.post("/", async (req, res) => {
  try {
    console.log(req.body.message);
    const response = await fetch("https://api.youai.ai/developer/v1/apps/run", {
      method: "POST",
      body: JSON.stringify({
        appId: APP_ID,
        variables: {
          name: req.body.name,
          message: req.body.message,
        },
        workflow: "Main.flow",
      }),
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${API_KEY}`,
      },
    });
    const data = await response.json();
    console.log(data.threadId);
    console.log(data.thread);
    res.status(200).send(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Error starting chat");
  }
});
export default chatRouter;
