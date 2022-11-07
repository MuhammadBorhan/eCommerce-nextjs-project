import { Facebook, GitHub, LinkedIn, Link } from "@mui/icons-material";
import { AppBar, Toolbar, Typography } from "@mui/material";
import { Stack } from "@mui/system";
import React from "react";

const Footer = () => {
  return (
    <div>
      <AppBar position="bottom" style={{ backgroundColor: "black" }}>
        <Toolbar style={{ display: "flex", justifyContent: "space-between" }}>
          <Typography>All Rights &copy; Reserved By Borhan</Typography>
          <Stack direction="row" spacing={2}>
            <a
              target="blank"
              href="https://glowing-semifreddo-77c56f.netlify.app/"
            >
              <Link />
            </a>
            <a
              target="blank"
              href="https://web.facebook.com/mdborhan.uddin.121"
            >
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
          </Stack>
        </Toolbar>
      </AppBar>
    </div>
  );
};

export default Footer;
