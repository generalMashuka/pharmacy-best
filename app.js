require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const mainRouter = require('./routes/pages/main.routes');
const authRouter = require('./routes/pages/auth.routes');
const authApiRouter = require('./routes/api/auth.routes');
const basketRoute = require('./routes/pages/basket.route');
const profileApiRouter = require('./routes/api/profile.routes');
const profileRouter = require('./routes/pages/profile.routes');
const favoriteRouter = require('./routes/pages/favorite.router');

const cardApiRouter = require('./routes/api/card.router');

const app = express();

expressConfig(app);

app.use(mainRouter);
app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);
app.use('/shop', basketRoute);

app.use('/api/profile', profileApiRouter);
app.use('/profile', profileRouter);

app.use('/favorite', favoriteRouter);
app.use('/api/card', cardApiRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
