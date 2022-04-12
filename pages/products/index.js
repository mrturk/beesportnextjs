import Grid from "@mui/material/Grid";
import Paper from "@mui/material/Paper";
import Stack from "@mui/material/Stack";
import { experimentalStyled as styled } from "@mui/material/styles";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageLayout from "../../components/Layout/PageLayout";
import NavBar from "../../components/navbar/NavBar";
import ProductCard from "../../components/product/ProductCard";

const Item = styled(Paper)(({ theme }) => ({
  backgroundColor: theme.palette.mode === "dark" ? "#1A2027" : "#fff",
  ...theme.typography.body2,
  padding: theme.spacing(2),
  textAlign: "center",
  color: theme.palette.text.secondary,
}));

const Page = () => {
  const router = useRouter();

  const { productDetails, productId } = router.query;

  useEffect(() => {
    if (productDetails && productId) {
      console.log(productId);
      console.log(productDetails);
    }
  }, [productDetails, productId]);

  if (!productDetails) {
    return <>404 not found</>;
  }

  return (
    <Stack marginTop="20px">
      <Grid container flex={1} spacing={{ xs: 2, md: 2 }}>
        {Array.from(Array(20)).map((_, index) => (
          <Grid item xs={12} md={4} lg={4} key={index}>
            <ProductCard
              onClick={() => {
                router.push({
                  pathname: "/products/detail",
                  query: {
                    productDetails: "test",
                    productId: index,
                  },
                });
              }}
            />
          </Grid>
        ))}
      </Grid>
    </Stack>
  );
};

const Products = () => {
  return <PageLayout header={<NavBar position="static" />} main={<Page />} />;
};

export default Products;
