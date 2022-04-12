import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import NavBar from "../../../components/navbar/NavBar";
import ProductCard from "../../../components/product/ProductCard";

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
      <ProductCard />
    </Stack>
  );
};

const Detail = () => {
  return <PageLayout header={<NavBar position="static" />} main={<Page />} />;
};

export default Detail;
