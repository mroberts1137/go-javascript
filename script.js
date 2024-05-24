let board = document.getElementById('board');
let turnElement = document.getElementById('turn');
let passBtn = document.getElementById('pass-btn');

let currentPlayer = 'black';
let boardState = Array(19)
  .fill()
  .map(() => Array(19).fill(null));

for (let i = 0; i < 19; i++) {
  for (let j = 0; j < 19; j++) {
    let intersection = document.createElement('div');
    intersection.dataset.x = i;
    intersection.dataset.y = j;
    intersection.addEventListener('click', handleIntersectionClick);
    board.appendChild(intersection);
  }
}

function handleIntersectionClick(event) {
  let x = parseInt(event.target.dataset.x);
  let y = parseInt(event.target.dataset.y);

  if (boardState[x][y] === null) {
    let stone = document.createElement('div');
    stone.classList.add('stone');
    stone.classList.add(`${currentPlayer}-stone`);
    event.target.appendChild(stone);

    boardState[x][y] = currentPlayer;

    currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
    turnElement.innerText = `${currentPlayer}'s turn`;
  }
}

passBtn.addEventListener('click', () => {
  currentPlayer = currentPlayer === 'black' ? 'white' : 'black';
  turnElement.innerText = `${currentPlayer}'s turn`;
});
