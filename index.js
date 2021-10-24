import { gql } from 'apollo-server'
import { ApolloServer } from 'apollo-server-express'
const URI = "http://localhost:4000";
const persons =[
    {
        id : "1",
        name: "Leandro",
        phone: "969365656",
        direccion: "Coronel La Torre A-4",
        fechaNacimiento: "16-09-1999"
    },
    {
        id : "2",
        name: "Cristel",
        phone: "987569858",
        direccion: "Calle Peru",
        fechaNacimiento: "20-11-1999"
    },
    {
        id : "3",
        name: "Camila",
        phone: "985469878",
        direccion: "Av. Sauces",
        fechaNacimiento: "20-02-1999"
    }
]
const typeDefs = gql`
    type Person{
        id: String!
        name : String
        phone: String!
        direccion:String
        fechaNacimiento:String
    }

    type Query {
        personCount:Int!
        allPersons: [Person]!
    }
`
const resolvers ={
    Query:{
        personCount: ()=> persons.length,
        allPersons: ()=> persons
    }
}
const server = new ApolloServer({
    typeDefs: typeDefs,
    resolvers
})

server.listen().then(({url})=> {
    console.log('Server is ready');
})