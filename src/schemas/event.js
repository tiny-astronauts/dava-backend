const {buildSchema} = require('graphql');

const event = buildSchema(
  `
    type Query {
      term: String,
    }
  `
);

module.exports  event;
