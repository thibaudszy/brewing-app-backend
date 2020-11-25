const express = require("express");

const app = express();
const PORT = 4000;
// import orderRouter from "./routers/order";
// import productRouter from "./routers/product";
const cors = require("cors");

app.use(cors());
app.use(express.json());

// app.use("/orders", orderRouter);
// app.use("/products", productRouter);

app.listen(PORT, () => console.log("server up and listening"));
