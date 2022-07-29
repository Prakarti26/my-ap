import Navbar from "../components/Navbar";
import Homescreen from "../components/Homescreen";
import { useEffect } from "react";
import { useState } from "react";
import dynamic from "next/dynamic";

function Home() {
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
export default dynamic(() => Promise.resolve(Home), { ssr: false });