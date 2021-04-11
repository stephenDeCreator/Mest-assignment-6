const express = require('express');

require('./config/dbConnect');

const app = express();
app.use(express.json());

app.use('/auth', require('./router/authRouter'));
app.use('/user', require('./router/usersRouter'));

app.listen(4000, () => console.log('Server up and running!'));
