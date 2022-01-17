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
      const response = await authService.updateUser(newUser);
      console.log(response);
      window.location.reload();
    } catch {
      setLoading(false);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Dialog open={!!user} onClose={onClose}>
      <TextField
        name="documentNumber"
        sx={{ mb: "10px" }}
        label="Cpf: "
        value={user?.documentNumber}
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="birthDate"
        sx={{ mb: "10px" }}
        label="Data de nascimento: "
        value={user?.birthDate}
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="zipCode"
        sx={{ mb: "10px" }}
        label="Cep: "
        value={user?.zipCode}
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="address"
        sx={{ mb: "10px" }}
        label="Endereco: "
        value={user?.address}
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="city"
        sx={{ mb: "10px" }}
        value={user?.city}
        onChange={changeNewUserData}
      ></TextField>
      <TextField
        name="district"
        sx={{ mb: "10px" }}
        label="Bairro: "
        value={user?.district}
        onChange={changeNewUserData}
      ></TextField>

      <LoadingButton
        loading={loading}
        fullWidth
        variant="contained"
        onClick={update}
      ></LoadingButton>
    </Dialog>
  );
};

export default UserInfo;
