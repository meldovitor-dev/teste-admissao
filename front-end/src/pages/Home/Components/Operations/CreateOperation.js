import { TextField, Select, MenuItem, InputLabel } from "@mui/material";
import Dialog from "../../../../components/Modal";
import OperationService from "../../../../services/operation.service";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const CreateOperation = ({ open, refreshListAfterOperation, onClose }) => {
  const [loading, setLoading] = useState(false);
  const [newOperation, setOperation] = useState({
    documentNumber: "",
    amount: "",
    type: "",
  });

  const changeNewUserData = (event) => {
    const fieldName = event.target.name;
    const test = { ...newOperation, [fieldName]: event.target.value };
    setOperation(test);
  };
  const createOperation = async () => {
    try {
      await OperationService.createOperation(newOperation);
      setLoading(true);
    } catch (err) {
      alert("Error");
    } finally {
      setLoading(false);
    }
  };
  return (
    <>
      <Dialog open={open} onClose={onClose}>
        <TextField
          name="documentNumber"
          value={newOperation.documentNumber}
          required
          fullWidth
          label="Cpf do cliente:"
          onChange={changeNewUserData}
          sx={{ mb: "10px" }}
        />
        <TextField
          name="amount"
          value={newOperation.amount}
          required
          fullWidth
          label="Valor total:"
          onChange={changeNewUserData}
          sx={{ mb: "10px" }}
        />
        <InputLabel id="demo-simple-select-Notas:">Notas:</InputLabel>
        <Select
          name="type"
          value={newOperation.type}
          onChange={changeNewUserData}
        >
          <MenuItem value={10}>R$ 10</MenuItem>
          <MenuItem value={50}>R$ 50</MenuItem>
          <MenuItem value={100}>R$ 100</MenuItem>
        </Select>

        <LoadingButton
          loading={loading}
          fullWidth
          variant="contained"
          sx={{ mb: 2, mt: 3 }}
          onClick={createOperation}
        >
          Cadastrar operacao
        </LoadingButton>
      </Dialog>
    </>
  );
};

export default CreateOperation;
