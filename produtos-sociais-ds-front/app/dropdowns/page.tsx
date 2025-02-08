import Dropdown from "@/components/ui/dropdown";


export default function DropdownUse () {
  return (
    <div>
      <Dropdown options={["Option 1", "Option 2", "Option 3"]} label="Select" />
    </div>
  )
}