import displayScores from './table.js';

const getScores = async () => {
  const APIurl = 'https://us-central1-js-capstone-backend.cloudfunctions.net/api/games/YfHM0CAv7BtZjQf6wX9C/scores';
  const response = await fetch(APIurl);
  const scores = (await response.json()).result;
  const scoreDOM = document.querySelector('.table');
  scoreDOM.innerHTML = '';
  scores.forEach((score) => {
    displayScores(score);
  });
};

export default getScores;
