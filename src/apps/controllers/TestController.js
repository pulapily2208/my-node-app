const UserModel = require('../models/user');
const CategoryModel = require('../models/category');
const ProductModel = require("../models/product");
exports.test1 = async (req, res) => {
    req.session.email = "dfsfsfs"
    res.send("Test 1")
 
}
exports.test2 = async(req,res) => {
    res.send("Test 2")


}






















// exports.Test = async (req, res) => {

//     console.log(req.param.str);
    
    // Thêm
    // const user = {
    //     email: "vietpro.edu.vn@gmail.com",
    //     password: "1234567",
    // }
    // UserModel(user).save();

    // Sửa
    // UserModel.updateOne(
    //   { email: "vietpro.edu.vn@gmail.com" },
    //   { password: "6666666", role: "admin" }
    // ).exec((error, docs)=>{
    //     console.log(error);
    //     console.log(docs);    
    // });

    // Xóa
    // UserModel.deleteOne(
    //   { email: "vietpro.edu.vn@gmail.com" },
    //   (error, docs) => {
    //     console.log(error);
    //     console.log(docs);
    //   }
    // );
// };

// exports.Form = (req, res) => {
//     return res.send(
//     `
//         <form method ="post">
//             <input type="text" name="email">
//             <br>
//             <input type="password" name="password">
//             <br>
//             <button type="submit">Send</button>
//         </form>
//     `
//     );
// }

