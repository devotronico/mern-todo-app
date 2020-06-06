const express = require('express');
const authController = require('../controllers/auth-controllers');

/// MIDDLEWARE
const authJwt = require('../middleware/auth-jwt');
const { check } = require('express-validator');
// const ip = require('../middleware/ip');
// const log = require('../middleware/log');

const router = express.Router();

/**
 * @route   POST api/auth/register
 * @desc    Register/Signup a User con name, email, password
 * @webpage /register
 * @action  register
 * @access  Public
 * @returns {String} Json Web Token
 * arg 1: api/auth/register
 * arg 2: middleware express-validator per controllare i valori in req.body
 * arg 3: funzione register
 */
router.post(
  '/register',
  [
    check('username', 'La username è richiesta').not().isEmpty(),
    check('email', 'Includere una email valida').normalizeEmail().isEmail(),
    check('password', 'La password deve avere almeno 6 caratteri').isLength({
      min: 6
    })
  ],
  authController.register
);

/**
 * @route   POST /api/auth/verify [AUTENTICA]
 * @desc    Verifica dell' user e attivazione del suo account
 * @webpage /verify
 * @action  verify
 * @access  Public
 * arg 1: api/auth/verify
 * arg 2: middleware express-validator per controllare i valori in req.body
 * arg 3: funzione verification
 */
router.post(
  '/verify',
  check('hash', 'Il codice di verifica è richiesto').not(),
  authController.verification
);

/**
 * @route   GET /api/auth [AUTENTICA]
 * @desc    Get User data from sending token jwt
 * @webpage /
 * @action  loadUser
 * @access  Private
 * arg 1: api/auth
 * arg 2: middleware jwt che verifica se c'è il token tra gli headers della request,
 *        se è presente ed è valido ne estrae l'id dell'utente
 * arg 3: funzione auth
 */
router.get('/', authJwt, authController.loadUser);

/**
 * @route   POST /api/auth/login [AUTENTICA]
 * @desc    Login/Signin. Authenticate user with email & password e get token
 * @webpage /login
 * @action  login
 * @access  Public
 * arg 1: api/auth
 * arg 2: middleware express-validator per controllare i valori in req.body
 * arg 3: funzione login
 */
router.post(
  '/login',
  [
    check('email', 'Include a valid email').isEmail(),
    check('password', 'La password è richiesta').exists()
  ],
  authController.login
);

/**
 * @route   PUT /api/auth/logout
 * @desc    Logout
 * @webpage /logout
 * @action  logout
 * @access  Private
 * arg 1: api/auth/logout
 * arg 2: middleware jwt che verifica se c'è il token tra gli headers della request
 *        se è presente ed è valido ne estrae l'id dell'utente.
 * arg 3: funzione logout
 */
router.put('/logout', authJwt, authController.logout);

/**
 * @route   POST api/auth/reset-password
 * @desc    L'utente ha dimenticato la sua password,
 *          ma con l'email puo crearne una nuova
 * @webpage /reset-password
 * @action  resetPassword
 * @access  Public
 * arg 1: api/auth
 * arg 2: middleware express-validator per controllare i valori in req.body
 * arg 3: funzione resetPassword
 */
router.post(
  '/reset-password',
  check('email', 'è richiesta un email valida').isEmail(),
  authController.resetPassword
);

/**
 * @route   POST api/auth/new-password [AUTENTICA]
 * @desc    Salva la nuova password.
 * @webpage /new-password
 * @action  newPassword
 * @access  Public
 */
router.post(
  '/new-password',
  [
    check('password', 'La password deve avere almeno 6 caratteri').isLength({
      min: 6
    }),
    check('hash', 'Hash is required').exists()
  ],
  authController.newPassword
);

/**
 * @route   DELETE api/auth
 * @desc    Cancella il proprio account e tutto ciò che è correlato ad esso
 * @webpage /profile
 * @action  deleteAccount
 * @access  Private
 */
router.delete('/', authJwt, authController.deleteAccount);

/**
 * @route   GET api/auth/test
 * @desc    TEST
 * @webpage /test
 * @action  test
 * @access  Private
 */
router.get('/test', authJwt, authController.test);

module.exports = router;
