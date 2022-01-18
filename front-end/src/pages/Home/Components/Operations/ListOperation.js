import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Visibility as VisibilityIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import CreateOperation from "./CreateOperation";
import { useEffect, useState } from "react";
import OperationService from "../../../../services/operation.service";
import OperationInfo from "./OperationInfo";

const ListOperation = () => {
  const [operation, setOperation] = useState([]);
  const [selectedOperation, setSelectedOperation] = useState(null);
  const [creating, setCreating] = useState(false);
  useEffect(() => {
    const getOperation = async () => {
      try {
        const { data } = await OperationService.getOperations();
        setOperation(data);
      } catch {}
    };
    getOperation();
  }, []);

  const refreshListAfterCreateOperation = (newOperation) => {
    const newListOperation = [...operation, newOperation];
    setOperation(newListOperation);
    setCreating(false);
  };

  const openModelToCreateOperation = () => {
    setCreating(true);
  };

  return (
    <>
      <CreateOperation
          open={creating}
          refreshListAfterCreateOperation={refreshListAfterCreateOperation}
          onClose={() => setCreating(false)}
        />
      <OperationInfo Operation={selectedOperation} onClose={() => setSelectedOperation(null)} />
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Typography sx={{ fontSize: "28px " }}>Operacoes:</Typography>
        <IconButton>
          <AddIcon onClick={openModelToCreateOperation} />
        </IconButton>
      </Stack>
      <List sx={{ width: "100%" }}>
        {operation.map((x) => (
          <ListItem
            key={x._id}
            secondaryAction={
              <Stack alignItems="center" direction="row">
                <IconButton onClick={() => setSelectedOperation(x)}>
                  <VisibilityIcon />
                </IconButton>
              </Stack>
            }
          >
            <ListItemText
              primary={"R$ " + x.amount}
              secondary={"Estado: " + x.progress}
            />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListOperation;
