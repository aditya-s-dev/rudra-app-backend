// models/Company.js
import mongoose from "mongoose";

const { Schema } = mongoose;

const employeeSchema = new Schema({
  firstName: String,
  lastName: String,
  number: String,
  email: String,
});

const companySchema = new Schema({
  companyId: {
    type: String,
    unique: true,
    required: true,
  },
  companyName: String,
  ownerName: String,
  companyNumber: String,
  companyEmail: String,
  employee: employeeSchema,
});

export default mongoose.model("Company", companySchema);
