const multer = require("multer");
const path = require("path");

const storage = multer.diskStorage({
  destination: (req, file, cb) => {
    cb(null, path.join(__dirname, "../images/"));
  },
  filename: (req, file, cb) => {
    cb(null, req.body.name);
  },
});

const upload = multer({ storage: storage }).single("file");

const imgUpload = (req, res) => {
  res.status(200).json("File has been uploaded");
};

module.exports = { upload, imgUpload };
