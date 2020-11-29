const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");

const UserToRecipe = require("../models").userToRecipe;

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  const userId = req.user.id;
  const { recipeId } = req.body;
  try {
    const dbResponse = await UserToRecipe.create({
      userId,
      recipeId,
    });

    res.status(200).send("Recipe added to user's library");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
