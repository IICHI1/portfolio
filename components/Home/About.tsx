import { Box, Divider, Typography } from "@mui/material";
import Link from "next/link";
import React from "react";
import BtnSecondary from "../Button/BtnSecondary";
import HeadingSecondary from "../Heading/HeadingSecondary";
import Details from "../About/Details";

const About: React.FC = () => {
  return (
    <Box sx={{ pt: "2rem" }}>
      <HeadingSecondary name="Me" />
      <Typography variant="body2">
        {`I'm`} an enthusiastic programmer with expertise in web technologies, particularly JavaScript. I also have hands-on experience with GCP and am currently diving into MERN stack and machine learning. {`I'm`} an active open-source contributor, having completed Hacktoberfest twice and participated in Octernship.
      </Typography>

      <Details />

      <Divider sx={{ mt: "2.5rem" }} />
    </Box>
  );
};
export default About;
