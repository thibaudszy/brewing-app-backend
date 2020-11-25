const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const maltAddition = require("../models/maltaddition");

const router = new Router();
router.get("/", authMiddleware, async (req, res, next) => {
  if (!req.user) {
    res.status(401).send("Please log-in to see recipes");
    return;
  }
  try {
    const allRecipes = await Recipe.findAll({
      include: { model: maltAddition },
    });
    res.json(allRecipes);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
