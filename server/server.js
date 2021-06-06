const express = require('express');
const cors = require('cors');
const port = process.env.PORT || 5000;

const controller = require('./controller/controller');

const app = express();
app.use(cors({ extended: false }));

app.use('/toys', controller);

app.listen(port, () => console.log(`Server started on port ${port}`));