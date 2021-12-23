const appId = 'MYBVMigQRLz45iJjyYTt';
const fetchTVAPI = async () => {
  const TVResponse = await fetch('https://api.tvmaze.com/shows');
  const getShowResult = await TVResponse.json();
  return getShowResult.slice(0, 6);
};

const fetchInvolvementAPI = async () => {
  const involvementAPIResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`);
  const getLikeResult = await involvementAPIResponse.json();
  return getLikeResult;
};

const submitLike = async (newLike) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/likes`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: newLike,
    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

const fetchInvolvementAPIcomments = async (id) => {
  const commentsResponse = await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments?item_id=${id}`);
  const getCommentResult = await commentsResponse.json();
  return getCommentResult;
};

const submitComment = async (newComment, theId, newName) => {
  await fetch(`https://us-central1-involvement-api.cloudfunctions.net/capstoneApi/apps/${appId}/comments`, {
    method: 'POST',
    body: JSON.stringify({
      item_id: theId,
      username: newName,
      comment: newComment,

    }),
    headers: {
      'Content-type': 'application/json; charset=UTF-8',
    },
  });
};

export default {
  fetchTVAPI, fetchInvolvementAPI, submitLike, fetchInvolvementAPIcomments, submitComment,
};