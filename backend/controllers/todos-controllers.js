const faker = require('faker');
const Todo = require('../models/Todo');
const messages = require('../utils/messages-todos');

/**
 * @route   POST api/todos
 * @desc    crea todos
 * @webpage /todos/fake
 * @action  createTodos
 * @access  Private
 * @returns {String} stringa json.
 */
const createTodos = async (req, res, next) => {
  req.userAction = 'Create Fake Todos';

  const number = req.body.number;

  if (!number) {
    res
      .status(500)
      .json({ item: null, message: [messages.createTodos.error[0]] });
    return next();
  }

  let arr = [];
  for (let i = 0; i < number; i++) {
    const obj = {
      text: faker.lorem.sentence(),
      completed: faker.random.boolean()
    };
    arr.push(obj);
  }

  Todo.insertMany(arr, function (error, docs) {
    if (error) {
      res
        .status(500)
        .json({ item: null, message: [messages.createTodos.error[1]] });
      return next();
    }
    res
      .status(200)
      .json({ item: arr, message: [messages.createTodos.success] });
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
  req.userAction = 'get Todos';

  try {
    const todos = await Todo.find().lean();
    res.status(200).json({ item: todos, message: [messages.getTodos.success] });
    return next();
  } catch (error) {
    res.status(500).json({ item: null, message: [messages.getTodos.error] });
    return next();
  }
};

/**
 * @route   DELETE /api/todos
 * @desc    Cancella tutti i todo
 * @webpage /todos
 * @action  deleteTodos
 * @access Private
 * @returns {Json} messaggio di successo
 */
const deleteTodos = async (req, res, next) => {
  req.userAction = 'delete todos';

  try {
    const todo = await Todo.deleteMany({});
    res.status(200).json({
      item: { todoDeleted: todo.deletedCount },
      message: [messages.deleteTodos.success]
    });
    return next();
  } catch (error) {
    res.status(500).json({ item: null, message: [messages.deleteTodos.error] });
    return next();
  }
};

exports.createTodos = createTodos;
exports.getTodos = getTodos;
exports.deleteTodos = deleteTodos;
