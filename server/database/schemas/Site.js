const mongoose = require('mongoose');

const { Schema } = mongoose;

const siteSchema = new Schema(
  {
    name: {
      type: String,
      required: true,
    },
    phone: {
      type: String,
    },
    website: {
      type: String,
    },
    access: {
      type: String,
      required: true,
    },
    status: {
      type: String,
    },
    notes: {
      type: String,
    },
    address: {
      street1: {
        type: String,
      },
      street2: {
        type: String,
      },
      city: {
        type: String,
      },
      state: {
        type: String,
      },
      zipcode: {
        type: String,
      },
      country: {
        type: String,
      },
      latitude: {
        type: Number,
      },
      longitude: {
        type: Number,
      },
    },
    amenities: {
      hasWall: {
        type: Boolean,
        default: false,
      },
      hasOutdoorLights: {
        type: Boolean,
        default: false,
      },
    },
    courts: {
      countCourts: {
        type: Number,
        default: 0,
      },
      countIndoorCourts: {
        type: Number,
        default: 0,
      },
      countOutdoorCourts: {
        type: Number,
        default: 0,
      },
      countClayCourts: {
        type: Number,
        default: 0,
      },
      countHardCourts: {
        type: Number,
        default: 0,
      },
      countGrassCourts: {
        type: Number,
        default: 0,
      },
    },
    createdAt: { type: Date, default: Date.now, immutable: true },
    updatedAt: { type: Date },
  },
);

siteSchema.set('toJSON', {
  transform: (doc, ret) => {
    ret.id = ret._id;
    delete ret._id;
    delete ret.__v;
  },
});

const Site = mongoose.model('Site', siteSchema);

module.exports = Site;
