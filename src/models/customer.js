const mongoose = require("mongoose");
const Schema = mongoose.Schema;

const CustomerSchema = new Schema({
  fullName: { type: String },
  age: { type: Number },
  city: {
    type: Schema.Types.ObjectId,
    ref: "city"
  }
});

CustomerSchema.statics.findCity = id => {
  return this.findById(id)
    .populate("city", 'melbourne')
    .then(customer => customer.city)
    .catch(err => console.log(err));
};

mongoose.model("customer", CustomerSchema);
