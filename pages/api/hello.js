// Next.js API route support: https://nextjs.org/docs/api-routes/introduction

import mongoose from "mongoose";

export default async function handler(req, res) {
  mongoose
    .connect("mongodb://localhost/Ecomm", {
      useNewUrlParser: true,
      useUnifiedTopology: true,
    })
    .then(() => {
      console.log("connected to mongodb");
      res.status(200).send({ msg: "Success" });
    })
    .catch((error) => {
      console.log(error.reason);
      res.status(200).send({ falied: error.reason });
    });
}