import { Button, Typography, useMediaQuery, useTheme } from "@mui/material";
import Stack from "@mui/material/Stack";
import PageLayout from "../components/Layout/PageLayout";
import NavBar from "../components/navbar/NavBar";

const Page = () => {
  var dict = {
    one: [15, 4.5],
    two: [34, 3.3],
    three: [67, 5.0],
    four: [32, 4.1],
  };
  var dictstring = JSON.stringify(dict);

  const theme = useTheme();

  const isDesktop = useMediaQuery(theme.breakpoints.up("md"));
  return (
    <Stack spacing={1} bgcolor="#868686">
      <Stack
        height="100vh"
        flexDirection="column"
        justifyContent="center"
        alignItems="center"
        sx={{
          background: "url('/img/bg.jpeg')",
          backgroundSize: "cover",
        }}
      >
        <Stack
          justifyContent="center"
          flexDirection="column"
          alignItems="center"
          spacing={20}
          width="100%"
        >
          <Stack>
            <Typography
              fontFamily="'Beau Rivage', cursive"
              variant={isDesktop ? "h1" : "h4"}
              color="white"
            >
              BeeSportWear
            </Typography>
          </Stack>
          <Stack
            gap={3}
            justifyContent="center"
            alignItems="center"
            flexDirection="row"
            flexWrap={"wrap"}
            sx={{
              maxWidth: "750px",
              width: "100%",
            }}
          >
            <Stack flex={1}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "50px",
                  backgroundColor: "black",
                  opacity: 0.8,
                  color: "#FFD700",
                  "&.MuiButton-root:hover": { background: "black", opacity: 1 },
                }}
              >
                Hakkımızda
              </Button>
            </Stack>
            <Stack flex={1}>
              <Button
                variant="contained"
                sx={{
                  width: "100%",
                  height: "50px",
                  opacity: 0.8,
                  backgroundColor: "black",
                  color: "#FFD700",
                  "&.MuiButton-root:hover": { background: "black", opacity: 1 },
                }}
              >
                İletişim
              </Button>
            </Stack>
          </Stack>
        </Stack>
      </Stack>
    </Stack>
  );
};

const Home = () => {
  return <PageLayout header={<NavBar />} main={<Page />} />;
};

export default Home;
