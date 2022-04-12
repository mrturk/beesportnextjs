import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const NavBarItem = ({ text, data }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const itemsOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const itemsClose = () => {
    setAnchorEl(null);
  };

  return (
    <Stack>
      <Button
        variant="contained"
        sx={{
          backgroundColor: "black",
          "&.MuiButton-root:hover": { background: "black" },
        }}
        onClick={itemsOpen}
      >
        {text}
      </Button>
      <Menu
        id="basic-menu"
        anchorEl={anchorEl}
        open={open}
        onClose={itemsClose}
        MenuListProps={{
          "aria-labelledby": "basic-button",
        }}
      >
        {Array.from(Array(data)).map((_, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              router.push({
                pathname: "/products",
                query: {
                  productDetails: text,
                  productId: index,
                },
              });
              itemsClose();
            }}
          >
            {index}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};

export default NavBarItem;
