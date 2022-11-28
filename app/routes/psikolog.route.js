const router = require("express").Router();

const {
    getAllPsikolog,
    getPsikologID,
    addPsikolog,

    //function untuk membuat layanan dan memperbarui bidang "layanan" psikolog dengannya
    addPsikologID,

    updatePsikolog,
    deletePsikologID,
    deleteAllPsikolog,
} = require("../controllers/psikolog.controller")

router.get("/", getAllPsikolog)
router.get("/:id", getPsikologID)
router.post("/", addPsikolog)
router.put("/:id", updatePsikolog)
router.delete("/:id", deletePsikologID)
router.delete("/", deleteAllPsikolog)

module.exports = router