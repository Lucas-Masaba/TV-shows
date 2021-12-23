const axios = require('axios');

const showCount = async () => {
  const result = await axios.get('https://api.tvmaze.com/shows');
  return result.data.length;
};

module.exports = { showCount };
