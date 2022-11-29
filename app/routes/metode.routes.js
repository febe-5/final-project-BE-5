const router = require("express").Router();

// const verifyToken = require("../middleware/verifyToken");
// const verifyUser = require("../middleware/verifyUser");

const {
  getAllMetode,
  getMetodeByID,
  postMetode,
  updateMetodeByID,
  delMetodeByID,
  delAllMetode,
} = require("../controllers/metode.controller");

router.get("/metode", getAllMetode);
router.get("/metode/:id", getMetodeByID);

router.post("/metode", postMetode);
router.put("/metode/:id", updateMetodeByID);
router.delete("/metode/:id", delMetodeByID);
router.delete("/metode", delAllMetode);

module.exports = router;
