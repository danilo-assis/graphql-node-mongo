const { gql } = require("apollo-server-express");

const typeDefs = gql`
  type Post {
    id: ID
    title: String
    description: String
  }

  type Query {
    hello: String

    getAllPost: [Post]
  }
`;

module.exports = typeDefs;
