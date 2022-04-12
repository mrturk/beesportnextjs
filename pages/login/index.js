import { Button, Stack, TextField } from "@mui/material";
import { useState } from "react";

const Login = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Stack
      sx={{
        background: "url('/img/login-bg.jpg')",
        backgroundSize: "cover",
      }}
      height="100vh"
      justifyContent="center"
      alignItems="center"
      flex={1}
    >
      <Stack
        justifyContent="center"
        bgcolor="white"
        borderRadius="30px"
        paddingX="30px"
        gap={2}
        sx={{
          maxWidth: "500px",
          width: "100%",
          height: "500px",
          boxShadow:
            "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
        }}
      >
        <Stack>
          <TextField
            onChange={(e) => {
              setUsername(e.target.value);
            }}
            id="standard-username"
            label="Kullanıcı Adı"
            variant="standard"
          />
        </Stack>
        <Stack>
          <TextField
            onChange={(e) => {
              setPassword(e.target.value);
            }}
            type="password"
            id="standard-password"
            label="Şifre"
            variant="standard"
          />
        </Stack>
        <Stack>
          <Button
            onClick={() => {
              const value = {
                username: username,
                password: password,
              };
              console.log(value);
            }}
            sx={{
              boxShadow:
                "rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px, rgba(10, 37, 64, 0.35) 0px -2px 6px 0px inset",
            }}
            variant="contained"
          >
            Giriş
          </Button>
        </Stack>
      </Stack>
    </Stack>
  );
};

export default Login;
