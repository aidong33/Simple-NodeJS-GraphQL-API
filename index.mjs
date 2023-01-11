import 'colors'
import { ApolloServer } from 'apollo-server'
//schema
import {typeDefs} from './schema.mjs'
//resolver
import {resolvers} from './resolver.mjs'


const API_PORT = 4000

const server = new ApolloServer({
    typeDefs,
    resolvers
})


server.listen(API_PORT || 4000).then(({url})=>{
    console.log(`Server is ready at : `.green + `${url}`.yellow)
    console.log(`Query at:`.magenta + 'http:// studio.apollographql.com/dev'.yellow)
}).catch(error =>{
    console.log(error)
})
