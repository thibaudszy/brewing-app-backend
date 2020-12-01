const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const MaltAddition = require("../models/index").maltAddition;
const HopAddition = require("../models").hopAddition;
const MashStep = require("../models").mashStep;
const Library = require("../models").library;
const Brew = require("../models").brew;

const router = new Router();
router.get("/mybrews", authMiddleware, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const myBrews = await Brew.findAll({
      where: { userId },
    });

    res.json(myBrews);
  } catch (e) {
    next(e);
  }
});

router.get("/lastbrew", authMiddleware, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const myBrews = await Brew.findAll({
      where: { userId },
    });
    const sortedBrews = myBrews.sort(function (a, b) {
      return a.createdAt - b.createdAt;
    });
    res.json(sortedBrews[sortedBrews.length - 1]);
  } catch (e) {
    next(e);
  }
});

router.post("/", authMiddleware, async (req, res, next) => {
  const userId = req.user.id;

  try {
    const newBrew = await Brew.create({
      userId,
      recipeId: req.body.recipeId,
      targetVolumeInLiters: req.body.brewLengthInL,
    });

    res.status(200).send(newBrew);
  } catch (e) {
    next(e);
  }
});

router.put("/:brewId", authMiddleware, async (req, res, next) => {
  const requestUserId = req.user.id;
  const brewId = req.params.brewId;

  try {
    const patchedBrew = await Brew.update(
      { [req.body.key]: req.body.updatedValue },
      { where: { id: brewId, userId: requestUserId } }
    );

    res.status(200).send(patchedBrew);
  } catch (e) {
    next(e);
  }
});
module.exports = router;
