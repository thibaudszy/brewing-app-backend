const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const MaltAddition = require("../models/index").maltAddition;
const HopAddition = require("../models").hopAddition;
const MashStep = require("../models").mashStep;
const Library = require("../models").library;

const router = new Router();
router.get("/", authMiddleware, async (req, res, next) => {
  try {
    const allRecipes = await Recipe.findAll({
      include: {
        model: User,
        as: "author",
        attributes: ["id", "firstName", "lastName"],
      },
    });

    res.json(allRecipes);
  } catch (e) {
    next(e);
  }
});

router.get("/not-in-library", authMiddleware, async (req, res, next) => {
  const requestUserId = req.user.id;

  try {
    const allRecipes = await Recipe.findAll({
      include: [
        {
          model: User,
          as: "recipeInLibrary",
          attributes: ["id"],
        },
        {
          model: User,
          as: "author",
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    const recipesNotInUserLibrary = allRecipes.filter(
      ({ recipeInLibrary }) =>
        //block returns true if user does not have the recipe in his library
        !recipeInLibrary
          .map(({ libraries }) => libraries.userId)
          .includes(requestUserId)
    );
    res.json(recipesNotInUserLibrary);
  } catch (e) {
    next(e);
  }
});

router.get("/recipe/:recipeId", authMiddleware, async (req, res, next) => {
  const recipeId = req.params.recipeId;
  try {
    const recipe = await Recipe.findByPk(recipeId, {
      include: [
        { model: MaltAddition },
        { model: HopAddition },
        { model: MashStep },
        {
          model: User,
          as: "author",
          attributes: ["id", "firstName", "lastName"],
        },
      ],
    });

    res.json(recipe);
  } catch (e) {
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const authorId = req.user.id;
  console.log("req.body", req.body);
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
    mashSteps,
    maltAdditions,
    hopAdditions,
    comments,
  } = req.body.recipeToPost;
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
    const recipeId = recipe.id;
    Promise.all(
      maltAdditions.map(async (maltAddition) => {
        const response = await MaltAddition.create({
          recipeId,
          ...maltAddition,
        });
      }),
      hopAdditions.map(async (hopAddition) => {
        const response = await HopAddition.create({
          recipeId,
          ...hopAddition,
        });
      }),
      mashSteps.map(async (mashStep, index) => {
        const response = await MashStep.create({
          recipeId,
          stepNo: index,
          ...mashStep,
        });
      })
    );
    res
      .status(200)
      .send({ message: "Recipe added to the library", addedRecipe: recipe });
  } catch (e) {
    next(e);
  }
});

module.exports = router;
