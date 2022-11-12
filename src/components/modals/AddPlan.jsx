import { Typography } from "@mui/material"
import { useEffect, useState } from "react"
import Field from "../ui/Field"
import Modal from "../ui/Modal"

const AddPlan = ({ action, ...props }) => {
  const [planName, setPlanName] = useState("")

  // clears text field when this modal is closed
  const reset = () => setPlanName("")
  useEffect(reset, [props.isOpen])

  return (
    <Modal
      {...props}
      title="New Plan"
      actionText="Create"
      action={() => action(planName)}
    >
      <Typography variant="body1">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nulla auctor.
        Sit amet, consectetur adipiscing consectetur adipiscing elit.
      </Typography>
      <Field
        label="NAME"
        value={planName}
        onChange={(e) => setPlanName(e.target.value)}
        placeholder="Name Your Plan"
        variant="filled"
        margin="normal"
        fullWidth
      />
    </Modal>
  )
}

export default AddPlan
