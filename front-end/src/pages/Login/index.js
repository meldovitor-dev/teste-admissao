import {
  Button,
  Box,
  Container,
  Grid,
  TextField,
  Typography,
} from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import authService from "../../services/admin.service";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const negative = useNavigate();

  const sendLogin = async (emailSend, passwordSend) => {
    let data = {
      email: emailSend,
      password: passwordSend
    }
    try {
      const test = await authService.login(data);
      console.log(test);
      //negative('/home')
    } catch (err) {
      alert('Usuario invalido');
    }
  };
  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 10,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: "10px" }}>
          Sign in
        </Typography>
        <Box component="form" noValidate sx={{ mt: 1 }}>
          <TextField
            required
            fullWidth
            label="Email Address"
            name="email"
            value={email}
            onChange={(e) => {
              setEmail(e.target.value);
            }}
            sx={{ mb: "10px" }}
          />
          <TextField
            required
            fullWidth
            name="password"
            type="password"
            value={password}
            onChange={(e) => {
                setPassword(e.target.value);
            }}
          />

          <Button
            fullWidth
            variant="contained"
            sx={{ mt: 3, mb: 2 }}
            onClick={() => sendLogin(email, password)}
          >
            Sign In
          </Button>
          <Grid container>
            <Grid item xs>
              {/* <Link href="#" variant="body2">
                      Forgot password?
                    </Link> */}
            </Grid>
            <Grid item>
              {/* <Link href="#" variant="body2">
                      {"Don't have an account? Sign Up"}
                    </Link> */}
            </Grid>
          </Grid>
        </Box>
      </Box>
    </Container>
  );
};

export default Login;
