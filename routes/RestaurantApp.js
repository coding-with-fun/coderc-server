const { Router } = require("express");
const UserSignIn = require("../controllers/RestaurantApp/auth/UserSignIn");

const RestaurantAppRouter = Router();

RestaurantAppRouter.get("/signin", UserSignIn);

module.exports = RestaurantAppRouter;
