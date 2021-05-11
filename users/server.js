const express = require('express');
const { graphqlHTTP } = require('express-graphql');
const expressGraphQL = graphqlHTTP;
const schema = require('./schema/schema')

const app = express();

app.use('/graphql', expressGraphQL({
  schema,
  graphiql: true
}));

app.listen(4000, () => {
  console.log('listening');
});