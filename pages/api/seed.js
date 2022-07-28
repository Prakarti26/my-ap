import Product from "../../modal/Product";
import data from "../../utlis/data";

 async function handler(req, res) {
  await Product.deleteMany();
  await Product.insertMany(data.products);
  res.send({ message: "seeded successfully" });
}
//  async function handle(req, res) {
//   await User .deleteMany();
//   await User .insertMany(data.users);
//   res.send({ message: "seeded successfully" });
// }
export default handler;