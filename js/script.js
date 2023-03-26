function snakes(position, snakes) {
  switch (position) {
    case snakes[0]:
      return 16;
      break;
    case snakes[1]:
      return 25;
      break;
    case snakes[2]:
      return 11;
      break;
    case snakes[3]:
      return 19;
      break;
    case snakes[4]:
      return 60;
      break;
    case snakes[5]:
      return 53;
      break;
    case snakes[6]:
      return 68;
      break;
    case snakes[7]:
      return 88;
      break;
    case snakes[8]:
      return 75;
      break;
    case snakes[9]:
      return 80;
      break;
  }
}

function ladders(position, ladders) {
  switch (position) {
    case ladders[0]:
      return 38;
      break;
    case ladders[1]:
      return 14;
      break;
    case ladders[2]:
      return 31;
      break;
    case ladders[3]:
      return 26;
      break;
    case ladders[4]:
      return 42;
      break;
    case ladders[5]:
      return 44;
      break;
    case ladders[6]:
      return 44;
      break;
    case ladders[7]:
      return 67;
      break;
    case ladders[8]:
      return 91;
      break;
    case ladders[9]:
      return 98;
      break;
    case ladders[10]:
      return 94;
      break;
  }
}

const snakesMap = [16, 46, 49, 62, 64, 74, 89, 92, 95, 99];
const laddersMap = [2, 7, 8, 15, 21, 28, 36, 51, 71, 78, 87];
let die1;
let die2;
let positionPlayer1 = 0;
let positionPlayer2 = 0;
let player1Turn = true;
let turn;

// for (let i = 0; i < 10; i += 1)
  // while (positionPlayer1 !== 100 || positionPlayer2 !== 100);
while (positionPlayer1 !== 100 || positionPlayer2 !== 100) {
  turn = player1Turn ? 'player 1 turn' : 'player 2 turn';
  die1 = Math.ceil(Math.random() * (6 - 1 + 1));
  die2 = Math.ceil(Math.random() * (6 - 1 + 1));
  console.log(turn);
  console.log('dices', die1 + die2);
  const positions = [positionPlayer1, positionPlayer2];
  console.log(positions);
  // console.log(i);
  if (player1Turn) {
    if (die1 + die2 + positionPlayer1 > 100) {
      positionPlayer1 = 100 - (die1 + die2 + positionPlayer1 - 100);
    } else if (die1 + die2 + positionPlayer1 === 100) {
      console.log('player 1 wins');
      break;
    } else {
      positionPlayer1 += die1 + die2;
      if (snakesMap.includes(positionPlayer1)) {
        positionPlayer1 = snakes(positionPlayer1, snakesMap);
      } else if (laddersMap.includes(positionPlayer1)) {
        positionPlayer1 = ladders(positionPlayer1, laddersMap);
      }
    }
    if (die1 !== die2) {
      player1Turn = false;
    }
  } else {
    if (die1 + die2 + positionPlayer2 > 100) {
      positionPlayer2 = 100 - (die1 + die2 + positionPlayer2 - 100);
    } else if (die1 + die2 + positionPlayer2 === 100) {
      console.log('player 2 wins!');
      break;
    } else {
      positionPlayer2 += die1 + die2;
      if (snakesMap.includes(positionPlayer2)) {
        positionPlayer2 = snakes(positionPlayer2, snakesMap);
      } else if (laddersMap.includes(positionPlayer2)) {
        positionPlayer2 = ladders(positionPlayer2, laddersMap);
      }
    }
    if (die1 !== die2) {
      player1Turn = true;
    }
  }
}
