import { Box, Button, Container, CssBaseline, Grid, Paper, TextField, Typography, } from "@mui/material";
import React from "react";
import { useNotification } from "../../context/notification.context";
import { LoginValidate } from "../../utils/validateForm";

type LoginType = {
  username: string;
  password: string;
};

export const LoginPage: React.FC<{}> = () => {
  const { getError, getSuccess }= useNotification()
  const [loginData, setLoginData] = React.useState<LoginType>({
    username: "",
    password: "",
  });

  const dataLogin = (e: React.ChangeEvent<HTMLInputElement>) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e: React.FormEvent<HTMLInputElement>) => {
    e.preventDefault();

    LoginValidate.validate(loginData).then(() => {
      getSuccess("Login is currently disabled")
    }).catch((error) => {
      getError(error.message)
    })

  };

  return (
    <Container maxWidth="sm">
      <CssBaseline />
      <Grid
        container
        direction="column"
        alignContent="center"
        justifyContent="center"
        sx={{ minHeight: "100vh" }}
      >
        <Grid item>
          <Paper sx={{ padding: "1.2em", borderRadius: "0.5em" }}>
            <Typography variant="h4">Login</Typography>
            <Box component="form" onSubmit={handleSubmit}>
              <TextField
                name="username"
                type="text"
                label="Email"
                onChange={dataLogin}
                fullWidth
                margin="normal"
                sx={{ mt: 2, mb: 1.5 }}
              />
              <TextField
                name="password"
                type="password"
                label="Password"
                onChange={dataLogin}
                fullWidth
                margin="normal"
                sx={{ mt: 1, mb: 1.5 }}
              />
              <Button
                type="submit"
                fullWidth
                variant="contained"
                sx={{ mt: 1.5, mb: 2 }}
              >
                Login
              </Button>
            </Box>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
};
