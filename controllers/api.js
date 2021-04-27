const path = require('path');

exports.getHello = (req, res, next) => {
  res.json({ greeting: 'hello API' });
};

exports.getInfo = (req, res, next) => {
  const ip = req.headers['x-forwarded-for'].split(',')[0];
  const language = req.headers['accept-language'];
  const software = req.headers['user-agent'];
  res.json({ ipaddress: ip, language: language, software: software });
};
