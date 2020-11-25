const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const MaltAddition = require("../models/index").maltAddition;
const HopAddition = require("../models").hopAddition;
const MashStep = require("../models").mashStep;

const router = new Router();
router.get("/:userId/library", authMiddleware, async (req, res, next) => {
  const userId = req.params.userId;
  try {
    const recipesInUserLibrary = await User.findByPk(userId, {
      include: [{ model: Recipe, as: "recipesInLibrary" }],
    });

    res.json(recipesInUserLibrary);
  } catch (e) {
    next(e);
  }
});

router.get(
  "/:userId/recipes-by-user",
  authMiddleware,
  async (req, res, next) => {
    const userId = req.params.userId;
    try {
      const recipesAuthored = await User.findByPk(userId, {
        include: [{ model: Recipe, as: "author" }],
      });

      res.json(recipesAuthored);
    } catch (e) {
      next(e);
    }
  }
);
module.exports = router;
