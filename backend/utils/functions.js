const jwt = require('jsonwebtoken');
const bcrypt = require('bcryptjs');
const { validationResult } = require('express-validator');

/**
 * {Array} errors
 * [a] Sostituisce il messaggio originale con il messaggio della lib.
 * @param {*} req
 * @param {*} warnMessage
 * @returns {Array} - puo ritornare un array che contiene piu di un oggetto
 */
const useExpressValidator = (req, warnMessage) => {
  const errors = validationResult(req);
  // console.log('errors', errors);
  // console.log('typeof errors', typeof errors);
  if (!errors.isEmpty()) {
    if (errors.array().length > 1) {
      const messList = [];
      const objstring = JSON.stringify(warnMessage);
      for (let i = 0; i < errors.array().length; i++) {
        const obj = JSON.parse(objstring);
        obj.msg = errors.array()[i].msg; // [a]
        messList.push(obj);
      }
      return messList;
    }
    warnMessage.msg = errors.array()[0].msg;
    return [warnMessage];
  }
  return false;
};

/**
 * Generare il Token JWT:
 * @see https://jwt.io/#debugger
 * l metodo `sign` genera il Token jwt passandogli gli argomenti:
 *   arg 1: id dell'user.
 *   arg 2: una chiave segreta a libera scelta, settata nel file `nodemon.json`.
 *   arg 3: tempo di vita del Token (3600 è uguale a un ora)
 *   arg 4: callback - ritorna il Token al client oppure ritorna un errore
 * @param {Object} existingUser - { _id, name, email, role }
 * @param {Object} errorMessage  - messaggio di errore
 * @param {*} res - funzione di risposta
 */
const createTokenJwt = (existingUser, errorMessage, res) => {
  const { _id, name, email, role } = existingUser;
  try {
    const payload = {
      user: {
        id: _id
      }
    };

    jwt.sign(
      payload,
      process.env.JWT_KEY,
      { expiresIn: 360000 },
      (err, token) => {
        if (err) throw err;
        res.status(200).json({
          id: _id,
          name: name,
          email: email,
          role: role,
          token
        });
      }
    );
  } catch (err) {
    console.log(err.message);
    res.status(500).json({ errors: [errorMessage] });
  }
};

/// CREATE PASSWORD AND VERIFY
const createHash = async (toHash, removeSlash = false) => {
  try {
    let hash = await bcrypt.hash(toHash, 12);
    if (removeSlash) {
      const regex = /\//g;
      hash = hash.replace(regex, 's');
    }
    return hash;
  } catch (err) {
    return false;
  }
};

exports.useExpressValidator = useExpressValidator;
exports.createTokenJwt = createTokenJwt;
exports.createHash = createHash;
