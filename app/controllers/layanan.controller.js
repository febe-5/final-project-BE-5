const Layanan = require("../models/layanan.model")

module.exports = {

    getAllLayanan: async (req, res) => {
        try {
            const allData = await Layanan.find({});

            res.status(200).send({
                status: "success",
                message: "All service data displayed successfully",
                data: allData
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    getLayananID: async (req, res) => {
        try{
            const { id } = req.params

            const layananID = await Layanan.findById(id).exec();

            res.status(200).send({
                status: "success",
                message: "One service data has been displayed",
                data: layananID
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    addLayanan: async (req, res) => {
        try {

            const { nama_layanan } = req.body
            const newDataLayanan = new Layanan({
                nama_layanan
            })
            const layanan = await newDataLayanan.save();

            res.status(201).send({
                status: "success",
                message: "Service data added successfully",
                data: layanan
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    updateLayanan: async (req, res) => {
        try{
            const { id } = req.params
            const { nama_layanan } = req.body

            const updateData = {
                nama_layanan
            }

            const update = await Layanan.findByIdAndUpdate(id, updateData)

            res.status(200).send({
                status: "success",
                message: "Service data updated successfully"
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error",
            })
        }
    },

    deleteLayananID: async (req, res) => {
        try {
            const { id } = req.params

            const deleteIdData = await Layanan.findByIdAndDelete(id)
            res.status(200).send({
                status: "success",
                message: "One service data has been deleted"
            })
        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    },

    deleteAllLayanan: async (req, res) => {
        try {

            const deleteAllData = await Layanan.deleteMany({});

            res.status(200).send({
                status: "success",
                message: "All service data has been deleted",
                data: deleteAllData
            })

        } catch (err) {
            res.status(500).send({
                status: "fail",
                message: err.message || "Internal Server Error"
            })
        }
    }
}