const mongoose = require("mongoose");
const Schema = mongoose.Schema;

export const CitySchema = new Schema({
  name: { type: String },
  customers: [
    {
      type: Schema.Types.ObjectId,
      ref: "customer"
    }
  ]
});

CitySchema.statics.findCustomers = id => {
  return this.findById(id)
    .populate("customers")
    .then(city => city.customers)
    .catch(err => console.log(err));
};

CitySchema.statics.addCustomer = (id, customer) => {
  const Customer = mongoose.model("customer");

  return this.findById(id).then(city => {
    const customer = new Customer({ customer, city });
    city.customers.push(customer);
    return Promise.all([customer.save(), city.save()]).then(
      ([customer, city]) => city
    );
  });
};

mongoose.model("city", CitySchema);
