require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const mainRouter = require('./routes/pages/main.routes');
const authRouter = require('./routes/pages/auth.routes');
const basketRoute = require('./routes/pages/basket.routes');
const profileRouter = require('./routes/pages/profile.routes');
const favoriteRouter = require('./routes/pages/favorite.routes');

const authApiRouter = require('./routes/api/auth.routes');
const profileApiRouter = require('./routes/api/profile.routes');
const cardApiRouter = require('./routes/api/card.routes');
const productsApiRouter = require('./routes/api/products.routes');
const basketApiRouter = require('./routes/api/basket.routes');

const app = express();

expressConfig(app);

app.use(mainRouter);
app.use('/auth', authRouter);
app.use('/shop', basketRoute);
app.use('/profile', profileRouter);
app.use('/favorite', favoriteRouter);

app.use('/api', productsApiRouter);
app.use('/api/auth', authApiRouter);
app.use('/api/profile', profileApiRouter);
app.use('/api/card', cardApiRouter);
app.use('/api/shop', basketApiRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
