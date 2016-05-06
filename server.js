const express = require('express');
const app = express();

const port = process.env.PORT || 3333;

app.set('port', port);
app.use(express.static(`${__dirname}/dist`));

app.listen(port, function() {
  console.log(`Express server listening on port ${port}`); // eslint-disable-line no-console
  console.log(`env = ${app.get('env')}`); // eslint-disable-line no-console
  console.log(`__dirname = ${__dirname}`); // eslint-disable-line no-console
});
