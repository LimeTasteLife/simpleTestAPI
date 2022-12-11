const express = require('express');
const path = require('path');
const morgan = require('morgan');
const session = require('express-session');

const gameAuthRouter = require('./routes/gameAuth');
const gameResultRouter = require('./routes/gameResult');

const app = express();
app.set('port', process.env.PORT || 3000);
app.set('view engine', 'html');
app.use(morgan('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));

const sessionOption = {
  resave: false,
  saveUninitialized: false,
  secret: 1234,
  cookie: {
    httpOnly: true,
    secure: false,
  },
};
app.use(session(sessionOption));

app.use('/auth', gameAuthRouter);
app.use('/result', gameResultRouter);

app.use((req, res, next) => {
  const error = new Error(`${req.method} ${req.url} 라우터가 없습니다.`);
  error.status = 404;
  next(error);
});

app.use((err, req, res, next) => {
  res.locals.message = err.message;
  res.locals.error = process.env.NODE_ENV !== 'production' ? err : {};
  res.status(err.status || 500);
  res.json({
    msg: res.locals.message,
    error: res.locals.error,
  });
});

app.listen(app.get('port'), () => {
  console.log(app.get('port'), '번 포트에서 대기 중');
});
