import { Stack } from "@mui/material";
import { useRouter } from "next/router";
import { useEffect } from "react";
import PageLayout from "../../../components/Layout/PageLayout";
import NavBar from "../../../components/navbar/NavBar";
import ProductDetails from "../../../components/product/ProductDetails";

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
      <ProductDetails
        onClick={() => {
          const message = `Ürün hakkında bilgi alabilir miyim ${window.location.href}`;
          window.open(`https://wa.me/905332321455?text=${message}`, "_blank");
        }}
      />
    </Stack>
  );
};

const Detail = () => {
  return <PageLayout header={<NavBar position="fixed" />} main={<Page />} />;
};

export default Detail;
