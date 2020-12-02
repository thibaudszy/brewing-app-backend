const express = require("express");
const corsMiddleware = require("cors");
const authRouter = require("./routers/auth");
const recipesRouter = require("./routers/recipes");
const usersRouter = require("./routers/users");
const LibrariesRouter = require("./routers/library");
const BrewsRouter = require("./routers/brews");

const app = express();
const PORT = process.env.PORT || 4000;
// import orderRouter from "./routers/order";
// import productRouter from "./routers/product";
//const cors = require("cors");

// app.use("/orders", orderRouter);
// app.use("/products", productRouter);

app.listen(PORT, () => console.log("server up and listening"));

const bodyParserMiddleWare = express.json();
app.use(bodyParserMiddleWare);

app.use(corsMiddleware());
app.use(express.json());
app.use("/", authRouter);
app.use("/recipes", recipesRouter);
app.use("/users", usersRouter);
app.use("/libraries", LibrariesRouter);
app.use("/brews", BrewsRouter);
