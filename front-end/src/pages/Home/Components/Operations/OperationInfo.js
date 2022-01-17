import { Typography } from "@mui/material";
import Dialog from "../../../../components/Modal";

const OperationInfo = ({ Operation, onClose }) => {

  const date = new Date(Operation?.dateCreate);
  let dia = date.getDate().toString().padStart(2, '0');
  let mes = (date.getMonth()+1).toString().padStart(2, '0');
  let ano = date.getFullYear();

  return (
    <Dialog open={!!Operation} onClose={onClose}>
      <Typography sx={{ mb: "10px" }}>Id: {Operation?._id}</Typography>
      <Typography sx={{ mb: "10px" }}>Total: {Operation?.amount}</Typography>
      <Typography sx={{ mb: "10px" }}>
        Situacao: {Operation?.progress}
      </Typography>
      <Typography sx={{ mb: "10px" }}>
        Criado em: {dia + "/" + mes + "/" + ano}
      </Typography>
    </Dialog>
  );
};

export default OperationInfo;
