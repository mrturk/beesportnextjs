import Stack from "@mui/material/Stack";
const PageLayout = ({ header, main, footer }) => {
  return (
    <Stack height="100vh" flexDirection="column">
      <Stack>{header}</Stack>
      <Stack>{main}</Stack>
    </Stack>
  );
};

export default PageLayout;
