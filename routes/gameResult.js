const express = require('express');

const router = express.Router();

const gameResult = [
  {
    gameId: '1234',
    team1: {
      nickname: ['user1', 'user2', 'user3', 'user4', 'user5'],
    },
    team2: {
      nickname: ['user6', 'user7', 'user8', 'user9', 'user10'],
    },
    winner: '1',
  },
  {
    gameId: '2345',
    team1: [
      {
        nickname: ['user11', 'user12', 'user13', 'user14', 'user15'],
      },
    ],
    team2: [
      {
        nickname: ['user16', 'user17', 'user18', 'user19', 'user20'],
      },
    ],
    winner: '2',
  },
];

router.get('/', (req, res) => {
  if (req.query.gameId) {
    const gameId = req.query.gameId;
    for (i = 1; i <= 2; i++) {
      if (gameId == gameResult[i].gameId) {
        res.status(200).json({
          winner: gameResult[i].winner,
        });
      } else {
        res.status(200).json({
          msg: 'no game',
        });
      }
    }
  }
});

module.exports = router;
