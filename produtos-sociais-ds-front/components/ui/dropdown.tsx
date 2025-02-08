"use client"
import * as React from "react"
import { useTheme, Theme } from "@mui/system";
import { OutlinedInput } from "@mui/material";
import InputLabel from "@mui/material/InputLabel"
import MenuItem from "@mui/material/MenuItem"
import  {FormControl } from "@mui/material";
import Select, { type SelectChangeEvent } from "@mui/material/Select"

const ITEM_HEIGHT = 48
const ITEM_PADDING_TOP = 8
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 250,
    },
  },
}

function getStyles(name: string, selectedNames: string[], theme: Theme) {
  return {
    fontWeight: selectedNames.includes(name) ? theme.typography?.fontWeightMedium ?? 'medium' : theme.typography?.fontWeightRegular ?? 'regular',
  }
}

interface MultipleSelectProps {
  options: string[]
  label: string
  width?: number
}

export default function Dropdown({ options, label, width = 300 }: MultipleSelectProps) {
  const theme = useTheme()
  const [selectedNames, setSelectedNames] = React.useState<string[]>([])

  const handleChange = (event: SelectChangeEvent<typeof selectedNames>) => {
    const {
      target: { value },
    } = event
    setSelectedNames(typeof value === "string" ? value.split(",") : value)
  }

  return (
    <div>
      <FormControl sx={{ m: 1, width: width }}>
        <InputLabel id={`multiple-select-label-${label}`}>{label}</InputLabel>
        <Select
          labelId={`multiple-select-label-${label}`}
          id={`multiple-select-${label}`}
          multiple
          value={selectedNames}
          onChange={handleChange}
          input={<OutlinedInput label={label} />}
          MenuProps={MenuProps}
        >
          {options.map((option) => (
            <MenuItem key={option} value={option} style={getStyles(option, selectedNames, theme)}>
              {option}
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  )
}

