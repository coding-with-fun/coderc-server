const User = require("../../../model/RestaurantApp/User");

module.exports = UserSignIn = async (req, res) => {
    try {
        const { email, password } = req.body;
        console.log(email, password);

        let user = new User(req.body);
        await user.save();

        res.status(200).json({
            message: "Hello",
        });
    } catch (error) {
        console.log(error.message);
    }
};
