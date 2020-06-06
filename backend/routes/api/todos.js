const express = require('express');
const todosController = require('../../controllers/todos-controllers');
// const authJwt = require('../middleware/auth-jwt');
// const { check } = require('express-validator');
const router = express.Router();

/**
 * @route   POST /api/todos
 * @desc    Crea todo finti
 * @webpage /todos
 * @action  createFakeTodos
 * @access  Private
 */
router.post('/', todosController.createTodos);

/**
 * @route   GET /api/todos
 * @desc    Ottiene tutti i todo
 * @webpage /todos
 * @action  getTodos
 * @access  Public
 */
router.get('/', todosController.getTodos);

/**
 * @route   PUT /api/todos
 * @desc    Update todos
 * @webpage /todos
 * @action  crateTodos
 * @access  Private
 */
// router.put('/', todosController.updateTodos);

/**
 * @route   DELETE /api/todos/
 * @desc    Cancella tutti i todo
 * @webpage /todos
 * @action  deleteTodos
 * @access  Private
 */
router.delete('/', todosController.deleteTodos);

module.exports = router;
