const axios = require('axios');

const showCount = async () => {
  const result = await axios.get('https://api.tvmaze.com/shows');
  return result.data.length;
};

// const commentCounter = async () => {
//   const result = await axios.get('https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/MYBVMigQRLz45iJjyYTt/comments?item_id=7');
//   return result.data.length;
// };

module.exports = { showCount };
