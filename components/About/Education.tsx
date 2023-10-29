import React from "react";
import { Box, colors, Link, Typography, Divider } from "@mui/material";
import HeadingSecondary from "../Heading/HeadingSecondary";

const Education: React.FC = () => {
  return (
    <Box sx={{ mt: "2rem" }}>
      <HeadingSecondary name="Education" />
      <Box>
        <Typography variant="subtitle2" fontWeight={600}>
          B.Tech. Engineering in ICT (Computer Science),
        </Typography>
        <Typography variant="body2" fontWeight={600}>
          <Link
            href="https://cou.ac.bd/"
            underline="hover"
            target="_blank"
            sx={{
              color: colors.blue[500],
              fontWeight: 700,
              cursor: "pointer",
            }}
          >
            Graphic Era Dehradun
          </Link>
          , Uttarakhand
        </Typography>

        <Typography variant="body2">
          2021 - present (Running 5th semester out of 8)
        </Typography>

        <Divider sx={{ mt: "2.5rem" }} />
      </Box>
    </Box>
  );
};
export default Education;
