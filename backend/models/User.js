const mongoose = require('mongoose');

const Schema = mongoose.Schema;
const UserSchema = Schema({
  username: {
    type: String,
    required: true
  },
  email: {
    type: String,
    required: true,
    unique: true
  },
  password: {
    type: String,
    required: true
  },
  verify: {
    type: String,
    required: true
  },
  role: {
    type: String,
    required: true
  },
  isActive: {
    type: Boolean,
    default: false
  },
  isAuthenticated: {
    type: Number,
    default: 0
  },
  avatar: {
    type: String
  },
  login_at: {
    type: Date,
    default: Date.now
  },
  logout_at: {
    type: Date,
    default: Date.now
  },
  register_at: {
    type: Date,
    default: Date.now
  },
  isFake: {
    type: Boolean,
    default: false
  },
  status: {
    type: String,
    enum: ['sospeso', 'bannato', 'attivato'],
    default: 'attivato'
  },
  todos: [{ type: Schema.Types.ObjectId, ref: 'todo' }]
});

module.exports = mongoose.model('user', UserSchema, 'users');
