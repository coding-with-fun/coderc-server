const { Router } = require("express");
const UserSignIn = require("../controllers/restaurant-app/auth/UserSignIn");

const router = Router();

router.get("/", UserSignIn);

module.exports = router;
