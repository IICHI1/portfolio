import { Box } from "@mui/material";
import BtnLink from "../Button/BtnLink";
const ResumeButtons: React.FC = () => {
  return (
    <Box
      sx={{
        mt: "1rem",
      }}
    >
      <BtnLink
        link="https://github.com/IICHI1/portfolio/blob/main/public/resume/W-adarsh_resume.pdf"
        name="Resume"
        variant="contained"
        target="_blank"
      />
      {/* <BtnLink
        link="https://github.com/IICHI1/portfolio/blob/main/public/resume/W-adarsh_resume.pdf"
        name="Get Resume"
        variant="outlined"
      /> */}
    </Box>
  );
};
export default ResumeButtons;

/* <Box>
          {aboutHyperLinks.map((item) => (
            <Link
              key={item.name}
              href={item.link}
              target="_blank"
              underline="hover"
              sx={{
                color: colors.blue[500],
                fontWeight: 700,
                mr: ".3rem",
                fontSize: { xs: "1.3rem", md: "1.4rem" },
              }}
            >
              [{item.name}]
            </Link>
          ))}
        </Box> */
