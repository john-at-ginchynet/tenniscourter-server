const mongoose = require('mongoose');

const { Schema } = mongoose;

const matchSchema = new Schema(
  {
    side1_player1: { type: Schema.ObjectId, ref: 'User', required: true },
    side2_player1: { type: Schema.ObjectId, ref: 'User' },
    side1_player2: { type: Schema.ObjectId, ref: 'User' },
    side2_player2: { type: Schema.ObjectId, ref: 'User' },
    date: { type: Date },
    location: {
      type: String,
    },
    status: {
      type: String,
      enum: ['abandoned', 'bye', 'completed', 'defaulted', 'double default',
        'dead rubber', 'in progress', 'retired', 'suspended', 'walkover'],
    },
    type: {
      type: String,
      enum: ['singles', 'doubles'],
      default: 'singles',
    },
    score: {
      type: String,
    },
    winningSide: {
      type: Number,
      enum: [0, 1, 2],
    },
    messages: [{
      type: Schema.ObjectId, ref: 'Message',
    }],
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date },
  },
);

matchSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Match = mongoose.model('Match', matchSchema);

module.exports = Match;
