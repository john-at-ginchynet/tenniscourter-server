const mongoose = require('mongoose');

const { Schema } = mongoose;

const messageSchema = new Schema(
  {
    sender: { type: Schema.ObjectId, ref: 'User', required: true },
    message: {
      type: String,
    },
    createdAt: { type: Date, default: Date.now, immutable: true },
  },
);

messageSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Message = mongoose.model('Message', messageSchema);

module.exports = Message;
