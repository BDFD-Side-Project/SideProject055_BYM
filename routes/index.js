/*
 * @Date         : 2023-08-09 14:44:21
 * @Author       : BDFD,bdfd2005@gmail.com
 * @Github       : https://github.com/bdfd
 * @LastEditTime : 2023-08-14 13:32:18
 * @LastEditors  : BDFD
 * @Description  :
 * @FilePath     : \routes\index.js
 * Copyright (c) 2023 by BDFD, All Rights Reserved.
 */

var express = require("express");
var router = express.Router();
var path = require("path");
var fs = require("fs");

//router address localhost:3000/
//descriptions: Home Page
//comments: set up home page layout
/* GET home page. */
router.get("/", function (req, res, next) {
	res.render("1.0Index_Page/index", {
		page: "Home",
		menuId: "home",
		layout: "layouts/index_layout",
	});
});

// router.get("/index", function (req, res, next) {
// 	res.render("index2", { page: "Index", menuId: "index" });
// });

router.get("/course", function (req, res, next) {
	res.render("2.0Course_Page/course", {
		page: "Key Courses",
		menuId: "key-courses",
		layout: "layouts/main_layout",
	});
});

router.get("/whyus", function (req, res, next) {
	res.render("3.0WhyUs_Page/whyus", {
		page: "Why Learn with us",
		menuId: "why-learn-with-us",
		layout: "layouts/main_layout",
	});
});

router.get("/contactus", function (req, res, next) {
	res.render("4.0ContactUs_Page/contactus", {
		page: "Contact Us",
		menuId: "contact-us",
		layout: "layouts/main_layout",
	});
});

//router address localhost:3000/test
//descriptions: Test Page
//comments: try out for new layout template
/* GET test page. */
router.get("/test", function (req, res, next) {
	res.render("test", { layout: "layouts/hero_layout" });
});

//router address localhost:3000/test2
//descriptions: Test Page for render HTML page
//comments: try out for render HTML independently
/* GET test02 page. */
router.get("/test02", function (req, res, next) {
	res.sendFile("testscript.html", {
		root: path.join(__dirname, "../views/html_files"),
	});
});

module.exports = router;
