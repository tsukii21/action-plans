import { useEffect, useState } from "react"
import AccessSelect from "../ui/AccessSelect"
import Modal from "../ui/Modal"

const ManageAccess = ({ plans, action, ...props }) => {
  // accessLists is the array of accessLists of all plans
  const [accessLists, setAccessLists] = useState(
    plans.map((plan) => plan.accessList)
  )

  // Given the index of a plan, and a new access list (array of people who have access),
  // updates that plan's access list to this new list
  const changeAccessList = (planIdx, newAccessList) =>
    setAccessLists([
      ...accessLists.slice(0, planIdx),
      newAccessList,
      ...accessLists.slice(planIdx + 1),
    ])

  // clears selection when this modal is closed
  const reset = () => setAccessLists(plans.map((plan) => plan.accessList))
  useEffect(reset, [plans, props.isOpen])

  return (
    <Modal
      {...props}
      title="SOP Access"
      actionText="Update"
      action={() => action(accessLists)}
    >
      {plans.map((plan, planIdx) => (
        <AccessSelect
          key={planIdx}
          planName={plan.name}
          accessList={accessLists[planIdx]}
          changeAccessList={(newAccessList) =>
            changeAccessList(planIdx, newAccessList)
          }
        />
      ))}
    </Modal>
  )
}

export default ManageAccess
