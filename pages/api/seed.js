import Product from "../../modal/Product";
import data from "../../utlis/data";
import User from "../../modal/User";

async function handler(req, res) {
  await Product.deleteMany();
  await Product.insertMany(data.products);
  await User.deleteMany();
  await User.insertMany(data.users);
  res.send({ message: "seeded successfully" });
}

export default handler;
