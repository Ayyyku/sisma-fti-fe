const express = require("express");
const {
  register,
  login,
  logout,
  getUser,
  getAllUsers,
  me,
} = require("../controllers/authController.js"); // Corrected import path
const {
  createForm,
  getForms,
  getForm,
  updateForm,
  deleteForm,
} = require("../controllers/formController.js");
const {
  getAllRuangan,
  getRuanganById,
  createRuangan,
  updateRuangan,
  deleteRuangan,
} = require("../controllers/ruanganController.js");
const router = express.Router();

router.post("/register", register);
router.post("/login", login);
router.post("/logout", logout);
router.get("/user/:id", getUser);
router.get("/users", getAllUsers);
router.get("/me", me);
router.post("/form", createForm);
router.get("/forms", getForms);
router.get("/form/:id", getForm);
router.put("/form/:id", updateForm);
router.delete("/form/:id", deleteForm);

router.get("/ruangan", getAllRuangan);
router.get("/ruangan/:id", getRuanganById);
router.post("/ruangan", createRuangan);
router.put("/ruangan/:id", updateRuangan);
router.delete("/ruangan/:id", deleteRuangan);

module.exports = router;
