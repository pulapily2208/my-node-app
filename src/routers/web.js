const express = require("express");
const router = express.Router();
const TestController = require("../apps/controllers/TestController.js");
const AuthController = require("../apps/controllers/auth.js");
const AdminController = require("../apps/controllers/admin.js");
const ProductController = require("../apps/controllers/product.js");
const UsersController = require("../apps/controllers/users.js");
const CatergoryController = require("../apps/controllers/category.js");
const TestMiddleware = require("../apps/middlewares/test");
const AuthMiddleware = require("../apps/middlewares/auth");

router.get("/test1", TestController.test1);
router.get("/test2",TestMiddleware.test, TestController.test2);
// router.get("/form", TestController.Form);
// router.post("/form", TestController.Test);

// Auth
router.get("/admin/login",AuthMiddleware.checkLogin, AuthController.getLogin);
router.post("/admin/login",AuthMiddleware.checkLogin, AuthController.postLogin);
router.get("/admin/logout",AuthMiddleware.checkAdmin, AuthController.Logout);
// Admin
router.get("/admin/dashboard",AuthMiddleware.checkAdmin, AdminController.Dashboard);
// Product
router.get("/admin/products",AuthMiddleware.checkAdmin, ProductController.Index);
router.get("/admin/products/create",AuthMiddleware.checkAdmin, ProductController.Create);
router.get("/admin/products/edit/:id",AuthMiddleware.checkAdmin, ProductController.Edit);
router.get("/admin/products/delete/:id",AuthMiddleware.checkAdmin, ProductController.Del);
// Users
router.get("/admin/users",AuthMiddleware.checkAdmin, UsersController.Index);
router.get("/admin/users/create",AuthMiddleware.checkAdmin, UsersController.Create);
router.get("/admin/users/edit/:id",AuthMiddleware.checkAdmin, UsersController.Edit); 
router.get("/admin/users/delete/:id",AuthMiddleware.checkAdmin, UsersController.Del); 
// Catergory
router.get("/admin/catergorys",AuthMiddleware.checkAdmin, CatergoryController.Index);
router.get("/admin/catergorys/create",AuthMiddleware.checkAdmin, CatergoryController.Create);
router.get("/admin/catergorys/edit/:id",AuthMiddleware.checkAdmin, CatergoryController.Edit); 
router.get("/admin/catergorys/delete/:id",AuthMiddleware.checkAdmin, CatergoryController.Del); 

module.exports = router;
