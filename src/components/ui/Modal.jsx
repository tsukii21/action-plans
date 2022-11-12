import {
  Dialog,
  DialogTitle,
  DialogContent,
  DialogActions,
  Button,
} from "@mui/material"

// Generic Modal wrapper component

const Modal = ({ isOpen, close, title, actionText, action, children }) => {
  return (
    <Dialog
      maxWidth="sm"
      fullWidth
      open={isOpen}
      onClose={close}
      PaperProps={{
        sx: {
          backgroundColor: "#F8FAFC",
          borderRadius: 3,
        },
      }}
    >
      <DialogTitle sx={{ fontWeight: 700, fontSize: 32 }}>{title}</DialogTitle>
      <DialogContent>{children}</DialogContent>
      <DialogActions sx={{ px: 4, pb: 4 }}>
        <Button variant="outlined" sx={{ px: 5 }} color="error" onClick={close}>
          Cancel
        </Button>
        <Button
          variant="contained"
          sx={{ px: 5 }}
          onClick={() => {
            action()
            close()
          }}
          autoFocus
        >
          {actionText}
        </Button>
      </DialogActions>
    </Dialog>
  )
}

export default Modal
