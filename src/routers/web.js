const express = require("express");
const router = express.Router();
const TestController = require("../apps/controllers/TestController.js");
const AuthController = require("../apps/controllers/auth.js");
const AdminController = require("../apps/controllers/admin.js");
const ProductController = require("../apps/controllers/product.js");
const UsersController = require("../apps/controllers/users.js");
const CatergoryController = require("../apps/controllers/category.js");

router.get("/test", TestController.Test);
// router.get("/form", TestController.Form);
// router.post("/form", TestController.Test);

// Auth
router.get("/admin/login", AuthController.getLogin);
router.post("/admin/login", AuthController.postLogin);
router.get("/admin/logout", AuthController.Logout);
// Admin
router.get("/admin/dashboard", AdminController.Dashboard);
// Product
router.get("/admin/products", ProductController.Index);
router.get("/admin/products/create", ProductController.Create);
router.get("/admin/products/edit/:id", ProductController.Edit);
router.get("/admin/products/delete/:id", ProductController.Del);
// Users
router.get("/admin/users", UsersController.Index);
router.get("/admin/users/create", UsersController.Create);
router.get("/admin/users/edit/:id", UsersController.Edit); 
router.get("/admin/users/delete/:id", UsersController.Del); 
// Catergory
router.get("/admin/catergorys", CatergoryController.Index);
router.get("/admin/catergorys/create", CatergoryController.Create);
router.get("/admin/catergorys/edit/:id", CatergoryController.Edit); 
router.get("/admin/catergorys/delete/:id", CatergoryController.Del); 

module.exports = router;
