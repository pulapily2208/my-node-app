const mongoose = require("mongoose");

module.exports = () => {
    mongoose
    .connect("mongodb://127.0.0.1:27017/node-k259")
    .then(() => console.log("Connected!"));
    return mongoose; // để không phải require mỗi khi cần dùng
};

