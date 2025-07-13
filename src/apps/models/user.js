const mongoose = require("../../common/database")(); // do trả về 1 funtion nên phải () để thực thi

// Tạo bản thiết kế User (mình chỉ làm việc với model chứ ko làm việc với bản thiết kế)
const userSchema = new mongoose.Schema(
    // các thuộc tính của collection User
    {
        email: {
            type: String,
            requires: true, // nghĩa là thông tin này ko được phép để trống
        },
        password: {
            type: String,
            requires: true,
        },
        role: {
            type: String,
            default: "member",
        },
        full_name: {
            type: String,
            requires: true,
        },

    },
    // timestamps: có muốn tạo ra các trường thông tin 1 cách tự động không, nếu có thì sẽ tự động thêm vào mỗi lần lưu vào DB
    {timestamps: true}
    
);

// Tạo model User từ bản thiết kế trước đó
const UserModel = mongoose.model("Users",userSchema,"users");
module.exports = UserModel;
