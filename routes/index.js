const { Router } = require("express");
const RestaurantAppRouter = require("./RestaurantApp");

const router = Router();

router.use("/restaurant-app", RestaurantAppRouter);

module.exports = router;
