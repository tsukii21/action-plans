import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Field from "../ui/Field"
import Modal from "../ui/Modal"

const AddCategory = ({ action, ...props }) => {
  const [categoryName, setCategoryName] = useState("")

  // clears category name when this modal is closed
  const reset = () => setCategoryName("")
  useEffect(reset, [props.isOpen])

  return (
    <Modal
      {...props}
      title="New Category"
      actionText="Create"
      action={() => action(categoryName)}
    >
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor.
        Sit amet, consectetur adipiscing consectetur adipiscing elit.
      </Typography>
      <Field
        label="NAME"
        value={categoryName}
        onChange={(e) => setCategoryName(e.target.value)}
        placeholder="Name Your category"
        variant="filled"
        margin="normal"
        fullWidth
      />
    </Modal>
  )
}

export default AddCategory
