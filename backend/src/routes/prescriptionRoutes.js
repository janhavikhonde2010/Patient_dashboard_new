const express = require("express");
const router = express.Router();

// Example route for prescriptions
router.get("/", (req, res) => {
  res.send("Prescriptions API working!");
});

// ✅ Ensure correct export
module.exports = router;
