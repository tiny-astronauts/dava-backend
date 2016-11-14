const {
  GraphQLObjectType,
  GraphQLString,
  GraphQLSchema,
} = require('graphql/type');

const apiKey = "esoavnsUAvLBXyNx7JgNQOHjUhPY5FI3XoWuQuu5";

const enforcementResolver = () => new Promise((resolve, reject) => {
  return fetch(`https://api.fda.gov/drug/enforcement.json?search=penile&limit=1&api_key=${apiKey}`)
    .then(response => {
      return response.json()
        .then(json => {
          return resolve(json.results[0]);
        });
    })
    .catch(err => {
      console.error(err);
      return reject(err);
    });
});

const EnforcementType = new GraphQLObjectType({
  name: 'EnforcementType',
  fields: {
    country: {
      type: GraphQLString,
    },
  },
});

const QueryType = new GraphQLObjectType({
  name: 'QueryType',
  fields: {
    enforcement: {
      type: EnforcementType,
      resolve: enforcementResolver,
    },
  },
});

const MutationType = new GraphQLObjectType({
  name: 'MutationType',
  fields: {
    test: {
      type: GraphQLString,
    },
  },
  resolve: () => ({test: 'hello'}),
});

const schema = new GraphQLSchema({
  query: QueryType,
  mutation: MutationType,
});

module.exports = schema;
