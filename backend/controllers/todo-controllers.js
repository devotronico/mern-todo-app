const faker = require('faker');
const Todo = require('../models/Todo');
const messages = require('../utils/messages-todo');

/**
 * @route   [1] GET /api/todos/test
 * @desc    TEST
 * @webpage /
 * @action  test
 * @access  Public
 * @returns {String}
 */
const test = async (req, res, next) => {
  // res.status(201).send('TEST TODOS');
  req.userAction = 'Test';
  const data = {
    id: 1,
    text: 'todo di prova',
    completed: false
  };
  const result = {
    data,
    message: [messages.test.success]
  };

  res.status(201).json(result);
  return next();
};

/**
 * @route   POST api/todos
 * @desc    crea todos
 * @webpage /todos/fake
 * @action  createTodo
 * @access  Private
 * @returns {String} stringa json.
 */
const createTodo = async (req, res, next) => {
  req.userAction = 'Create Todo';

  const { completed, text } = req.body;

  /// Salva il nuovo Todo nel database
  const createdTodo = new Todo({
    completed,
    text
  });

  try {
    await createdTodo.save();
  } catch (err) {
    res
      .status(500)
      .json({ item: null, message: [messages.createTodo.error[0]] });
    return next();
  }

  /// <a> DISATTIVATO MOMENTANEAMENTE
  /*   let user;
  try {
    user = await User.findByIdAndUpdate(req.user.id, {
      $addToSet: { todos: createdTodo._id }
    });
  } catch (err) {
    res
      .status(500)
      .json({ item: null, message: [messages.createTodo.error[1]] });
    return next();
  }

  if (!user) {
    res
      .status(500)
      .json({ item: null, message: [messages.createTodo.error[2]] });
    return next();
  } */
  /// </a>

  const location = `${req.protocol}://${req.get('host')}${req.baseUrl}${
    req.path
  }/${createdTodo._id}`;

  res.setHeader('Location', location);

  const data = {
    completed: createdTodo.completed,
    text: createdTodo.text
  };

  const result = {
    data,
    message: [messages.createTodo.success]
  };

  res.status(201).json(result);
  next();
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
 * <c> Ottiene un todo tramite il suo id passato come parametro dell'url
 */
const getTodo = async (req, res, next) => {
  /// <a>
  const id = req.params.id;
  if (id.length < 24) {
    return next();
  } /// </a>

  /// <c>
  let todo;
  try {
    todo = await Todo.findById(id).lean();
  } catch (err) {
    res.status(500).json({ item: null, message: [messages.getTodo.error[0]] });
    return next();
  }

  if (!todo) {
    res.status(500).json({ item: null, message: [messages.getTodo.error[1]] });
    return next();
  } /// </c>

  const result = {
    item: todo,
    message: [messages.getTodo.success]
  };

  res.status(201).json(result);
  next();
};

/**
 * @route   PUT api/todo/:id
 * @desc    Aggiorna un todo
 * @webpage /todo
 * @action  updateTodo
 * @access  Private
 * @return  Todo
 */
const updateTodo = async (req, res, next) => {
  req.userAction = 'Update Todo';

  try {
    const { completed } = req.body;
    const todo = await Todo.findOneAndUpdate(
      { _id: req.params.id },
      { $set: { completed: completed } },
      { new: true }
    );

    const location = `${req.protocol}://${req.get('host')}${req.baseUrl}${
      req.path
    }/${todo._id}`;
    res.setHeader('Location', location);

    const result = {
      item: todo,
      message: [messages.updateTodo.success]
    };

    res.status(201).json(result);
    next();
  } catch (err) {
    res.status(500).json({ item: null, message: [messages.updateTodo.error] });
    return next();
  }
};

/**
 * @route   DELETE /api/todo/:id
 * @desc    Cancella un todo
 * @webpage /todo
 * @action  deleteTodo
 * @access Private
 * @returns {Json} messaggio di successo
 */
const deleteTodo = async (req, res, next) => {
  req.userAction = 'Delete Todo';

  /// <b>
  const id = req.params.id;
  if (id.length < 24) {
    return next();
  } /// </b>

  /// <c>
  Todo.findByIdAndRemove(id, function (err, response) {
    if (err || !response) {
      res
        .status(500)
        .json({ item: null, message: [messages.deleteTodo.error] });
      return next();
    }
    res
      .status(200)
      .json({ item: null, message: [messages.deleteTodo.success] });
    next();
  }); /// </c>
};

exports.test = test;
exports.createTodo = createTodo;
exports.getTodo = getTodo;
exports.updateTodo = updateTodo;
exports.deleteTodo = deleteTodo;
