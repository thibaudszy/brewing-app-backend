const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const MaltAddition = require("../models/index").maltAddition;
const HopAddition = require("../models").hopAddition;
const MashStep = require("../models").mashStep;
const UserToRecipe = require("../models").userToRecipe;

const router = new Router();
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const allRecipes = await Recipe.findAll({
      include: [
        { model: MaltAddition },
        { model: HopAddition },
        { model: MashStep },
      ],
    });

    res.json(allRecipes);
  } catch (e) {
    next(e);
  }
});

router.get("/:recipeId", authMiddleware, async (req, res, next) => {
  const recipeId = req.params.recipeId;
  try {
    const recipe = await Recipe.findByPk(recipeId, {
      include: [
        { model: MaltAddition },
        { model: HopAddition },
        { model: MashStep },
      ],
    });

    res.json(recipe);
  } catch (e) {
    next(e);
  }
});
router.post("/", authMiddleware, async (req, res, next) => {
  const authorId = req.user.id;
  const {
    name,
    imageURL,
    description,
    ABV,
    IBU,
    OGinPlato,
    FGinPlato,
    DesiredCarbonationInGramsPerLiter,
    colorInEBC,
    LiquorToGristRatio,
    yeastStrain,
    PitchRateInGramsperLiter,
    BoilDurationInMin,
    FermentationTemperature,
    comments,
  } = req.body;
  try {
    const recipe = await Recipe.create({
      name,
      authorId,
      imageURL,
      description,
      ABV,
      IBU,
      OGinPlato,
      FGinPlato,
      DesiredCarbonationInGramsPerLiter,
      colorInEBC,
      LiquorToGristRatio,
      yeastStrain,
      PitchRateInGramsperLiter,
      BoilDurationInMin,
      FermentationTemperature,
      comments,
    });

    res.status(200).send("Recipe added to the library");
  } catch (e) {
    next(e);
  }
});

module.exports = router;
