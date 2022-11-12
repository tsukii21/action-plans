import {
  FormControl,
  Select,
  Box,
  Chip,
  MenuItem,
  Typography,
  Avatar,
} from "@mui/material"
import { peopleList } from "../../data"
import AddBoxIcon from "@mui/icons-material/AddBox"

const AccessSelect = ({ planName, accessList, changeAccessList }) => {
  // changes access list for this plan when user selects from dropdown
  const handleChange = (e) => {
    const val = e.target.value
    changeAccessList(typeof val === "string" ? val.split(",") : val)
  }

  return (
    <FormControl fullWidth margin="normal">
      <Typography
        variant="h6"
        color="primary"
        fontWeight={700}
        marginBottom={0.5}
      >
        {planName}
      </Typography>
      <Select
        multiple
        value={accessList}
        onChange={handleChange}
        // renders all people in the access list as chips
        renderValue={(list) => (
          <Box sx={{ display: "flex", flexWrap: "wrap", gap: 0.5 }}>
            {list.map((name) => (
              <Chip
                key={name}
                avatar={<Avatar>{name[0]}</Avatar>}
                label={name}
              />
            ))}
          </Box>
        )}
        IconComponent={AddBoxIcon}
      >
        {peopleList.map(({ name }) => (
          <MenuItem key={name} value={name}>
            <Avatar key={name} sx={{ mr: 1 }}>
              {name[0]}
            </Avatar>{" "}
            {name}
          </MenuItem>
        ))}
      </Select>
    </FormControl>
  )
}

export default AccessSelect
