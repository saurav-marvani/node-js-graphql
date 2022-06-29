// Import packages
const express = require('express')
const { ApolloServer, gql } = require('apollo-server-express')
const typeDefs = require('./typeDefs.js')
const resolvers = require('./resolvers')
const mongoose = require('mongoose')

// App Constants
const APP_PORT = process.env.APP_PORT || 4000


// ApolloServer
async function startServer() {
  const app = express()
  const apolloServer = new ApolloServer({
    typeDefs,
    resolvers,
  })

  await apolloServer.start()

  apolloServer.applyMiddleware({app: app})

  app.use((req, res) => {
    res.send('Hello from Express ApolloServer')
  })


  await mongoose.connect(process.env.APP_PORT, {
    useUnifiedTopology: true,
    useNewUrlParser: true,
  })
  console.log('MongoDB Connected')

  app.listen(4000, () => {
    console.log('Server is running on PORT 4000');
  })
   
}

// Server
startServer()