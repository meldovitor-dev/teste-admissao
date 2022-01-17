import { Typography } from "@mui/material";
import Dialog from "../../../../components/Modal";

const OperationInfo = ({ Operation, onClose }) => (
  <Dialog open={!!Operation} onClose={onClose}>
    <Typography sx={{ mb: "10px" }}>Id: {Operation?._id}</Typography>
    <Typography sx={{ mb: "10px" }}>
      Total: {Operation?.amount}
    </Typography>
    <Typography sx={{ mb: "10px" }}>Situacao: {Operation?.progress}</Typography>
  </Dialog>
);

export default OperationInfo;
