require('isomorphic-fetch');

const getLabel = function() {
  return new Promise(function(resolve, reject) {
    return fetch('https://api.fda.gov/drug/label.json?search=effective_time:[20110601+TO+20121231]&limit=1&api_key=pNeissEmyPqirzAW7w1eIsPjS7Ar7km8ron8dMlL')
    .then(function(response) {
      return response.json()
      .then(function(chunk) {
        return resolve(chunk);
      });
    })
    .catch(function(error) {
      console.log('itsa error ', error)
    });
  });
};

module.exports = getLabel;
