# Project Mgmt App

```
GraphQL Crash Course With Full Stack MERN Project.
This will start backend, frontend and MongoDB.
```

## 1. Create Backend Server and GraphQL

```
npm init -y
npm i express express-graphql graphql mongoose cors colors
npm i -D nodemon
npm i dotenv
mkdir server && cd server
npm run dev
```

- Schema

```
const {projects, clients} = require('../sampleData')

const { GraphQLObjectType, GraphQLID, GraphQLString, GraphQLSchema } = require('graphql');

// Client Type
const ClientType = new GraphQLObjectType({
    name: 'Client',
    fields: () => ({
      id: { type: GraphQLID },
      name: { type: GraphQLString },
      email: { type: GraphQLString },
      phone: { type: GraphQLString },
    })
})

const RootQuery = new GraphQLObjectType({
  name : 'RootQueryType',
  fields: () => ({
    client: {
      type: ClientType,
      args: { id: { type: GraphQLID } },
      resolve(parent, args) {
        return clients.find(client=>client.id === args.id)
        // return Client.findById(args.id);
      },
    }
  })
})

module.exports = new GraphQLSchema({
  query: RootQuery
})

```

- GraphQL Running
  http://localhost:5000/graphql

```
{
    client(id: "1") {
        name
    }
}

⇒ Running Result
{
  "data": {
    "client": {
      "name": "Tony Stark"
    }
  }
}
```

## 2. Client

```
npx create-react-app client
cd client
npm i @apollo/client graphql react-router-dom react-icons
npm start
```

## Reference

- [Running-Express-GraphQL-Server](https://graphql.org/graphql-js/running-an-express-graphql-server/)
- [BootStrap](https://getbootstrap.com/)
- [Node-Cors](https://expressjs.com/en/resources/middleware/cors.html)
- [YT-Course](https://www.youtube.com/watch?v=BcLNfwF04Kw)
