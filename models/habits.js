// importing required packages
const mongoose = require('mongoose');

// schema for habit (in daily view)
const habitSchema = new mongoose.Schema({
  name: {
    type: String,
    required: true,
  },
  status: 
  [
    {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'Status',
    }
  ]
}, {
  timestamps: true
}
)



const Habits = mongoose.model('Habits', habitSchema);

module.exports = Habits;