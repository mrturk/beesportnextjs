import { AccountCircle } from "@mui/icons-material";
import MenuIcon from "@mui/icons-material/Menu";
import {
  Avatar,
  Button,
  Drawer,
  Stack,
  Typography,
  useMediaQuery,
  useTheme,
} from "@mui/material";
import AppBar from "@mui/material/AppBar";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import { useRouter } from "next/router";
import { useState } from "react";
import DrawerItem from "../draweritem/DrawerItem";
import NavBarItem from "../navbaritem/NavBarItem";

const NavBar = ({ position = "fixed" }) => {
  const [open, setOpen] = useState(false);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));

  const router = useRouter();

  return (
    <AppBar sx={{ backgroundColor: "black" }} position={position}>
      <Toolbar>
        {!isDesktop && (
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 2 }}
            onClick={() => {
              setOpen(true);
            }}
          >
            <MenuIcon />
          </IconButton>
        )}
        {isDesktop && (
          <Button
            variant="contained"
            sx={{
              fontFamily: "'Oswald', sans-serif",

              backgroundColor: "black",
              "&.MuiButton-root:hover": { background: "black" },
            }}
            onClick={() => {
              router.push("/");
            }}
          >
            <Avatar
              sx={{ width: "50px", height: "50px", marginRight: "5px" }}
              alt="BeeSportWear"
              src="../img/logo.jpg"
            />
            BeeSportWear
          </Button>
        )}
        {isDesktop && (
          <Stack flexDirection="row">
            {Array.from(Array(5)).map((_, index) => (
              <NavBarItem
                key={index}
                text={index}
                data={Math.floor(Math.random() * 11) + 1}
              />
            ))}
          </Stack>
        )}

        <Stack flex={1} flexDirection="row" justifyContent="flex-end">
          {!isDesktop && (
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
                marginRight: "5px",
                margin: "auto",
                cursor: "pointer",
              }}
              onClick={() => {
                router.push("/");
              }}
              alt="BeeSportWear"
              src="../img/logo.jpg"
            />
          )}
          <IconButton
            onClick={() => {
              window.open("/login", "_blank");
            }}
            color="inherit"
          >
            <AccountCircle />
          </IconButton>
        </Stack>
      </Toolbar>
      {!isDesktop && (
        <Drawer
          sx={{
            "& .MuiDrawer-paper": {
              backgroundColor: "#353535",
              maxWidth: "300px",
              width: "100%",
              paddingTop: "30px",
            },
          }}
          anchor="left"
          open={open}
          onClose={() => {
            setOpen(false);
          }}
        >
          <Stack
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            sx={{
              cursor: "pointer",
            }}
            onClick={() => {
              setOpen(false);
              router.push("/");
            }}
          >
            <Avatar
              sx={{
                width: "50px",
                height: "50px",
                marginRight: "5px",

                cursor: "pointer",
              }}
              onClick={() => {
                router.push("/");
              }}
              alt="BeeSportWear"
              src="../img/logo.jpg"
            />
            <Typography color="white" variant="h5">
              BeeSportWear
            </Typography>
          </Stack>
          {Array.from(Array(5)).map((_, index) => (
            <DrawerItem
              key={index}
              text={index}
              data={Math.floor(Math.random() * 11) + 1}
            />
          ))}
        </Drawer>
      )}
    </AppBar>
  );
};

export default NavBar;
