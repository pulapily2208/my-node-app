const ProductModel = require("../models/product");
const config = require("../../../config/default");
const paginate = require("../../common/paginate");

exports.Index = async (req, res) => {
    const page = Number(req.query.page) || 1;
    const limit = config.pagination.limit;
    const skip = (page - 1) * limit;
    const totalRows = await ProductModel.find().countDocuments();
    const totalPages = Math.ceil(totalRows / limit);
    const products = await ProductModel
    .find()
    .populate({path: "cat_id"})
    .sort({_id: -1})
    .skip(skip)
    .limit(limit);
    // console.log(paginate(totalRows, page));
    return res.render("admin/products/product",{
        products,
        paginate: paginate(totalPages, page),
        prev: page - 1,
        next: page + 1,
        page,
        totalPages
    });
};

exports.Create = (req, res) => {
    return res.render("admin/products/add_product");
};

exports.Edit = (req, res) => {
    const { id } = req.params;
    return res.render("admin/products/edit_product");
};

exports.Del = (req, res) => {
    const { id } = req.params;
    res.send("`PRODUCTS DELETE: ${id}`");
}

