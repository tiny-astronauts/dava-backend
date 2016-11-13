const {model, Schema} = require('mongoose');

const schema = new Schema({
    text: String,
    user: {
      type: Schema.ObjectId,
      ref: 'UserSchema',
    },
});

const model = new model(
  'Statement',
  schema,
);

module.exports = model;
