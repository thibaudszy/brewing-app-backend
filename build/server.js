"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var graphql = require("graphql").graphql;
var graphqlHTTP = require("express-graphql").graphqlHTTP;
var _a = require("graphql"), GraphQLSchema = _a.GraphQLSchema, GraphQLObjectType = _a.GraphQLObjectType, GraphQLString = _a.GraphQLString;
var app = express();
var PORT = 4000;
// import orderRouter from "./routers/order";
// import productRouter from "./routers/product";
var cors = require("cors");
var schema = new GraphQLSchema({
    query: new GraphQLObjectType({
        name: "HelloWorld",
        fields: function () { return ({
            message: { type: GraphQLString, resolve: function () { return "hello brewers"; } },
        }); },
    }),
});
app.use(cors());
app.use(express.json());
app.use("/graphql", graphqlHTTP({
    schema: schema,
    graphiql: true,
}));
// app.use("/orders", orderRouter);
// app.use("/products", productRouter);
app.listen(PORT, function () { return console.log("server up and listening"); });
