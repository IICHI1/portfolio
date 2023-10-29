import React from "react";

import { Box, IconButton, Link } from "@mui/material";
import { FaLinkedinIn } from "react-icons/fa";
import { BsGithub, BsTwitter } from "react-icons/bs";

const iconStyle = {
  bgcolor: "primary.contrastText",
  color: "primary.main",
  mx: 0.5,
  transition: ".3s all",
  fontSize: 20,
  "&:hover": {
    bgcolor: "secondary.main",
  },
};

const Social: React.FC = () => {
  return (
    <Box
      sx={{
        display: "flex",
        // justifyContent: "center",
      }}
    >
      <Link href="https://github.com/AKACHI-4" target="_blank" title="Github">
        <IconButton sx={iconStyle}>
          <BsGithub />
        </IconButton>
      </Link>

      <Link
        href="https://linkedin.com/in/adarsh8304"
        target="_blank"
        title="LinkedIn"
      >
        <IconButton sx={iconStyle}>
          <FaLinkedinIn />
        </IconButton>
      </Link>

      <Link
        href="https://x.com/i_adarsh4"
        target="_blank"
        title="Twitter"
      >
        <IconButton sx={iconStyle}>
          <BsTwitter />
        </IconButton>
      </Link>
    </Box>
  );
};
export default Social;
