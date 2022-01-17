import { Box, Grid, Stack, TextField, Typography } from "@mui/material";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { LoadingButton } from "@mui/lab";
import Dialog from "../../components/Modal";
import adminService from "../../services/admin.service";

const Register = () => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState(false);
  const [loading, setLoading] = useState(false);
  const negative = useNavigate();

  const sendRegister = async () => {
    let data = {
      name,
      email,
      password,
    };
    try {
      setLoading(true);
      await adminService.resgister(data);
      negative("/");
    } catch {
      setLoading(false);
      setError(true);
    } finally {
      setLoading(false);
    }
  };
  const isValid = name && email && password;
  return (
    <>
      <Dialog
        open={error}
        onClose={() => setError(false)}
        title="Login invalido"
        menssage="E-mail ou senha incorreto"
      />
      <Stack
        sx={{
          alignItems: "center",
          width: "100vw",
          height: "100vh",
          justifyContent: "center",
        }}
      >
        <Typography component="h1" variant="h5">
          Cadastro
        </Typography>
        <Box component="form" noValidate sx={{ mt: 3 }}>
          <Grid container spacing={2}>
            <Grid item xs={12}>
              <TextField
                name="firstName"
                required
                fullWidth
                value={name}
                label="Nome"
                onChange={(e) => setName(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="email"
                required
                fullWidth
                value={email}
                label="Email"
                onChange={(e) => setEmail(e.target.value)}
              />
            </Grid>
            <Grid item xs={12}>
              <TextField
                name="password"
                required
                fullWidth
                value={password}
                label="Senha"
                type="password"
                onChange={(e) => setPassword(e.target.value)}
              />
            </Grid>
          </Grid>
          <LoadingButton
            loading={loading}
            fullWidth
            variant="contained"
            sx={{ mb: 2, mt: 3 }}
            onClick={sendRegister}
            disabled={!isValid}
          >
            Cadastro
          </LoadingButton>
        </Box>
      </Stack>
    </>
  );
};

export default Register;
