const Post = require("./models/Post.model");

const resolvers = {
  Query: {
    hello: () => {
      return "hello World";
    },

    getAllPost: async () => {
      const posts = await Post.find();
      return await Posts.find();
    },
  },
};

module.exports = resolvers;
