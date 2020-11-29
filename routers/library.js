const express = require("express");
const { Router } = express;
const Recipe = require("../models").recipe;
const User = require("../models").user;
const authMiddleware = require("../auth/middleware");
const library = require("../models/library");
const user = require("../models/user");

const Library = require("../models").library;

const router = new Router();

router.post("/", authMiddleware, async (req, res, next) => {
  const userId = req.user.id;
  const recipeId = req.body.recipeId;
  const id = `${userId}${recipeId}`;
  try {
    const dbResponse = await Library.create({
      id,
      userId,
      recipeId,
    });

    res.status(200).send("Recipe added to user's library");
  } catch (e) {
    next(e);
  }
});

router.delete("/:libraryId", authMiddleware, async (req, res, next) => {
  const libraryId = req.params.libraryId;
  try {
    const libraryItemToDelete = await Library.findByPk(libraryId);

    if (!libraryItemToDelete) {
      throw { status: 404, message: "user to recipe relation does not exist" };
    }
    if (req.user.id !== libraryItemToDelete.userId) {
      throw {
        status: 401,
        message:
          "Unauthorizes request. The userId of the request does not match the library item's userId.",
      };
    }

    await libraryItemToDelete.destroy();
    res.json(libraryItemToDelete);
  } catch (e) {
    res.send(e);
    next(e);
  }
});

// router.get("/", authMiddleware, async (req, res, next) => {
//   try {
//     const libraries = await Library.findAll();

//     res.json(libraries);
//   } catch (e) {
//     next(e);
//   }
// });

module.exports = router;
