const path = require('path');

exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello API' });
};

exports.getInfo = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'].split(',')[0];
  const lang = req.headers['accept-language'];
  const soft = req.headers['user-agent'];
  res.json({ ipaddress: ip, language: lang, software: soft });
};

/*
"ipaddress":"88.132.237.7",
"language":"en-GB,en-US;q=0.9,en;q=0.8,hu;q=0.7,fr;q=0.6","software":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/90.0.4430.85 Safari/537.36"

*/
