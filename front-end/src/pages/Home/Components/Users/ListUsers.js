import {
  List,
  ListItem,
  ListItemText,
  Typography,
  Stack,
  IconButton,
} from "@mui/material";
import {
  Delete as DeleteIcon,
  Visibility as VisibilityIcon,
  Add as AddIcon,
} from "@mui/icons-material";

import CreateUser from "./CreateUser";
import { useEffect, useState } from "react";
import authService from "../../../../services/auth.service";
import UserInfo from "./UserInfo";

const ListUsers = () => {
  const [users, setUsers] = useState([]);
  const [selectedUser, setSelectedUser] = useState(null);
  const [creating, setCreating] = useState(false);
  useEffect(() => {
    const getUsers = async () => {
      try {
        const { data } = await authService.getUsers();
        setUsers(data);
      } catch {}
    };
    getUsers();
  }, []);

  const refreshListAfterCreateUser = (newUser) => {
    const newListUsers = [...users, newUser];
    setUsers(newListUsers);
    setCreating(false);
    window.location.reload();
  };

  const deleteUser = async (cpf) => {
    try {
      await authService.deleteUser(cpf);
      const newUsers = users.filter((user) => user.documentNumber !== cpf);
      setUsers(newUsers);
      window.location.reload();
    } catch {}
  };

  const openModelToCreateUser = () => {
    setCreating(true);
  };

  return (
    <>
      <CreateUser
        open={creating}
        refreshListAfterCreateUser={refreshListAfterCreateUser}
      />
      <UserInfo user={selectedUser} onClose={() => setSelectedUser(null)} />
      <Stack alignItems="center" direction="row" justifyContent="space-between">
        <Typography sx={{ fontSize: "28px " }}>Clientes:</Typography>
        <IconButton>
          <AddIcon onClick={openModelToCreateUser} />
        </IconButton>
      </Stack>
      <List sx={{ width: "100%" }}>
        {users.map((x) => (
          <ListItem
            key={x._id}
            secondaryAction={
              <Stack alignItems="center" direction="row">
                <IconButton onClick={() => setSelectedUser(x)}>
                  <VisibilityIcon />
                </IconButton>

                <IconButton onClick={() => deleteUser(x.documentNumber)}>
                  <DeleteIcon />
                </IconButton>
              </Stack>
            }
          >
            <ListItemText primary={x.name} secondary={x.documentNumber} />
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default ListUsers;
