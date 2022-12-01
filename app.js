require('@babel/register');
const express = require('express');
const expressConfig = require('./config/express');

const mainRouter = require('./routes/pages/main.routes');
const authRouter = require('./routes/pages/auth.routes');
const authApiRouter = require('./routes/api/auth.routes');
const profileApiRouter = require('./routes/api/profile.routes');
const profileRouter = require('./routes/pages/profile.routes');

const app = express();

expressConfig(app);

app.use(mainRouter);
app.use('/auth', authRouter);
app.use('/api/auth', authApiRouter);
app.use('/api/profile', profileApiRouter);
app.use('/profile', profileRouter);

app.listen(3000, () => console.log('Server started at http://localhost:3000/'));
