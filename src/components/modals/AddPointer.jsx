import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Field from "../ui/Field"
import Modal from "../ui/Modal"

const AddPointer = ({ action, ...props }) => {
  const [pointerName, setPointerName] = useState("")

  // clears pointer name when modal is closed
  const reset = () => setPointerName("")
  useEffect(reset, [props.isOpen])

  return (
    <Modal
      {...props}
      title="New Pointer"
      actionText="Create"
      action={() => action(pointerName)}
    >
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor.
        Sit amet, consectetur adipiscing consectetur adipiscing elit.
      </Typography>
      <Field
        label="NAME"
        value={pointerName}
        onChange={(e) => setPointerName(e.target.value)}
        placeholder="Name Your Pointer"
        variant="filled"
        margin="normal"
        fullWidth
      />
    </Modal>
  )
}

export default AddPointer
