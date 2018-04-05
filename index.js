const express = require('express');
const OpenTok = require('opentok');

const otApiKey = '';
const otSecret = '';
const opentok = new OpenTok(otApiKey, otSecret);

const app =  express();
app.use(express.static('html'));

app.get('/createSession', (req, res) => {
  const sessionData = opentok.createSession( (err, session) => {
    const token = opentok.generateToken(session.sessionId);
    res.send({
      'apiKey': otApiKey,
      'sessionId': session.sessionId,
      'token': token,
    });
  });
})
const server = app.listen(8000, () => {
  console.log('listening');
})
