const mongoose = require("mongoose");

module.exports = mongoose.connect(
  "mongodb://be5:Kamen12345@ac-miurwcn-shard-00-00.pmn0yq5.mongodb.net:27017,ac-miurwcn-shard-00-01.pmn0yq5.mongodb.net:27017,ac-miurwcn-shard-00-02.pmn0yq5.mongodb.net:27017/test?replicaSet=atlas-2a8h3x-shard-0&ssl=true&authSource=admin"
);
