import { useRouter } from "next/router";
import React, { useContext } from "react";
import data from "../../utlis/data";
import Productcss from "../../styles/Productscreen.module.css";
import Navbar from "../../components/Navbar";
import Link from "next/link";
import Image from "next/image";
import { Store } from "../../utlis/Store";

export default function ProductScreen() {
  const { state, dispatch } = useContext(Store);
  const path = useRouter();
  const router = useRouter();
  const { slug } = router.query;
  const product = data.products.find((a) => a.slug === slug);
  if (!product) {
    return <div>Product Not Found</div>;
  }
  const addtocart = () => {
    const existItem = state.cart.cartItems.find((x) => x.slug === product.slug);
    const quantity = existItem ? existItem.quantity + 1 : 1;

    if(product.countInStock < quantity){
      alert('Sorry Product is out of stock');
      return;
    }
    dispatch({ type: "CART_ADD_ITEM", payload: { ...product, quantity } });
    path.push('/cart');
  };

  return (
    <>
      <Navbar
        companyname="MukulKamwala"
        homename="Home"
        aboutname="About Us"
        logo="vercel.svg"
      />
      <Link href="/">
        <h3 className={Productcss.back}>Back To Cart</h3>
      </Link>
      <div className={Productcss.container}>
        <div>
          <Image
            src={`/products/${product.image}`}
            alt="productimg"
            width={500}
            height={600}
          />
        </div>
        <div className={Productcss.middle}>
          <div className={Productcss.mid}>
            <h2 className={Productcss.cardcon1}>{product.name}</h2>
            <h3 className={Productcss.cardcon1}>
              Price: <span>{product.price}</span>
            </h3>
            <h3 className={Productcss.cardcon1}>
              Brand: <span>{product.brand}</span>
            </h3>
            <h3 className={Productcss.cardcon1}>
              Rating: <span>{product.rating}</span>
            </h3>
            <h3 className={Productcss.cardcon1}>
              Discription: <span>{product.discription}</span>
            </h3>
          </div>
          <div>
            <Image
              className={Productcss.img}
              src={`/products/${product.image}`}
              alt="productimg"
              width={90}
              height={70}
            />
          </div>
        </div>
        <div className={Productcss.card}>
          <h3 className={Productcss.cardcon}>
            Price: <span>{product.price}</span>
          </h3>
          <button className={Productcss.cardbtn} onClick={addtocart}>
            Add To Cart
          </button>
        </div>
      </div>
    </>
  );
}
