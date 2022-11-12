import { Typography } from "@mui/material"
import Modal from "../ui/Modal"

const DeleteModal = ({ type, ...props }) => {
  return (
    <Modal {...props} title={`Delete ${type}`} actionText="Delete">
      <Typography variant="body1">
        Are you sure you want this {type}? This action can not be undone.
      </Typography>
    </Modal>
  )
}

export default DeleteModal
