import Company from "../models/company.model.js";

const generateCompanyId = (companyName) => {
  const randomDigits = Math.floor(1000 + Math.random() * 9000);
  const formattedName = companyName.trim().replace(/\s+/g, "_").toUpperCase();
  return `${formattedName}_${randomDigits}`;
};

export const createCompany = async (req, res) => {
  try {
    const companyData = req.body;
    companyData.companyId = generateCompanyId(companyData.companyName);
    const company = new Company(companyData);
    await company.save();
    res.status(201).json(company);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

export const getCompanies = async (req, res) => {
  try {
    const companies = await Company.find({}, "companyId companyName").sort({
      companyName: 1,
    }); // 1 for ascending order (A-Z)
    res.json(companies);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};
