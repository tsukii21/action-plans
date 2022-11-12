// custom styles for Tree Node components (Categories and Pointers)

export const styles = {
  categoryContainer: {
    px: 2,
    py: 1,
    my: 1,
    border: "2px solid #CBD5E1",
    borderRadius: 2,
    backgroundColor: "transparent",
  },
  deleteMenuItem: { backgroundColor: "#FEF2F2", color: "#DC2626" },
  contentProps: {
    sx: {
      "&.Mui-focused": {
        backgroundColor: "transparent",
      },
      "&:hover": {
        backgroundColor: "transparent",
      },
    },
  },
  addPointerBtn: {
    fontSize: 14,
    backgroundColor: "#F0F9FF",
    color: "#2563EB",
    fontWeight: 700,
    px: 3,
    ml: 7,
    "&:hover": {
      backgroundColor: "#DBEAFE",
    },
  },
}
