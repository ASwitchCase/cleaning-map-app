import * as React from 'react';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import FormControl from '@mui/material/FormControl';
import ListItemText from '@mui/material/ListItemText';
import Select, { SelectChangeEvent } from '@mui/material/Select';
import Checkbox from '@mui/material/Checkbox';
import { IssueTypeModel } from 'src/Models/IssueTypeModel';

const ITEM_HEIGHT = 48;
const ITEM_PADDING_TOP = 8;
const MenuProps = {
  PaperProps: {
    style: {
      maxHeight: ITEM_HEIGHT * 4.5 + ITEM_PADDING_TOP,
      width: 300,
    },
  },
};


const CheckSelectBox = (props:{options:IssueTypeModel[],onEdit:Function}) => {
  const [selected, setSelected] = React.useState<string[]>([]);
  const handleChange = (event: SelectChangeEvent<typeof selected>) => {
    const {
      target: { value },
    } = event;
    setSelected(
      // On autofill we get a stringified value.
      typeof value === 'string' ? value.split(',') : value,
    );
    handleEdit()
  };
  const handleEdit = () =>{
    const issueTypes = props.options.filter(option => {
      return selected.map(selectedItem =>{
        return option.name === selectedItem
      })
    })
    props.onEdit(issueTypes)
  }

  React.useEffect(()=>{
    setSelected((prev)=>[...prev])
  },[])

  return (
    <div>
      <FormControl sx={{ width: 300 , margin:2}}>
        <InputLabel id="demo-multiple-checkbox-label">Site Issue</InputLabel>
        <Select
          labelId="demo-multiple-checkbox-label"
          id="demo-multiple-checkbox"
          multiple
          value={selected}
          onChange={handleChange}
          input={<OutlinedInput label="Site Issue" />}
          renderValue={(selected) => selected.join(',')}
          MenuProps={MenuProps}
        >
          {props.options.map((item) => (
            <MenuItem key={item.id} value={item.name}>
              <Checkbox checked={selected.indexOf(item.id) > -1} />
              <ListItemText primary={item.name} />
            </MenuItem>
          ))}
        </Select>
      </FormControl>
    </div>
  );
}

export default CheckSelectBox