import Navbarcss from "../styles/Navbar.module.css";
import { useContext, useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { signOut, useSession } from "next-auth/react";
import { ToastContainer } from "react-toastify";
import { Menu } from "@headlessui/react";
import "react-toastify/dist/ReactToastify.css";
import { Store } from "../utlis/Store";
import dynamic from "next/dynamic";
import DropdownLink from "./DropdownLink";
import Cookies from "js-cookie";

function Navbar({ companyname, homename, aboutname, logo }) {
  const { status, data: session } = useSession(); //status is the flag shows the loading of the session

  const { state, dispatch } = useContext(Store);
  const { cart } = state;
  const [cartItemsCount, setcartItemsCount] = useState(0);
  useEffect(() => {
    setcartItemsCount(cart.cartItems.reduce((a, c) => a + c.quantity, 0));
  }, [cart.cartItems]);

  const logoutClickHandler = () => {
    Cookies.remove("cart");
    dispatch({ type: "CART_RESET" });
    signOut({ callbackUrl: "/login" });
  };

  return (
    <>
      <div className={Navbarcss.header}>
        <div className={Navbarcss.bio}>
          <Image src={`/assets/${logo}`} height={60} width={60} alt="logo" />
          <Link href="/">
            <span>{companyname}</span>
          </Link>
        </div>
        <div className={Navbarcss.menu}>
          <ul>
            <Link href="/">
              <li>{homename}</li>
            </Link>
            <li>{aboutname}</li>
            <li>Contact Us</li>
          </ul>
        </div>
        <div className={Navbarcss.user}>
          <ul>
            {status === "loading" ? (
              "Loading"
            ) : session?.user ? (
              <Menu as="div" className="relative inline-block">
                <Menu.Button className="text-blue-600">
                  {session.user.name}
                </Menu.Button>
                <Menu.Item className="absolute right-0 w-56 origin-top-right bg-white shadow-lg">
                  {/* <Menu.Item>
                    <DropdownLink className="dropdown-link" href="/profile">
                      Profile
                    </DropdownLink>
                  </Menu.Item> */}
                  {/* <Menu.Item>
                    <DropdownLink
                      className="dropdown-link"
                      href="/order-history"
                    >
                      Order History
                    </DropdownLink>
                  </Menu.Item> */}
                  <Menu.Item>
                    <a
                      className="dropdown-link"
                      href="#"
                      onClick={logoutClickHandler}
                    >
                      Logout
                    </a>
                  </Menu.Item>
                </Menu.Item>
              </Menu>
            ) : (
              <Link href="/login">
                <a className="p-2">Login</a>
              </Link>
            )}

            <Link href="/shipping">
              <li>
                Cart
                {cartItemsCount > 0 && (
                  <span className={Navbarcss.badge}>{cartItemsCount}</span>
                )}
              </li>
            </Link>
          </ul>
        </div>
      </div>
      <ToastContainer position="bottom-center" limit={1} />
    </>
  );
}
export default dynamic(() => Promise.resolve(Navbar), { ssr: false });
