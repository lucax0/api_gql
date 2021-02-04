const { ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    #Criar scalar "tipos"
    scalar Date

    #Ponto de entrada da api
    type Query {
        ola: String!        
        adeus: String!
        horaCerta: Date
    }


`

const resolvers = {

    Query: {
        ola() {
            return 'string de ola!'
        },
        adeus() {
            return 'string de adeus!'
        },
        horaCerta() {
            return new Date
        }
    }
}

const server = new ApolloServer({
    typeDefs,
    resolvers
})

server.listen(4000).then(({ url }) =>{
    console.log(`Executando em ${url}`)
})