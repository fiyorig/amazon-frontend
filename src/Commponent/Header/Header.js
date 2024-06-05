import React, { useContext } from "react";
import classes from "./Header.module.css";
import { Link } from "react-router-dom";
import { TfiLocationPin } from "react-icons/tfi";
import { FaSearch } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import Lowerheader from "./Lowerheader";
import { DataContext } from "../DataProvider/Datapro";
import { auth } from "../../Utility/firebase";
const Header = () => {
  const [{ user, basket }, dispatch] = useContext(DataContext);
  const totalItem = basket?.reduce((amount, item) => {
    return item.amount + amount;
  }, 0);
  //  const [state,dispatch]=useContext(DataContext)
  //  console.log(basket.length)

  return (
    <>
      <section className={classes.fixed}>
        <div className={classes.header_container}>
          {/* logo */}
          <div className={classes.logo_container}>
            <Link to="/">
              <img
                src="https://clipartcraft.com/images/amazon-smile-logo-transparent-background-7.png"
                alt="Amazon logo"
              />
            </Link>
            {/* delivery */}
            <div className={classes.delivery}>
              <span>
                <TfiLocationPin />
              </span>
              <div>
                <p>delivered to</p>
                <span>Ethiopia</span>
              </div>
            </div>
          </div>

          {/* serch icon */}
          <div className={classes.search}>
            <select name=" " id=" ">
              <option value="">All</option>
            </select>
            <input type="text" />
            <FaSearch size={38} />
          </div>

          {/* other section */}

          <div className={classes.order_container}>
            <Link to="#" className={classes.language}>
              <img
                src="https://upload.wikimedia.org/wikipedia/commons/thumb/1/1a/Betsy_Ross_flag.svg/330px-Betsy_Ross_flag.svg.png"
                alt="flag logo"
              />
              <select name="" id=" ">
                <option value="">EN</option>
              </select>
            </Link>

            <Link to={!user && "/auth"}>
              <div>
                {user ? (
                  <>
                    <p>Hello {user?.email?.split("@")[0]}</p>
                    <span onClick={() => auth.signOut()}>Sign out</span>
                  </>
                ) : (
                  <>
                    <p>Hello,Sign In</p>
                    <span>Account & Lists</span>
                  </>
                )}
              </div>
            </Link>

            {/* order */}
            <Link to="/Orders">
              <p>returns</p>
              <span>& orders</span>
            </Link>
            {/* cart */}
            <Link to="/cart" className={classes.cart}>
              <FaShoppingCart size={35} />
              <span>{totalItem}</span>
            </Link>
          </div>
        </div>
      </section>
      <Lowerheader />
    </>
  );
};

export default Header;
