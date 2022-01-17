import { TextField } from "@mui/material";
import Dialog from "../../../../components/Modal";
import { useState } from "react";
import authService from "../../../../services/auth.service";
import { LoadingButton } from "@mui/lab";

const UserInfo = ({ user, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [newUser, setNewUser] = useState({
    documentNumber: "",
    birthDate: "",
    zipCode: "",
    address: "",
    city: "",
    district: "",
  });

  const changeNewUserData = (event) => {
    const fieldName = event.target.name;
    const test = { ...newUser, [fieldName]: event.target.value };
    setNewUser(test);
  };
  
  const update = async () => {
    try {
      setLoading(true);
      await authService.updateUser(newUser, user?.documentNumber);
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
    <Dialog open={!!user} onClose={onClose}>
      <TextField
        name="documentNumber"
        sx={{ mb: "10px" }}
        label="Cpf: "
        placeholder={user?.documentNumber}
        value={newUser.documentNumber}
        required
        fullWidth
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="birthDate"
        sx={{ mb: "10px" }}
        label="Data de nascimento: "
        placeholder={user?.birthDate}
        value={newUser.birthDate}
        required
        fullWidth
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="zipCode"
        sx={{ mb: "10px" }}
        label="Cep: "
        placeholder={user?.zipCode}
        value={newUser.zipCode}
        required
        fullWidth
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="address"
        sx={{ mb: "10px" }}
        label="Endereco: "
        placeholder={user?.address}
        value={newUser.address}
        required
        fullWidth
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="city"
        sx={{ mb: "10px" }}
        placeholder={user?.city}
        value={newUser.city}
        required
        fullWidth
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="district"
        sx={{ mb: "10px" }}
        label="Bairro: "
        required
        fullWidth
        placeholder={user?.district}
        value={newUser.district}
        onChange={changeNewUserData}
      ></TextField>

      <LoadingButton
        loading={loading}
        fullWidth
        required
        variant="contained"
        onClick={update}
      > Atualizar </LoadingButton>
    </Dialog>
    </>
  );
};

export default UserInfo;
