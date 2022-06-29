const Post = require('./models/Post.model.js')

// Graph Resolvers
const resolvers = {
  // Query Point
    Query: {
      hello: () => {
        return 'Hello World'
      },
      getAllPosts: async() => {
        return await Post.find()
      },
      getPost: async(_parent, { id }, _context, _info) => {
        return await Post.findById(id)
      }
    },

    // Mutation Point
    Mutation: {
      createPost: async(parent, args, content, info) => {
        const { title, description } = args.post
        const post = new Post({ title, description })
        await post.save()
        return post
      },
      deletePost: async(_parent, { id }, content, info) => {
        await Post.findByIdAndDelete(id)
        return "Ok, Post deleted.."
      },
      updatePost: async(parent, args, context, info) => {
        const { id } = args
        const { title, description } = args.post
        const post = await Post.findByIdAndUpdate(id, { title, description }, { new: true })
        return post
      },
    }
}

module.exports = resolvers