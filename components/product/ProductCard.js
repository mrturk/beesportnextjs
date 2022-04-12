import Button from "@mui/material/Button";
import Card from "@mui/material/Card";
import CardActions from "@mui/material/CardActions";
import CardContent from "@mui/material/CardContent";
import CardMedia from "@mui/material/CardMedia";
import Stack from "@mui/material/Stack";
import Typography from "@mui/material/Typography";

const ProductCard = ({
  productTitle = "Title",
  price = 100,
  productDescription = " Lizards are a widespread group of squamate reptiles, with over 6,000",
  onClick,
}) => {
  return (
    <Stack justifyContent="center" alignItems="center">
      <Card sx={{ maxWidth: 345 }}>
        <CardMedia
          component="img"
          sx={{ backgroundSize: "cover" }}
          image="https://www.teahub.io/photos/full/49-491755_arctic-monkeys.jpg"
          alt="green iguana"
        />
        <CardContent sx={{ display: "flex", flexDirection: "column" }}>
          <Stack justifyContent="space-between" flexDirection="row">
            <Stack>
              <Typography gutterBottom variant="h5" component="div">
                {productTitle}
              </Typography>
            </Stack>
            <Stack>
              <Typography gutterBottom variant="h5" component="div">
                {`${price} ₺`}
              </Typography>
            </Stack>
          </Stack>
          <Typography variant="body2" color="text.secondary">
            {productDescription}
          </Typography>
        </CardContent>
        <CardActions sx={{ justifyContent: "center" }}>
          <Button onClick={onClick} size="small">
            Ürün Detayı
          </Button>
        </CardActions>
      </Card>
    </Stack>
  );
};

export default ProductCard;
