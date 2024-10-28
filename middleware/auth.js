    const auth = (req, res, next) => {
    const apiKey = req.headers['apikey'];
    if (apiKey && apiKey === process.env.API_KEY) {
      next();
    } else {
      res.status(403).json({ success: false, message: 'Forbidden' });
    }
  };
  module.exports = auth;