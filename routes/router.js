const router = require("express").Router();

const data  = require("../controllers/User");

router.get("/usersList", data.getUsers);
router.post("/createUser", data.createUser);
router.put("/updateUser/:id", data.updateUser);
router.delete("/deleteUser/:id", data.deleteUser);

module.exports = router;