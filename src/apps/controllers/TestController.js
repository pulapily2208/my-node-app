const UserModel = require('../models/user');
const CategoryModel = require('../models/category');
const ProductModel = require("../models/product");
exports.Test = async (req, res) => {
    
    const products = await  ProductModel.find({})
    .populate({ path: "cat_id"});

    console.log(products);
    
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
};

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

