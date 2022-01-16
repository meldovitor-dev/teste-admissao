import { Box, Typography, Modal, Stack } from "@mui/material/";
import CloseIcon from "@mui/icons-material/Close";

const Dialog = ({ open, onClose, title, menssage, children }) => {
  return (
    <Modal open={open}>
      <Box
        sx={{
          position: "absolute",
          top: "50%",
          left: "50%",
          transform: "translate(-50%, -50%)",
          width: 400,
          bgcolor: "background.paper",
          border: "2px solid #000",
          boxShadow: 24,
          p: 4,
        }}
      >
        <Stack
          alignItems="center"
          direction="row"
          justifyContent="space-between"
          sx={{ width: "100%" }}
        >
          <Typography variant="h6" component="h2">
            {title}
          </Typography>
          <CloseIcon
            sx={{ bgColor: "black", cursor: "pointer" }}
            onClick={onClose}
          />
        </Stack>
        {menssage && <Typography sx={{ mt: 2 }}>{menssage}</Typography>}
        {children}
      </Box>
    </Modal>
  );
};

export default Dialog;
