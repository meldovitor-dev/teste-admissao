import { Typography } from "@mui/material";
import Dialog from "../../../../components/Modal";

const UserInfo = ({ user, onClose }) => (
  <Dialog open={!!user} onClose={onClose}>
    <Typography sx={{ mb: "10px" }}>Cpf: {user?.documentNumber}</Typography>
    <Typography sx={{ mb: "10px" }}>
      Data de nascimento: {user?.birthDate}
    </Typography>
    <Typography sx={{ mb: "10px" }}>Cep: {user?.zipCode}</Typography>
    <Typography sx={{ mb: "10px" }}>Endereco: {user?.address}</Typography>
    <Typography sx={{ mb: "10px" }}>Cidade: {user?.city}</Typography>
    <Typography sx={{ mb: "10px" }}>Bairro: {user?.district}</Typography>
  </Dialog>
);

export default UserInfo;
