const table = document.querySelector('.table');

const displayScores = (player) => {
  const row = document.createElement('tr');
  const item = document.createElement('th');
  item.textContent = `${player.user}: ${player.score}`;

  item.style.textAlign = 'left';

  row.appendChild(item);
  table.appendChild(row);
};

export default displayScores;
