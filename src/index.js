import './index.css';
import displayScores from './modules/table.js';
import Score from './modules/score.js';

const username = document.querySelector('#username');
const userscore = document.querySelector('#userscore');
const submitBtn = document.querySelector('#submit');

submitBtn.addEventListener('click', (e) => {
  e.preventDefault();

  if (username.value !== '' && userscore.value !== '') {
    const currentname = username.value;
    const currentscore = userscore.value;
    const score = new Score(currentname, currentscore);
    displayScores(score);
    username.value = '';
    userscore.value = '';
  }
});
