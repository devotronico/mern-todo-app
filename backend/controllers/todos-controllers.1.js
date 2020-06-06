const faker = require('faker');
const Todo = require('../models/Todo');

/**
 * @route   POST api/todos/fake
 * @desc    crea todos finti
 * @webpage /todos/fake
 * @action  createFakeTodos
 * @access  Private
 * @returns {String} stringa json.
 */
const createFakeTodos = async (req, res, next) => {
  req.userAction = 'Create Fake Todos';
  /// <m>
  const errorMessage = {
    type: 'error',
    title: 'Errore Server',
    msg: 'Si è verificato un errore, riprovare piu tardi.',
    timeout: 10000
  }; /// </m>

  const number = req.body.number;

  if (!number) {
    res.status(500).json({ msg: [errorMessage] });
    return next();
  }

  const reqTypes = [
    { method: 'POST', action: 'Create Resource' },
    { method: 'GET', action: 'Read Resource' },
    { method: 'PUT', action: 'Update Resource' },
    { method: 'DELETE', action: 'Delete Resource' }
  ];

  const codes = [200, 201, 400, 403, 422, 500];
  const routes = ['/api/auth', '/api/user', '/api/post'];

  let arr = [];
  for (let i = 0; i < number; i++) {
    const reqTypesIndex = Math.floor(Math.random() * reqTypes.length);
    const obj = {
      method: reqTypes[reqTypesIndex].method,
      code: codes[Math.floor(Math.random() * codes.length)],
      route: routes[Math.floor(Math.random() * routes.length)],
      action: reqTypes[reqTypesIndex].action,
      ip: faker.internet.ip(),
      time: Math.floor(Math.random() * 5000),
      date: faker.date.between(faker.date.past(), faker.date.recent()),
      isFake: true
    };
    arr.push(obj);
  }

  Todo.insertMany(arr, function (error, docs) {
    if (error) {
      res.status(500).json({ msg: [errorMessage] });
      return next();
    }
    res.status(200).json(arr);
    return next();
  });
};

/**
 * @route   GET api/todos
 * @desc    Ottiene tutti i todo
 * @webpage /todos
 * @action  getTodos
 * @access  Private
 * @return  Todos
 */
const getTodos = async (req, res, next) => {
  /// <m>
  const errorMessage = {
    type: 'error',
    title: 'Errore Server',
    msg: 'Si è verificato un errore, riprovare piu tardi.',
    timeout: 10000
  }; /// </m>w

  try {
    const todos = await Todo.find().lean();
    // console.log('Get all Todos');
    res.status(200).json(todos);
    return next();
  } catch (error) {
    // console.log(error.message);
    res.status(500).json({ msg: [errorMessage] });
    return next();
  }
};

/**
 * @route   GET /api/todos/:id
 * @desc    Recupera un todo tramite il suo id passato come parametro dell'url
 * @webpage /todos
 * @action  getTodo
 * @access  Private
 * @argument {string} req.params.id - id del todo
 * @returns {Json} - documento completo
 * <a> Controlla se l'id è valido altrimenti passa al prossimo middleware.
 * <b> Object di messaggi che vengono inviati al client per mostrare gli Alert.
 * <c> Ottiene un todo tramite il suo id passato come parametro dell'url
 */
const getTodo = async (req, res, next) => {
  /// <a>
  const id = req.params.id;
  if (id.length < 24) {
    return next();
  } /// </a>

  /// <b>
  const errorMessage = {
    type: 'error',
    title: 'Errore Todo',
    msg: 'Impossibile visualizzare il Todo.',
    timeout: 10000
  }; /// </b>

  /// <c>
  let todo;
  try {
    todo = await Todo.findById(id).lean();
  } catch (err) {
    res.status(500).json({ errors: [errorMessage] });
    return next();
  }

  if (!todo) {
    res.status(500).json({ errors: [errorMessage] });
    return next();
  } /// </c>

  res.status(201).json(todo);
  next();
};

/**
 * @route   DELETE /api/todos/:id
 * @desc    Cancella un todo tramite il suo id passato come parametro dell'url
 * @webpage /todos
 * @action  deleteTodo
 * @access  Private
 * @argument {string} req.params.id - id del todo
 * @returns {Json} - messaggio di successo
 * <m> Object di messaggi che vengono inviati al client per mostrare gli Alert.
 * <a> Controlla se l'id è valido altrimenti passa al prossimo middleware.
 * <b> Ottiene un todo tramite il suo id passato come parametro dell'url
 */
const deleteTodo = async (req, res, next) => {
  console.log('deleteTodo');
  /// <a>
  const id = req.params.id;
  if (id.length < 24) {
    return next();
  } /// </a>

  /// <m> MESSAGES
  const errorMessage = {
    type: 'error',
    title: 'Errore Todo',
    msg: 'Impossibile cancellare il Todo.',
    timeout: 10000
  }; /// </m>

  /// <b>
  Todo.findByIdAndRemove(id, function (err, response) {
    if (err || !response) {
      res.status(500).json({ errors: [errorMessage] });
      return next();
    }
    res.status(200).json({ msg: 'Cancellato il Todo con id: ' + id });
    return next();
  }); /// </b>
};

/**
 * @route   DELETE /api/todos
 * @desc    Cancella tutti i todo
 * @webpage /todos
 * @action  deleteTodos
 * @access Private
 * @returns {Json} messaggio di successo
 * <m> Object di messaggi che vengono inviati al client per mostrare gli Alert.
 */
const deleteTodos = async (req, res, next) => {
  console.log('deleteTodos');

  /// <m> MESSAGES
  const errorMessage = {
    type: 'error',
    title: 'Errore Todo',
    msg: 'Impossibile cancellare il Todo.',
    timeout: 10000
  }; /// </m>

  /// <a>
  try {
    const todo = await Todo.deleteMany({});
    res.status(200).json({
      msg: 'Sono stati cancellati tutti i ' + todo.deletedCount + ' Todo.'
    });
    return next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ errors: [errorMessage] });
    return next();
  } /// </a>
};

/**
 * @route   DELETE /api/todos/fake
 * @desc    Cancella tutti i todo finti
 * @webpage /todos
 * @action  deleteFakeTodos
 * @access Private
 * @returns {Json} messaggio di successo
 * <m> Object di messaggi che vengono inviati al client per mostrare gli Alert.
 */
const deleteFakeTodos = async (req, res, next) => {
  console.log('deleteFakeTodos');
  const type = +req.body.type;
  console.log('TYPE', typeof type);
  const query = !type ? {} : type === 1 ? { isFake: false } : { isFake: true };

  /// <m>
  const errorMessage = {
    type: 'error',
    title: 'Errore Todo',
    msg: 'Impossibile cancellare il Todo.',
    timeout: 10000
  }; /// </m>

  /// <a>
  try {
    const todo = await Todo.deleteMany(query);
    res.status(200).json({
      msg: 'Sono stati cancellati tutti i ' + todo.deletedCount + ' finti Todo.'
    });
    return next();
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ errors: [errorMessage] });
    return next();
  } /// </a>
  // next();
};

/**
 * @route   [1] GET /api/todos/test
 * @desc    TEST
 * @webpage /
 * @action  test
 * @access  Public
 * @returns {String}
 */
const test = async (req, res, next) => {
  res.status(201).send('LOGS');
  next();
};

exports.createFakeTodos = createFakeTodos;
exports.getTodos = getTodos;
exports.getTodo = getTodo;
exports.deleteTodo = deleteTodo;
exports.deleteTodos = deleteTodos;
exports.deleteFakeTodos = deleteFakeTodos;
exports.test = test;
