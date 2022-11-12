import { TreeItem } from "@mui/lab"
import { IconButton, Stack, Typography, Menu, MenuItem } from "@mui/material"
import { useState } from "react"
import MoreVertIcon from "@mui/icons-material/MoreVert"
import DeleteModal from "./modals/DeleteModal"
import { styles } from "../config/styles"

const Pointer = ({ name, deletePointer }) => {
  // Pointer menu control code
  const [menuAnchor, setMenuAnchor] = useState(null)
  const isMenuOpen = Boolean(menuAnchor)
  const openMenu = (e) => setMenuAnchor(e.currentTarget)
  const closeMenu = () => setMenuAnchor(null)

  // delete pointer modal control code
  const [deletePointerModal, setDeletePointerModal] = useState(false)
  const openDeletePointerModal = () => {
    setDeletePointerModal(true)
    closeMenu()
  }
  const closeDeletePointerModal = () => setDeletePointerModal(false)

  return (
    <>
      <TreeItem
        nodeId={name}
        label={
          <Stack
            direction="row"
            justifyContent="space-between"
            alignItems="center"
            sx={{
              ...styles.categoryContainer,
              py: 0,
              backgroundColor: "#F8FAFC",
            }}
          >
            <Typography color={"primary"}>{name}</Typography>
            <IconButton onClick={openMenu}>
              <MoreVertIcon />
            </IconButton>
            <Menu anchorEl={menuAnchor} open={isMenuOpen} onClose={closeMenu}>
              <MenuItem
                onClick={openDeletePointerModal}
                sx={styles.deleteMenuItem}
              >
                Delete
              </MenuItem>
            </Menu>
          </Stack>
        }
        ContentProps={styles.contentProps}
      />

      {/* delete pointer modal component */}
      <DeleteModal
        isOpen={deletePointerModal}
        close={closeDeletePointerModal}
        type="Pointer"
        action={deletePointer}
      />
    </>
  )
}

export default Pointer
