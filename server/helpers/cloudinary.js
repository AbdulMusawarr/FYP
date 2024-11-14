const cloudinary = require("cloudinary");
const multer = require("multer");
const config = require("config/config.env");


cloudinary.config({
  cloud_name: "dpdyjoyji",
  api_key: "712977895435848",
  api_secret: "PKHFHTAh_qZsdxEqLdY0PMGkbBI",
});

const storage = new multer.memoryStorage();

async function imageUploadUtil(file) {
  const result = await cloudinary.uploader.upload(file, {
    resource_type: "auto",
  });

  return result;
}

const upload = multer({ storage });

module.exports = { upload, imageUploadUtil };
