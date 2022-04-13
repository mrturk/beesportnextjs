/* eslint-disable @next/next/no-img-element */
import { Button } from "@mui/material";
import Stack from "@mui/material/Stack";

const ProductDetails = ({
  productTitle = "Title",
  price = 100,
  productDescription = " Lizards are a widespread group of squamate reptiles, with over 6,000",
  onClick,
}) => {
  return (
    <Stack height="100vh">
      <Stack justifyContent="center" alignItems="center" gap={2} flex={1}>
        <Stack
          padding="50px"
          flexDirection="row"
          flexWrap="wrap"
          gap={3}
          justifyContent="center"
          alignItems="center"
          sx={{
            boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px",
            opacity: 0.9,
            borderRadius: "20px",
            backgroundColor: "transparent",
          }}
        >
          <Stack maxHeight="500px">
            <img
              style={{
                maxWidth: "500px",
                width: "100%",
                borderRadius: "20px",
                opacity: 1,
              }}
              src="../img/bg.jpeg"
              alt="dsad"
              loading="lazy"
            />
          </Stack>
          <Stack
            height="auto"
            justifyContent="center"
            alignItems="center"
            gap={3}
          >
            <Stack>{productTitle}</Stack>
            <Stack>{productDescription}</Stack>
            <Stack> {`${price} ₺`}</Stack>
            <Stack>
              <Button sx={{ color: "white" }} onClick={onClick}>
                Ürün Hakkında Bilgi Al
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
