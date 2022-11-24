import Image from "next/image";
import css from "../styles/Header.module.scss";
import Logo from "../assets/next.png";
import { ShoppingCart } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [badge, setBadge] = useState(2);
  const menuItem = (
    <>
      <li>
        <a>Home</a>
      </li>
      <li>
        <a>Menu</a>
      </li>
      <li>
        <a>Contact</a>
      </li>
      <li>
        <a>About</a>
      </li>
    </>
  );
  return (
    <div className="navbar px-12">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className={`menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52 ${css.navbar_menu}`}
          >
            {menuItem}
          </ul>
        </div>
        <Image src={Logo} width={120} height={60} className="cursor-pointer" />
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className={`menu menu-horizontal p-0 ${css.navbar_menu}`}>
          {menuItem}
        </ul>
      </div>
      <div className="navbar-end">
        <Badge badgeContent={badge} color="primary">
          <ShoppingCart className="cursor-pointer" />
        </Badge>
      </div>
    </div>
  );
};

export default Header;

{
  /* <div className={css.header}> */
}
{
  /* logo */
}
// <div className={css.logo}>
// <Image src={Logo} width={120} height={60} />
// </div>

{
  /* menu */
}
{
  /* <ul className={css.menu}>
    <li>Home</li>
    <li>Menu</li>
    <li>Contact</li>
  </ul> */
}

{
  /* Rithtside */
}
{
  /* <div className={css.rightside}>
    <div className={css.cart}>
      <Badge badgeContent={badge} color="primary">
        <ShoppingCart className={css.icon} />
      </Badge>
    </div>
  </div>
</div> */
}