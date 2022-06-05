const express = require("express");
const { apolloServer, gql, ApolloServer } = require("apollo-server-express");
const { response } = require("express");
const typeDefs = require("./typeDefs");
const resolvers = require("./resolvers");

async function startServer() {
  const app = express();
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  });

  await apolloServer.start();

  apolloServer.applyMiddleware({ app, path: "/playground" });

  app.use((req, res) => {
    res.send("Hello from express apollo server");
  });

  app.listen(4000, () => console.log("Server is running on port 4000"));
}

startServer();
