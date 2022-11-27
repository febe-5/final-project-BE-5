const Pembayaran = require("../models/pembayaran.model");

require("../models/psikolog");
require("../models/user.model");

const nodemailer = require("nodemailer");

const transporter = nodemailer.createTransport({
  port: 465,
  host: "smtp.gmail.com",
  auth: {
    user: "ronaldorodhi@gmail.com",
    // pass minta ke saya
    pass: "",
  },
  secure: true,
});

module.exports = {
  getAllPembayaran: async (req, res) => {
    try {
      const data = await Pembayaran.find()
        .populate("id_psikolog")
        .populate("id_user")
        .populate("id_metode");
      res.json({
        status: "success",
        message: "Get data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  postPembayaran: (req, res) => {
    try {
      const data = req.body;
      //data = req.user
      const pembayaran = new Pembayaran({ ...data });
      pembayaran.save();

      res.json({
        status: "success",
        message: "pending payment",
      });

      const mailData = {
        from: "Mental Meds",
        //nanti diganti dari req user
        to: "ronaldorodhi@gmail.com",
        subject: "Mental Meds",
        html:
          "<b>Terima Kasih sudah memesan layanan kami!</b>" +
          "<br>Berikut cara pembayaran pesanan:<br/>" +
          "<br>Kirim ke rekening 024 0121 212 sesuai nominal<br/>",
      };

      transporter.sendMail(mailData, (error, info) => {
        if (error) {
          return console.log(error);
        }
        res
          .status(200)
          .send({ message: "Mail send", message_id: info.messageId });
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  updatePembayaranById: async (req, res) => {
    try {
      const { id } = req.params;
      const update = req.body;
      const { bukti_bayar } = update;
      const data = await Pembayaran.findByIdAndUpdate(id, {
        bukti_bayar: bukti_bayar,
      });
      const dataPsikolog = await data.populate("id_psikolog");
      const { nama_psikolog, no_telp } = dataPsikolog.id_psikolog;
      if (bukti_bayar) {
        res.json({
          status: "success",
          message: "payment success",
          data: { nama_psikolog, no_telp: `https://wa.me/${no_telp}` },
        });
      } else {
        res.status(402).json({
          status: "fail",
          message: "payment failed",
          reason: "payment method not valid",
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

  getPembayaranByID: async (req, res) => {
    try {
      const { id } = req.params;
      const data = await Pembayaran.findById(id);
      res.json({
        status: "success",
        message: "Get data success",
        data,
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },

  delAllPembayaran: async (req, res) => {
    try {
      await Pembayaran.deleteMany();
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

  delPembayaranByID: async (req, res) => {
    try {
      const { id } = req.params;
      await Pembayaran.findByIdAndDelete(id);
      res.json({
        status: "success",
        message: "Delete data success",
      });
    } catch (error) {
      res.status(500).send({
        status: "fail",
        message: "opps something error!",
        error: error.message,
      });
    }
  },
};
