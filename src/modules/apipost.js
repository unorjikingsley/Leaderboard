const addScore = async (player) => {
  const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YfHM0CAv7BtZjQf6wX9C/scores';
  const userscore = {
    user: player.user,
    score: player.score,
  };
  await fetch(APIurl, {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json; charset=UTF-8',
    },
    body: JSON.stringify(userscore),
  });
};

export default addScore;
