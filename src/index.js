const express = require('express');
const port = 8080;
const graphqlHTTP = require('express-graphql');
const schema = require('./schemas');
const app = express();

app.use('/graphql', graphqlHTTP({
  schema: schema,
  root: {hello: () => 'hello world'},
  graphiql: true,
}))

app.get('*', function(req, res) {
  res.send('works')
});

app.listen(port, function(err) {
  if (err) {
    console.log('error starting server: ', err);
  } else {
    console.log('server listening on port: ', port);
  }
});
