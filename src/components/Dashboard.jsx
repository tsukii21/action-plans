import { Button, Container, Typography, Stack } from "@mui/material"
import { useState } from "react"
import { planList } from "../data"
import AddPlan from "./modals/AddPlan"
import ManageAccess from "./modals/ManageAccess"
import Plan from "./Plan"

const Dashboard = () => {
  // plan stores the plans with their categories and pointers
  const [plans, setPlans] = useState(planList)

  // control code for ADD PLAN and MANAGE ACCESS modals
  const [addPlanModal, setAddPlanModal] = useState(false)
  const [manageAccessModal, setManageAccessModal] = useState(false)

  const openAddPlanModal = () => setAddPlanModal(true)
  const closeAddPlanModal = () => setAddPlanModal(false)

  const openManageAccessModal = () => setManageAccessModal(true)
  const closeManageAccessModal = () => setManageAccessModal(false)

  // takes plan name and adds a new plan in state
  const addPlan = (planName) =>
    setPlans([...plans, { name: planName, accessList: [], categories: [] }])

  // takes plan index and removes that plan from state
  const deletePlan = (planIdx) =>
    setPlans([...plans.slice(0, planIdx), ...plans.slice(planIdx + 1)])

  // takes an array newLists, which has new access lists for each plan and updates the state
  const updateAccessLists = (newAccessLists) =>
    setPlans(
      plans.map((plan, i) => ({
        ...plan,
        accessList: newAccessLists[i],
      }))
    )

  // takes plan index and name of new category and adds that category to specified plan in state
  const addCategory = (planIdx, categoryName) =>
    setPlans([
      ...plans.slice(0, planIdx),
      {
        ...plans[planIdx],
        categories: [
          ...plans[planIdx].categories,
          { name: categoryName, pointers: [] },
        ],
      },
      ...plans.slice(planIdx + 1),
    ])

  // takes plan index and category index of a category and removes it from state
  const deleteCategory = (planIdx, categoryIdx) =>
    setPlans([
      ...plans.slice(0, planIdx),
      {
        ...plans[planIdx],
        categories: [
          ...plans[planIdx].categories.slice(0, categoryIdx),
          ...plans[planIdx].categories.slice(categoryIdx + 1),
        ],
      },
      ...plans.slice(planIdx + 1),
    ])

  // given plan index and one of its category index, adds a pointer to that category
  const addPointer = (planIdx, categoryIdx, pointerName) =>
    setPlans([
      ...plans.slice(0, planIdx),
      {
        ...plans[planIdx],
        categories: [
          ...plans[planIdx].categories.slice(0, categoryIdx),
          {
            ...plans[planIdx].categories[categoryIdx],
            pointers: [
              ...plans[planIdx].categories[categoryIdx].pointers,
              { name: pointerName },
            ],
          },
          ...plans[planIdx].categories.slice(categoryIdx + 1),
        ],
      },
      ...plans.slice(planIdx + 1),
    ])

  // given the plan, category and pointer index of a pointer, removes it from state
  const deletePointer = (planIdx, categoryIdx, pointerIdx) =>
    setPlans([
      ...plans.slice(0, planIdx),
      {
        ...plans[planIdx],
        categories: [
          ...plans[planIdx].categories.slice(0, categoryIdx),
          {
            ...plans[planIdx].categories[categoryIdx],
            pointers: [
              ...plans[planIdx].categories[categoryIdx].pointers.slice(
                0,
                pointerIdx
              ),
              ...plans[planIdx].categories[categoryIdx].pointers.slice(
                pointerIdx + 1
              ),
            ],
          },
          ...plans[planIdx].categories.slice(categoryIdx + 1),
        ],
      },
      ...plans.slice(planIdx + 1),
    ])

  return (
    <Container sx={{ py: { xs: 3, sm: 14 } }}>
      {/* Header Component which has Add Plan and Manage Access Buttons and heading */}
      <Header
        openManageAccessModal={openManageAccessModal}
        openAddPlanModal={openAddPlanModal}
      />
      {/* List of plans */}
      <Stack spacing={2}>
        {plans.map((plan, planIdx) => (
          <Plan
            key={planIdx}
            name={plan.name}
            categories={plan.categories}
            deletePlan={() => deletePlan(planIdx)}
            addCategory={(categoryName) => addCategory(planIdx, categoryName)}
            deleteCategory={(categoryIdx) =>
              deleteCategory(planIdx, categoryIdx)
            }
            addPointer={(categoryIdx, pointerName) =>
              addPointer(planIdx, categoryIdx, pointerName)
            }
            deletePointer={(categoryIdx, pointerIdx) =>
              deletePointer(planIdx, categoryIdx, pointerIdx)
            }
          />
        ))}
      </Stack>
      {/* Add Plan Modal Component */}
      <AddPlan
        isOpen={addPlanModal}
        close={closeAddPlanModal}
        action={addPlan}
      />
      {/* Manage Access Modal Component */}
      <ManageAccess
        isOpen={manageAccessModal}
        close={closeManageAccessModal}
        plans={plans}
        action={updateAccessLists}
      />
    </Container>
  )
}

const Header = ({ openManageAccessModal, openAddPlanModal }) => (
  <>
    <Typography
      variant="overline"
      sx={{ color: "#64748B", fontSize: 16 }}
      gutterBottom
    >
      SOP
    </Typography>
    <Stack
      direction={{ xs: "col", sm: "row" }}
      justifyContent="space-between"
      marginBottom={5}
      gap={2}
    >
      <Typography
        variant="h3"
        sx={{ color: "#0F172A", textAlign: { xs: "center", sm: "left" } }}
        fontWeight={700}
      >
        Action Plans
      </Typography>
      <Stack direction={{ xs: "col", sm: "row" }} gap={2}>
        <Button onClick={openManageAccessModal} variant="outlined">
          Manage Access
        </Button>
        <Button onClick={openAddPlanModal} variant="contained">
          New Plan
        </Button>
      </Stack>
    </Stack>
  </>
)

export default Dashboard
