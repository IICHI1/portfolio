import React from "react";
import Link from "next/link";
import {
  Container,
  Typography,
  Toolbar,
  Box,
  AppBar,
  IconButton,
} from "@mui/material";
import { keyframes } from "@emotion/react";
import { MdDarkMode, MdLightMode } from "react-icons/md";
import { useTheme } from "../../lib/ThemeContext";

const flickerAnimation = keyframes`
    0% {
      opacity: 1;
    }
    50% {
      opacity: 0;
    }
    100% {
      opacity: 1;
    }
  `;

const Navbar: React.FC = () => {
  const colorMode = useTheme();

  return (
    <AppBar position="fixed" sx={{ bgcolor: "primary.light" }}>
      <Toolbar>
        <Container maxWidth="md">
          <Box
            sx={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
            }}
          >
            <Box sx={{ display: "flex", alignItems: "center" }}>
              <Link href="/">
                <Box
                  sx={{
                    display: "flex",
                    alignItems: "center",
                    cursor: "pointer",
                  }}
                >
                  <Typography
                    variant="h6"
                    sx={{
                      // fontFamily: '"Titillium Web", sans-serif',
                      fontWeight: 800,
                    }}
                    textAlign="center"
                  >
                    {`<`}
                    <Box
                      component="span"
                      sx={{
                        animation: `${flickerAnimation} 1.5s infinite`,
                        color: "secondary.main",
                        fontWeight: 800,
                      }}
                    >
                      _
                    </Box>
                    {`/>`}
                  </Typography>
                  <Typography
                    variant="h6"
                    component="span"
                    sx={{
                      fontWeight: 800,
                      ml: ".5rem",
                      fontFamily: "Pacifico",
                      letterSpacing: "1px",
                    }}
                  >
                    <Box component="span" sx={{ color: "secondary.main" }}>
                      Adarsh{" "}
                    </Box>
                  </Typography>
                </Box>
              </Link>
            </Box>

            <Box sx={{ display: "flex", alignItems: "center" }}>
              {colorMode.mode === "light" ? (
                <IconButton
                  sx={{ mr: { xs: 1, md: 0 } }}
                  onClick={colorMode.toggleColorMode}
                >
                  <MdDarkMode style={{ color: "#000" }} />
                </IconButton>
              ) : (
                <IconButton
                  sx={{ mr: { xs: 1, md: 0 } }}
                  onClick={colorMode.toggleColorMode}
                >
                  <MdLightMode />
                </IconButton>
              )}
            </Box>
          </Box>
        </Container>
      </Toolbar>
    </AppBar>
  );
};

export default Navbar;
