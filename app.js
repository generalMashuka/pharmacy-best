require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const mainRouter = require('./routes/pages/main.routes');
const authRouter = require('./routes/pages/auth.routes');
const authApiRouter = require('./routes/api/auth.routes');

// const favoriteRouter = require('./routes/api/favorite.router');

const cardApiRouter = require('./routes/api/card.router');


const app = express();

expressConfig(app);

app.use(mainRouter);
app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);

// app.use('/api/favorite', favoriteRouter);

app.use('/api/card', cardApiRouter);


app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
