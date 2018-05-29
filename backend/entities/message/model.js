/**
 * opinion model
 */
const mongoose = require('mongoose');

const messageSchema = mongoose.Schema({
  type: String,
  discussion_id: mongoose.Schema.ObjectId,
  discussion: { type: mongoose.Schema.ObjectId, ref: 'discussion' },
  to: { type: mongoose.Schema.ObjectId, ref: 'user' },
  from: { type: mongoose.Schema.ObjectId, ref: 'user' },
  date: Date,
  content: Object,
  read: Boolean,
});

module.exports = mongoose.model('message', messageSchema);
