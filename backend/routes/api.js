const express = require("express");
const router = express.Router();
const authRouter = require("./auth");

router.use("/auth", authRouter);

router.get("/", (req, res) => {
  res.json({
    message: "Hello World!",
  });
});

module.exports = router;
