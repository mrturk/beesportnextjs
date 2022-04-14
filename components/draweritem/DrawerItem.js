import { ExpandLess, ExpandMore } from "@mui/icons-material";
import {
  Collapse,
  Divider,
  List,
  ListItemButton,
  ListItemText,
  Stack,
} from "@mui/material";
import { useRouter } from "next/router";
import { useState } from "react";

const DrawerItem = ({ text, data }) => {
  const [open, setOpen] = useState(false);

  const router = useRouter();

  const handleClick = () => {
    setOpen(!open);
  };

  return (
    <Stack>
      <ListItemButton
        sx={{
          color: "white",

          borderBottom: 0,
        }}
        onClick={handleClick}
      >
        <ListItemText primary={text} />
        {open ? <ExpandLess /> : <ExpandMore />}
      </ListItemButton>
      {Array.from(Array(data)).map((_, index) => (
        <>
          <Collapse key={index} in={open} timeout="auto" unmountOnExit>
            <Divider sx={{ borderColor: "#0000006e" }} />
            <List component="div" disablePadding>
              <ListItemButton
                onClick={() => {
                  router.push({
                    pathname: "/products",
                    query: {
                      productDetails: text,
                      productId: index,
                    },
                  });
                }}
                sx={{ pl: 4, color: "white" }}
              >
                <ListItemText primary={index} />
              </ListItemButton>
            </List>
            <Divider sx={{ borderColor: "#0000006e" }} />
          </Collapse>
        </>
      ))}
    </Stack>
  );
};

export default DrawerItem;
