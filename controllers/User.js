const User = require("../model/User");

const getUsers = (req, res) => {
  User.find((err, users) => {
    if (err) {
      res.send(err);
    }
    res.json(users);
  });
};

const createUser = (req, res) => {
  const user = new User({
    name: req.body.name,
    phone_number: req.body.phone_number,
    hobbies: req.body.hobbies,
    email: req.body.email,
  });

  user.save((err, user) => {
    if (err) {
      res.send(err);
    }
    res.json(user);
  });
};

const updateUser = (req, res) => {
  User.findOneAndUpdate(
    { _id: req.params.id },
    {
      $set: {
        name: req.body.name,
        phone_number: req.body.phone_number,
        hobbies: req.body.hobbies,
        email: req.body.email,
      },
    },
    { new: true },
    (err, User) => {
      if (err) {
        res.send(err);
      } else res.json(User);
    }
  );
};

const deleteUser = (req, res) => {
  User.deleteOne({ _id: req.params.id })
    .then(() => res.json({ message: "User Deleted" }))
    .catch((err) => res.send(err));
};

module.exports = {
  getUsers,
  createUser,
  updateUser,
  deleteUser,
};