require("dotenv").config();
const connectDb = require("./db/connect");
const bcrypt = require("bcryptjs");
const User = require("./models/user");

const users = require("./users.json");

const newUsers = async () => {
  await users.map(async (each) => {
    const newPassword = await bcrypt.hash(each.password, 12);
    console.log(newPassword);
    return { ...each, password: newPassword };
  });
};

console.log(newUsers);
const start = async () => {
  try {
    await connectDb(process.env.MONGO_URI);
    await User.deleteMany();
    await User.create(newUsers);
    console.log("populate success");
    process.exit(0);
  } catch (error) {
    console.log("populate error");
    process.exit(1);
  }
};

start();
