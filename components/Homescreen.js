import react from "react";
import Homecss from "../styles/Homecss.module.css";
import Link from "next/link";

 
function Homescreen({ products }) {

  return (
    <div className={Homecss.contain}>
      <h1>PRODUCTS</h1>
      <div className={Homecss.container}>
        {products?.map((product, i) => (
          <Link href={`/Product/${product.slug} `}>
            <div key={i} className={Homecss.con}>
              <div className={Homecss.proimage}>
                <img src={`/products/${product.image}`} alt={i} />
              </div>
              <span className={Homecss.name}>{product.name}</span>
              <strong>{product.price}</strong>
            </div>
          </Link>
        ))}
      </div>
    </div>
  );
}
export default Homescreen;
