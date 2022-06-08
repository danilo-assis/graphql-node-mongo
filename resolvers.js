const Post = require("./models/Post.model");

const resolvers = {
  Query: {
    hello: () => {
      return "hello World";
    },

    getAllPost: async () => {
      return await Post.find();
    },
  },
};

module.exports = resolvers;
