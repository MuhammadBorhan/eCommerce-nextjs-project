import Image from "next/image";
import css from "../styles/Header.module.scss";
import Logo from "../assets/next.png";
import { ShoppingBagOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import { useState } from "react";

const Header = () => {
  const [badge, setBadge] = useState(2);
  return (
    <div className={css.header}>
      {/* logo */}
      <div className={css.logo}>
        <Image src={Logo} width={120} height={60} />
      </div>

      {/* menu */}
      <ul className={css.menu}>
        <li>Home</li>
        <li>Menu</li>
        <li>Contact</li>
      </ul>

      {/* Rithtside */}
      <div className={css.rightside}>
        <div className={css.cart}>
          <Badge badgeContent={badge} color="primary">
            <ShoppingBagOutlined className={css.icon} />
          </Badge>
        </div>
      </div>
    </div>
  );
};

export default Header;
