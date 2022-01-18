import { useEffect, useState } from "react";
import { List, ListItem, ListItemText, Stack } from "@mui/material";
import OperationService from "../../services/operation.service";

const Packages = () => {
  const [packages, setpackages] = useState([]);
  useEffect(() => {
    const getPackages = async () => {
      try {
        const { data } = await OperationService.getPackages();
        setpackages(data);
      } catch {}
    };

    getPackages();
  }, {});

  return (
    <List sx={{ width: "100%" }}>
      {packages.map((x) => (
        <ListItem
          key={x._id}
          secondaryAction={
            <Stack alignItems="center" direction="row">
              {/* <IconButton onClick={() => setSelectedOperation(x)}>
                <VisibilityIcon />
              </IconButton> */}
            </Stack>
          }
        >
          <ListItemText
            primary={"R$ " + x.quantity}
            secondary={"Data: " + x.dateOpen}
          />
        </ListItem>
      ))}
    </List>
  );
};

export default Packages;
