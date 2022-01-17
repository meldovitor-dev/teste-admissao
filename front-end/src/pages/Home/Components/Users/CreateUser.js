import { TextField } from "@mui/material";
import Dialog from "../../../../components/Modal";
import authService from "../../../../services/auth.service";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const CreateUser = ({ open, refreshListAfterCreateUser, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    name: "",
    birthDate: "",
    documentNumber: "",
    zipCode: "",
  });

  const changeNewUserData = (event) => {
    const fieldName = event.target.name;
    const test = { ...newUser, [fieldName]: event.target.value };
    setNewUser(test);
  };
  const createUser = async () => {
    try {
      setLoading(true);
      await authService.createUser(newUser);
      refreshListAfterCreateUser(newUser);
    } catch {
      alert("Error")
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <TextField
          name="name"
          value={newUser.name}
          required
          fullWidth
          label="Nome:"
          onChange={changeNewUserData}
          sx={{ mb: "10px" }}
        />
        <TextField
          name="birthDate"
          value={newUser.birthDate}
          label="Data de nascimento:"
          required
          fullWidth
          onChange={changeNewUserData}
          sx={{ mb: "10px" }}
        />
        <TextField
          name="documentNumber"
          value={newUser.documentNumber}
          required
          fullWidth
          label="Cpf:"
          onChange={changeNewUserData}
          sx={{ mb: "10px" }}
        />
        <TextField
          name="zipCode"
          value={newUser.zipCode}
          required
          fullWidth
          label="Cep:"
          onChange={changeNewUserData}
          sx={{ mb: "10px" }}
        />

        <LoadingButton
          loading={loading}
          fullWidth
          variant="contained"
          sx={{ mb: 2, mt: 3 }}
          onClick={createUser}
        >
          Cadastrar Usuario
        </LoadingButton>
      </Dialog>
    </>
  );
};

export default CreateUser;
