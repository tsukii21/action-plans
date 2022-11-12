import { TreeItem } from "@mui/lab"
import {
  IconButton,
  Stack,
  Typography,
  Menu,
  MenuItem,
  Button,
} from "@mui/material"
import { useState } from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import DeleteModal from "./modals/DeleteModal"
import Pointer from "./Pointer"
import AddIcon from "@mui/icons-material/Add"
import AddPointer from "./modals/AddPointer"
import { styles } from "../config/styles"

const Category = ({
  name,
  pointers,
  deleteCategory,
  addPointer,
  deletePointer,
}) => {
  // Category menu control code
  const [menuAnchor, setMenuAnchor] = useState(null)
  const isMenuOpen = Boolean(menuAnchor)
  const openMenu = (e) => setMenuAnchor(e.currentTarget)
  const closeMenu = () => setMenuAnchor(null)

  // Delete Category Modal control code
  const [deleteCategoryModal, setDeleteCategoryModal] = useState(false)
  const openDeleteCategoryModal = () => {
    setDeleteCategoryModal(true)
    closeMenu()
  }
  const closeDeleteCategoryModal = () => setDeleteCategoryModal(false)

  // Add Pointer Modal control code
  const [addPointerModal, setAddPointerModal] = useState(false)
  const openAddPointerModal = () => setAddPointerModal(true)
  const closeAddPointerModal = () => setAddPointerModal(false)

  return (
    <>
      <TreeItem
        nodeId={name}
        label={
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={styles.categoryContainer}
          >
            <Typography>{name}</Typography>
            <IconButton onClick={openMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={closeMenu}>
              <MenuItem
                onClick={openDeleteCategoryModal}
                sx={styles.deleteMenuItem}
              >
                Delete
              </MenuItem>
            </Menu>
          </Stack>
        }
        ContentProps={styles.contentProps}
      >
        {/* Pointers of this category are rendered below */}
        {pointers.map((pointer, pointerIdx) => (
          <Pointer
            key={pointerIdx}
            name={pointer.name}
            deletePointer={() => deletePointer(pointerIdx)}
          />
        ))}
        <Button
          onClick={openAddPointerModal}
          variant="contained"
          startIcon={<AddIcon />}
          sx={styles.addPointerBtn}
        >
          Add Pointer
        </Button>
      </TreeItem>

      {/* below are modal components */}
      <DeleteModal
        isOpen={deleteCategoryModal}
        close={closeDeleteCategoryModal}
        type="Category"
        action={deleteCategory}
      />
      <AddPointer
        isOpen={addPointerModal}
        close={closeAddPointerModal}
        action={addPointer}
      />
    </>
  )
}

export default Category
