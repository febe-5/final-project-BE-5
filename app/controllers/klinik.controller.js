const Klinik = require("../models/klinik.model");
module.exports = {
  getAllKlinik: async (req, res) => {
    try {
      const dataKlinik = await Klinik.find({});
      res.json({
        status: "success",
        message: "Get all data success",
        dataKlinik,
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
  getKlinikById: async (req, res) => {
    try {
      const { id } = req.params;
      const dataKlinik = await Klinik.findById(id);
      if (!dataKlinik) {
        res.status(404).json({
          status: "fail",
          message: "Data not found",
        });
      } else {
        res.json({
          status: "success",
          message: "Get data success",
          dataKlinik,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
  updateKlinikById: async (req, res) => {
    try {
      const { id } = req.params;
      const body = req.body;
      const updateKlinik = await Klinik.findByIdAndUpdate(id, body);
      if (!updateKlinik) {
        res.status(404).json({
          status: "fail",
          message: "Data not found",
        });
      } else {
        res.json({
          status: "success",
          message: "Update data success",
          body,
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
  postKlinik: (req, res) => {
    try {
      const dataKlinik = req.body;
      const klinik = new Klinik(dataKlinik);
      klinik.save();
      res.status(201).json({
        status: "success",
        message: "Post data success",
        dataKlinik,
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
  delAllKlinik: async (req, res) => {
    try {
      await Klinik.deleteMany({});
      res.json({
        status: "success",
        message: "Delete all data success",
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
  delKlinikById: async (req, res) => {
    try {
      const { id } = req.params;
      const deleteData = await Klinik.findByIdAndDelete(id);
      if (!deleteData) {
        res.status(404).json({
          status: "fail",
          message: "Data not found",
        });
      } else {
        res.json({
          status: "success",
          message: "delete data success",
        });
      }
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
};
