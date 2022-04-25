import { Button, Menu, MenuItem, Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect, useState } from "react";

const NavBarItem = ({ text, data }) => {
  const [anchorEl, setAnchorEl] = useState(false);
  const [navItem, setNavItem] = useState([]);
  const open = Boolean(anchorEl);

  const router = useRouter();

  const itemsOpen = (event) => {
    setAnchorEl(event.currentTarget);
  };
  const itemsClose = () => {
    setAnchorEl(null);
  };
  useEffect(() => {
    if (data) {
      setNavItem(data);
    }
  }, [data]);
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
        {navItem.map((item, index) => (
          <MenuItem
            key={index}
            onClick={() => {
              router.push({
                pathname: "/products",
                query: {
                  productDetails: item.type,
                  productId: item.id,
                  productClassId: item.product_class_id,
                },
              });
              itemsClose();
            }}
          >
            {item.type}
          </MenuItem>
        ))}
      </Menu>
    </Stack>
  );
};

export default NavBarItem;
