import express from "express";
import { userSignup, userLogin } from "../controller/user-controller.js";
import { getProduct } from "../controller/product-controller.js";
const Router = express.Router();

Router.post("/signup", userSignup);
Router.post("/login", userLogin);
Router.get("/products", getProduct);

export default Router;
