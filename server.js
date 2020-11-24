const express = require("express");
const { graphql } = require("graphql");
const { graphqlHTTP } = require("express-graphql");
const { GraphQLSchema, GraphQLObjectType, GraphQLString } = require("graphql");
const app = express();
const PORT = 4000;
// import orderRouter from "./routers/order";
// import productRouter from "./routers/product";
const cors = require("cors");

const schema = new GraphQLSchema({
  query: new GraphQLObjectType({
    name: "HelloWorld",
    fields: () => ({
      message: { type: GraphQLString, resolve: () => "hello brewers" },
    }),
  }),
});

app.use(cors());
app.use(express.json());
app.use(
  "/graphql",
  graphqlHTTP({
    schema: schema,

    graphiql: true,
  })
);

// app.use("/orders", orderRouter);
// app.use("/products", productRouter);

app.listen(PORT, () => console.log("server up and listening"));
