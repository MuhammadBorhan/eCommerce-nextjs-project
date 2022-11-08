import { Facebook, GitHub, LinkedIn, Link } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <footer
      className="footer flex flex-col md:flex-row items-center md:justify-between  p-4 py-6 px-12 bg-danger"
      style={{ backgroundColor: "black", color: "white" }}
    >
      <div className="items-center grid-flow-col">
        <p>
          Copyright © {new Date().getDate()} / {new Date().getMonth() + 1} /{" "}
          {new Date().getFullYear()} - All Right Reserved By Borhan
        </p>
      </div>
      <div className="grid-flow-col gap-4 md:place-self-center md:justify-self-end">
        <a target="blank" href="https://glowing-semifreddo-77c56f.netlify.app/">
          <Link />
        </a>
        <a target="blank" href="https://web.facebook.com/mdborhan.uddin.121">
          <Facebook />
        </a>
        <a
          target="blank"
          href="https://www.linkedin.com/in/md-borhan-uddin-3a37a61a4/"
        >
          <LinkedIn />
        </a>
        <a target="blank" href="https://github.com/MuhammadBorhan">
          <GitHub />
        </a>
      </div>
    </footer>
  );
};

export default Footer;
