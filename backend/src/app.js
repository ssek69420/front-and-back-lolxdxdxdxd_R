//slightyl more complicated module
//well, this shit gave me a massive headache
//its literally 3 fucking am rn
//im going to kms (for humoristic purposes, this is a joke)
//^^ it isn't
const express = require('express');
const app = express();
app.use(express.json());

app.get('/hello', (req, res) => {
  res.json({ msg: 'Hello World' });
});

app.post('/sum', (req, res) => {
  const { a, b } = req.body;
  const na = Number(a);
  const nb = Number(b);
  res.json({ resultado: na + nb });
});

module.exports = app;

if (require.main === module) {
  const port = process.env.PORT || 3000;
  app.listen(port, () => {
    console.log('Server listening on port', port);
  });
}
