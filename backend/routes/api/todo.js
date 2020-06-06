const express = require('express');
const todoController = require('../../controllers/todo-controllers');
// const authJwt = require('../middleware/auth-jwt');
// const { check } = require('express-validator');
const router = express.Router();

/**
 * @route   GET /api/todo/test
 * @desc    TEST
 * @webpage /test
 * @action  test
 * @access  Private
 */
router.get('/test', todoController.test);

/**
 * @route   POST /api/todo
 * @desc    Crea un todo
 * @webpage /todo
 * @action  createTodo
 * @access  Private
 */
router.post('/', todoController.createTodo);

/**
 * @route   GET /api/todo/:id
 * @desc    Ottiene un todo
 * @webpage /todos
 * @action  getTodo
 * @access  Private
 */
router.get('/:id', todoController.getTodo);

/**
 * @route   PUT /api/todo/:id
 * @desc    Aggiorna un todo
 * @webpage /todo
 * @action  updateTodo
 * @access  Private
 */
router.put('/:id', todoController.updateTodo);

/**
 * @route   DELETE /api/todo/:id
 * @desc    Cancellare un todo
 * @webpage /todos
 * @action  deleteTodo
 * @access  Private
 */
router.delete('/:id', todoController.deleteTodo);

module.exports = router;
