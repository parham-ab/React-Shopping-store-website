import React, { useContext } from "react";
import { Link } from "react-router-dom";
// icons
import { AiOutlineShoppingCart } from "react-icons/ai";
// context
import { CardContext } from "../../contexts/CardContextProvider";

const Navbar = () => {
  const { state } = useContext(CardContext);
  return (
    <div className="nav-container">
      <div className="store-tab">
        <Link to="/products">Store</Link>
      </div>
      <div className="shop-logo">
        <Link to="/cards">
          <AiOutlineShoppingCart />
          <span>{state.itemsCounter}</span>
        </Link>
      </div>
    </div>
  );
};

export default Navbar;
