const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const Library = require("../models").library;
const MaltAddition = require("../models/index").maltAddition;
const HopAddition = require("../models").hopAddition;
const MashStep = require("../models").mashStep;

const router = new Router();

router.get("/library", authMiddleware, async (req, res, next) => {
  const userIdReq = req.user.dataValues["id"];

  try {
    const request = await User.findByPk(userIdReq, {
      include: {
        model: Recipe,
        as: "recipeInLibrary",
        attributes: [
          "id",
          "name",
          "ABV",
          "colorInEBC",
          "imageURL",
          "description",
        ],

        include: {
          model: User,
          as: "author",
          attributes: ["firstName", "lastName"],
        },
      },
    });

    res.json(request.recipeInLibrary);
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
