const { ApolloServer, gql} = require('apollo-server')

const typeDefs = gql`
    #Criar scalar "tipos"
    scalar Date

    type Usuario{
        id: ID
        nome: String!
        email: String!
        idade: Int
        salario: Float
        active: Boolean
    }

    #Ponto de entrada da api
    type Query {
        ola: String!        
        adeus: String!
        horaCerta: Date
        usuarioLogado: Usuario
    }


`

const resolvers = {

    Usuario: {
        salario(parent){
            return parent.salario_real
        }
    },
    Query: {
        ola() {
            return 'string de ola!'
        },
        adeus() {
            return 'string de adeus!'
        },
        horaCerta() {
            return new Date
        },
        usuarioLogado(obj){
            return{
                id:001,
                nome: 'Lucas graphq',
                email: 'lucas@curso.com',
                idade: 25,
                salario_real: 1250.97,
                active:true,
            }
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
