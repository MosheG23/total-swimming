const mongoose = require("mongoose");

const User = mongoose.model("User", "user")

module.exports = (app) => {
    app.post("/auth/register/", async (res, req) => {
        const { username, password, email } = req.body
        const existingUser = await User.findOne({ username: username });
        if (existingUser) {
            res.status(409).send("השם משתמש נמצא בשימוש!")
        } else {
            const newUser = new User({
                username,
                email,
                dateCreated: Date.now(),
                password
            })
        }
        try {
            await newUser.save((err, user) => {
                console.log(user.username + " wad added!");
            })
            res.status(200).send("נרשם בהצלחה");
        } catch (error) {
            res.status(422).send(error);
        }
    })

    app.get("/auth/login/:username/:password", async (req, res) => {
        try {
            const { username, password } = req.paramas
            const user = User.find({ username: username })
            if (user === null ) {
                res.status(404).send("User not found")
            } else {
                if (password === user.password) {
                    res.status(202).send(user)
                } else {
                    res.status(403).send("Password is incorrect")
                }
            }
        } catch (error) {
            console.log(error);
        }
    })

    app.get("/auth/curr_user/", (res, req) => {
        res.send(req.user)
    })
}