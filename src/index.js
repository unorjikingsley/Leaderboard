import './index.css';
import displayScores from './modules/table.js';
import Score from './modules/score.js';
import getScores from './modules/getscores.js';
import addScore from './modules/apipost.js';

const username = document.querySelector('#username');
const userscore = document.querySelector('#userscore');
const submitBtn = document.querySelector('#submit');
const btn = document.querySelector('#btn');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (username.value !== '' && userscore.value !== '') {
    const currentname = username.value;
    const currentscore = userscore.value;
    const score = new Score(currentname, currentscore);
    addScore(score);
    displayScores(score);
    username.value = '';
    userscore.value = '';
  }

  btn.addEventListener('click', () => {
    getScores();
  });
});
