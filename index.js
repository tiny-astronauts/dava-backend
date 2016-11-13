const Express = require('express');

const app = new Express();

app.get('*', (req, res) => {
  return res.send('hello');
});

app.listen(process.env.PORT, err => {
  if (err) console.error('There was an error: ', err);

  console.log('Server started successfully!');
});
