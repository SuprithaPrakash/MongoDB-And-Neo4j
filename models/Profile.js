const mongoose = require("mongoose");
const ProfileSchema = new mongoose.Schema({
  user: {
    type: mongoose.Schema.Types.ObjectId,
    ref: "user",
  },
  Store: { type: String },
  location: { type: String },
  website: { type: String },
  Occassions: { type: [String] },

  products: [
    {
      PName: { type: String },
      Occassions: { type: String },
      Store: { type: String },
      Price: { type: String },
      description: { type: String },
    },
  ],

  stores: [
    {
      SName: { type: String },
      Occassions: { type: String },
      Address: { type: String },
      Phone: { type: String, default: false },
      Email: { type: String },
    },
  ],
});

module.exports = Profile = mongoose.model("profile", ProfileSchema);
