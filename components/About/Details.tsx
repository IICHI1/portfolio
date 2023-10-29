import React from "react";
import { Box, Typography } from "@mui/material";
import ImageTemplate from "../common/ImageTemplate";
import Social from "../common/Social";
import { MdSchool, MdPlace, MdEmail } from "react-icons/md";
import ResumeButtons from "../common/ResumeButtons";

const bio = [
  {
    icon: <MdPlace />,
    name: "Dehradun, Uttarakhand, India",
  },
  {
    icon: <MdEmail />,
    name: "adarshrawat8304@gmail.com",
  },
];

const Details: React.FC = () => {
  return (
    <React.Fragment>
      <Box
        sx={{
          pt: "3rem",
          // pb: "2rem",
          // display: "flex",
          // flexDirection: "column",
          // justifyContent: "center",
          // alignItems: "center",
        }}
      >
        <Box mt=".5rem" mb="1rem">
          <Social />
        </Box>

        <Box sx={{ mt: "1rem" }}>
          {bio.map((item) => (
            <Typography
              key={item.name}
              component="p"
              sx={{
                display: "flex",
                alignItems: "center",
                fontSize: "1.5rem",
                // justifyContent: "center",
              }}
            >
              {item.icon}
              <Box component="span" ml="3px">
                {item.name}
              </Box>
            </Typography>
          ))}
        </Box>

      </Box>
    </React.Fragment>
  );
};
export default Details;
