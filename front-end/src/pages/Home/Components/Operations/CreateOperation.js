import { TextField } from "@mui/material";
import Dialog from "../../../../components/Modal";
import { LoadingButton } from "@mui/lab";
import { useState } from "react";

const CreateOperation = ({ open, refreshListAfterCreateOperation }) => {
  const [loading, setLoading] = useState(false);
  const [newOperation, setNewOperation] = useState({
    name: "",
    birthDate: "",
    documentNumber: "",
    zipCode: "",
  });

  const changeNewOperationData = (event) => {
    const fieldName = event.target.name;
    const test = { ...newOperation, [fieldName]: event.target.value };
    setNewOperation(test);
  };

  const createOperation = async () => {
    try {
      setLoading(true);
      refreshListAfterCreateOperation(newOperation);
    } catch {
      alert("Error")
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <Dialog open={open}>
        <TextField
          name="name"
          value={newOperation.name}
          required
          fullWidth
          label="Nome:"
          onChange={changeNewOperationData}
          sx={{ mb: "10px" }}
        />
        <TextField
          name="documentNumber"
          value={newOperation.documentNumber}
          required
          fullWidth
          label="Cpf:"
          onChange={changeNewOperationData}
          sx={{ mb: "10px" }}
        />
        <TextField
          name="zipCode"
          value={newOperation.zipCode}
          required
          fullWidth
          label="Cep:"
          onChange={changeNewOperationData}
          sx={{ mb: "10px" }}
        />

        <LoadingButton
          loading={loading}
          fullWidth
          variant="contained"
          sx={{ mb: 2, mt: 3 }}
          onClick={createOperation}
        >
          Cadastrar Operacao
        </LoadingButton>
      </Dialog>
    </>
  );
};
export default CreateOperation;
