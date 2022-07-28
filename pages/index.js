import Navbar from "../components/Navbar";
import Homescreen from "../components/Homescreen";
import { useEffect } from "react";
import { useState } from "react";

export default function Home() {
  const [products, setdata] = useState();

  useEffect(() => {
    fetch("/api/hello");
    fetch("/api/Product/ShowProducts")
      .then((res) => res.json())
      .then((data) => {
        setdata(data);
      });
  }, []);
  return (
    <>
      <Navbar
        companyname="MukulKamwala"
        homename="Home"
        aboutname="About Us"
        logo="vercel.svg"
      />
      <Homescreen products={products} />
    </>
  );
}
