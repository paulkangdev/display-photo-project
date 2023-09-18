import {
  AppBar,
  Toolbar,
  IconButton,
  Typography,
  Box,
  Container,
  Menu,
  MenuItem,
} from "@mui/material";
import MenuIcon from "@mui/icons-material/Menu";
import ComputerIcon from "@mui/icons-material/Computer";
import { useState } from "react";

const pages = [{ id: 1, name: "Photos", href: "/" }];

function PrimaryNavBar() {
  // This navbar was mostly made from simple adaptations made to https://mui.com/material-ui/react-app-bar/#system-ResponsiveAppBar.js
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);

  const handleOpenNavMenu = (event: React.MouseEvent<HTMLElement>) => {
    setAnchorElNav(event.currentTarget);
  };

  const handleCloseNavMenu = () => {
    setAnchorElNav(null);
  };

  return (
    <AppBar position="static">
      <Box sx={{ flexGrow: 1 }}>
        <Container>
          <Toolbar disableGutters>
            <ComputerIcon />
            <Typography
              variant="h6"
              noWrap
              component="a"
              href="./about"
              sx={{
                mx: 1,
                mr: 2,
                display: { xs: "none", md: "flex" },
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PKANG DEV
            </Typography>

            <Typography
              variant="h5"
              noWrap
              component="a"
              href="./about"
              sx={{
                mr: 2,
                display: { xs: "flex", md: "none" },
                flexGrow: 1,
                fontFamily: "monospace",
                fontWeight: 700,
                letterSpacing: ".3rem",
                color: "inherit",
                textDecoration: "none",
              }}
            >
              PKANG DEV
            </Typography>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "flex",
                  flexDirection: "row-reverse",
                  md: "none",
                },
              }}
            >
              <IconButton
                size="large"
                aria-controls="menu-appbar"
                aria-haspopup="true"
                onClick={handleOpenNavMenu}
                color="inherit"
              >
                <MenuIcon />
              </IconButton>
              <Menu
                id="menu-appbar"
                anchorEl={anchorElNav}
                anchorOrigin={{
                  vertical: "bottom",
                  horizontal: "center",
                }}
                keepMounted
                transformOrigin={{
                  vertical: "top",
                  horizontal: "center",
                }}
                open={Boolean(anchorElNav)}
                onClose={handleCloseNavMenu}
                sx={{
                  display: { xs: "block", md: "none" },
                }}
              >
                {pages.map((page) => (
                  <MenuItem
                    key={`menu-item-${page.id}`}
                    onClick={handleCloseNavMenu}
                  >
                    <Typography
                      textAlign="center"
                      component="a"
                      href={page.href}
                    >
                      {page.name}
                    </Typography>
                  </MenuItem>
                ))}
              </Menu>
            </Box>
            <Box
              sx={{
                flexGrow: 1,
                display: {
                  xs: "none",
                  md: "flex",
                  flexDirection: "row-reverse",
                },
              }}
            >
              {pages.map((page) => (
                <Typography
                  key={`page-link-page.id`}
                  textAlign="center"
                  component="a"
                  href={page.href}
                  sx={{ my: 2, color: "white", display: "block" }}
                >
                  {page.name}
                </Typography>
              ))}
            </Box>
          </Toolbar>
        </Container>
      </Box>
    </AppBar>
  );
}

export default PrimaryNavBar;
