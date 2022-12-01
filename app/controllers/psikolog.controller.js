const Psikolog = require("../models/psikolog.model")
const Layanan = require("../models/layanan.model")

module.exports = {
    getAllPsikolog: async (req, res) => {
        try {
            const allData = await Psikolog.find({})

            res.status(200).send({
                status: "success",
                message: "All Data Psikolog",
                data: allData
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    addPsikolog: async (req, res) => {
        try{

            const data = req.body
            const addNewPsikolog = new Psikolog(data)
            addNewPsikolog.save()

            res.status(201).send({
                status: "success",
                message: "Create data new psikolog successfully",
                data
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    getPsikologID: async (req, res) => {
        try {
            const { id } = req.params
            const idData = await Psikolog.findById(id).populate("layanan").exec()

            res.status(200).send({
                status: "success",
                message: "Get Pikolog ID",
                data: idData
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    updatePsikolog: async (req, res) => {
        try {
            const { id } = req.params
            const data = req.body

            const updateData = await Psikolog.findByIdAndUpdate(id, data)

            res.status(200).send({
                status: "success",
                message: "Update data psikolog successfully"
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }

    },

    deletePsikologID: async (req, res) => {
        try{
            const { _id } = req.params

            const deleteIdData = await Psikolog.deleteOne(_id);
            res.status(200).send({
                status: "success",
                message: "One psychologist data successfully deleted",
                data: deleteIdData
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    deleteAllPsikolog: async (req, res) => {
        try {
            const deleteAllData = await Psikolog.deleteMany({})

            res.status(200).send({
                status: "success",
                message: "All psychologist data was successfully deleted",
                data: deleteAllData
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error" 
            })
        }
    },
}