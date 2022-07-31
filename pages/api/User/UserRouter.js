import User from "../../../modal/Product";

export default async function handler(req, res) {
  const users = await User.find({});
  res.status(200).send(users);
}
