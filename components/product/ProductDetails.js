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
          flexDirection="row"
          flexWrap="wrap"
          justifyContent="center"
          alignItems="center"
          sx={{ boxShadow: "rgba(0, 0, 0, 0.24) 0px 3px 8px" }}
        >
          <Stack maxHeight="500px">
            <img
              style={{ maxWidth: "500px", width: "100%" }}
              src="../img/bg.jpeg"
              alt="dsad"
              loading="lazy"
            />
          </Stack>
          <Stack justifyContent="center" alignItems="center" gap={3}>
            <Stack>{productTitle}</Stack>
            <Stack>{productDescription}</Stack>
            <Stack> {`${price} ₺`}</Stack>
            <Stack>
              <Button onClick={onClick}>Ürün Hakkında Bilgi Al</Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default ProductDetails;
