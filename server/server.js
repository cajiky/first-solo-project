
const express = require('express');
require('dotenv').config();

const app = express();
const bodyParser = require('body-parser');
const sessionMiddleware = require('./modules/session-middleware');

const passport = require('./strategies/user.strategy');

// Route includes
const userRouter = require('./routes/user.router');
const rolesRouter = require('./routes/roles.router');
const editPlayerRouter = require('./routes/edit.router');
const teamRouter = require('./routes/team.router');
const tacticsRouter = require('./routes/tactics.router');
const playersRouter = require('./routes/players.router');
const eventsRouter = require('./routes/events.router');

// Body parser middleware
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({ extended: true }));

// Passport Session Configuration //
app.use(sessionMiddleware);

// start up passport sessions
app.use(passport.initialize());
app.use(passport.session());

/* Routes */
app.use('/api/user', userRouter);
app.use('/api/roles', rolesRouter);
app.use('/api/editPlayer', editPlayerRouter);
app.use('/api/teams', teamRouter);
app.use('/api/tactics', tacticsRouter);
app.use('/api/players', playersRouter);
app.use('/api/events', eventsRouter);

// Serve static files
app.use(express.static('build'));

// App Set //
const PORT = process.env.PORT || 5000;

/** Listen * */
app.listen(PORT, () => {
  console.log(`Listening on port: ${PORT}`);
});
