const express = require('express');

const router = express.Router();

const userList = [
  {
    nickname: 'user1',
  },
  {
    nickname: 'user2',
  },
  {
    nickname: 'user3',
  },
  {
    nickname: 'user4',
  },
  {
    nickname: 'user5',
  },
  {
    nickname: 'user6',
  },
  {
    nickname: 'user7',
  },
  {
    nickname: 'user8',
  },
  {
    nickname: 'user9',
  },
  {
    nickname: 'user10',
  },
  {
    nickname: 'user11',
  },
  {
    nickname: 'user12',
  },
  {
    nickname: 'user13',
  },
  {
    nickname: 'user14',
  },
  {
    nickname: 'user15',
  },
  {
    nickname: 'user16',
  },
  {
    nickname: 'user17',
  },
  {
    nickname: 'user18',
  },
  {
    nickname: 'user19',
  },
  {
    nickname: 'user20',
  },
];

router.get('/', (req, res) => {
  if (req.query.nickname) {
    const nickName = req.query.nickname;
    for (i = 1; i <= 20; i++) {
      if (nickName == userList[i].nickname) {
        res.status(200).json({
          auth: 'true',
        });
      } else {
        res.status(200).json({
          auth: 'false',
        });
      }
    }
  }
});

module.exports = router;
