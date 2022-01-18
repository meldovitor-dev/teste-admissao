import { Box, TextField, Typography, Stack } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import adminService from "../../services/admin.service";
import Dialog from "../../components/Modal";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const navigate = useNavigate();
  const sendLogin = async () => {
    let data = {
      email,
      password,
    };
    try {
      setLoading(true);
      const response = await adminService.login(data);
      localStorage.setItem("token", response.data);
      navigate("/principal");
    } catch {
      setError(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog
        open={error}
        onClose={() => setError(false)}
        title="Dados invalido"
        menssage=""
      />
      <Stack
        sx={{
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5" sx={{ mb: "10px" }}>
          Login
        </Typography>
        <Box component="form" sx={{ mt: 1 }}>
          <TextField
            name="email"
            value={email}
            required
            fullWidth
            label="Email"
            onChange={(e) => setEmail(e.target.value)}
            sx={{ mb: "10px" }}
          />
          <TextField
            name="password"
            value={password}
            required
            fullWidth
            label="Senha"
            type="password"
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoadingButton
            loading={loading}
            fullWidth
            variant="contained"
            sx={{ mb: 2, mt: 3 }}
            onClick={sendLogin}
          >
            Entrar
          </LoadingButton>
        </Box>
      </Stack>
    </>
  );
};

export default Login;
