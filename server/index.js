const path         = require('path');

const bodyParser   = require('body-parser');
const cors         = require('cors');
const express      = require('express');

require('./config/environment');
require('./database');

const configPassport  = require('./passport/config');
const routes          = require('./routes/index');

const assetFolder  = path.resolve(__dirname, '../dist/');
const port         = process.env.PORT;
const app          = express();

const corsOptions = {
  origin: '*',
};

app.use(cors(corsOptions));
app.use(express.static(assetFolder));
app.use(bodyParser.json());

configPassport(app, express);

app.use('/', routes);

app.listen(port, () => console.log(`Server is listening on port ${port}`));
