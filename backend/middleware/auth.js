const jwt = require('jsonwebtoken');

/**
 * @desc Middleware with JWT
 * [a] ottiene il token dall header della request
 *   il token jwt negli headers:
 *   KEY: x-auth-token
 *   VALUE: eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VyIjp7ImlkIjoi
 *   NWRlZDE4ZWZiZDE3MWMzZWU4Njk1NGVlIn0sImlhdCI6MTU3NTgxOTUwMywiZXhw
 *   IjoxNTc2MTc5NTAzfQ.S3aEDNEmaAxNZDcHLIhdK9vlqobk94Fr8QAsE49-lxQ
 * [b] se non trova il token ritorna un errore
 * [c] il token viene decodificato
 *     verificandolo con la secret key contenuta in JWT_KEY
 *     che sta nel file `nodemon.json`
 * [d] dal token decodificato viene estratto il
 *     valore dell'oggetto `user` che viene passato alla request
 *     esempio: req.user = { id: '5e46a023d0a37e4738badf73' }
 */
module.exports = function (req, res, next) {
  const token = req.header('x-auth-token'); // [a]

  if (!token) {
    const warning = {
      type: 'warning',
      title: 'Warning Token',
      msg: 'token JWT non trovato, autorizzazione negata',
      timeout: 10000
    };
    res.status(500).json({ data: null, message: [warning] });
    return next();
  }

  try {
    const decoded = jwt.verify(token, process.env.JWT_KEY);
    req.user = decoded.user;
  } catch (err) {
    const error = {
      type: 'error',
      title: 'Error Token',
      msg: 'Il Token non è valido, autorizzazione negata',
      timeout: 10000
    };
    // res.status(500).json({ data: null, message: [error] });
    // return next();
  }
  next();
};
