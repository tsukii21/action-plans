import {
  Typography,
  Accordion,
  AccordionSummary,
  AccordionDetails,
  Box,
  Stack,
  IconButton,
  Menu,
  MenuItem,
} from "@mui/material"
import ExpandMoreIcon from "@mui/icons-material/ExpandMore"
import DeleteModal from "./modals/DeleteModal"
import AddIcon from "@mui/icons-material/Add"
import { useState } from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import RemoveIcon from "@mui/icons-material/Remove"
import TreeView from "@mui/lab/TreeView"
import Category from "./Category"
import AddCategory from "./modals/AddCategory"

const Plan = ({
  name,
  categories,
  deletePlan,
  addCategory,
  deleteCategory,
  addPointer,
  deletePointer,
}) => {
  // Category Menu control code
  const [menuAnchor, setMenuAnchor] = useState(null)
  const isMenuOpen = Boolean(menuAnchor)
  const openMenu = (e) => setMenuAnchor(e.currentTarget)
  const closeMenu = () => setMenuAnchor(null)

  // Delete Plan Modal control code
  const [deletePlanModal, setDeletePlanModal] = useState(false)
  const openDeletePlanModal = () => {
    setDeletePlanModal(true)
    closeMenu()
  }
  const closeDeletePlanModal = () => setDeletePlanModal(false)

  // Add Plan Category Modal control code
  const [addCategoryModal, setAddCategoryModal] = useState(false)
  const openAddCategoryModal = () => {
    setAddCategoryModal(true)
    closeMenu()
  }
  const closeAddCategoryModal = () => setAddCategoryModal(false)

  return (
    <Box>
      <Accordion>
        <AccordionSummary expandIcon={<ExpandMoreIcon />}>
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{ width: "100%" }}
          >
            <Typography variant="h6" fontWeight={600}>
              {name}
            </Typography>
            <IconButton onClick={openMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={closeMenu}>
              <MenuItem onClick={openAddCategoryModal}>Add Category</MenuItem>
              <MenuItem
                onClick={openDeletePlanModal}
                sx={{ backgroundColor: "#FEF2F2", color: "#DC2626" }}
              >
                Delete
              </MenuItem>
            </Menu>
          </Stack>
        </AccordionSummary>
        <AccordionDetails>
          <TreeView
            defaultCollapseIcon={<RemoveIcon />}
            defaultExpandIcon={<AddIcon />}
            disableSelection
          >
            {/* All categories of this plan are renfered in Accordion Content */}
            {categories.map((category, categoryIdx) => (
              <Category
                key={categoryIdx}
                name={category.name}
                pointers={category.pointers}
                deleteCategory={() => deleteCategory(categoryIdx)}
                addPointer={(pointerName) =>
                  addPointer(categoryIdx, pointerName)
                }
                deletePointer={(pointerIdx) =>
                  deletePointer(categoryIdx, pointerIdx)
                }
              />
            ))}
          </TreeView>
        </AccordionDetails>
      </Accordion>
      <DeleteModal
        isOpen={deletePlanModal}
        close={closeDeletePlanModal}
        action={deletePlan}
        type="plan"
      />
      <AddCategory
        isOpen={addCategoryModal}
        close={closeAddCategoryModal}
        action={addCategory}
      />
    </Box>
  )
}

export default Plan
