import React, { useState } from 'react'
import { SiteModel } from 'src/Models/SiteModel'
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';
import FmdBadIcon from '@mui/icons-material/FmdBad'
import { pink } from '@mui/material/colors';
import EditDialog from './EditDialog';
import { IssueTypeModel } from 'src/Models/IssueTypeModel';
import ViewDialog from './ViewDialog';

enum MapMode {
  ADD = "add",
  EDIT = "edit",
  VIEW = "view"
}
interface propsModel{
    mode : MapMode,
    model : SiteModel,
    issueTypes: IssueTypeModel[],
    onEdit: Function
}

const SiteMarker = (props:propsModel) => {
  const[openEditDialog,setOpenEditDialog] = useState(false)
  const[openViewDialog,setOpenViewDialog] = useState(false)
  return (
    <>
      <EditDialog
        open={openEditDialog}
        onClose={setOpenEditDialog}
        data={props.model}
        issueTypes={props.issueTypes}
        onEdit={props.onEdit}
      />
      <ViewDialog 
        open={openViewDialog} 
        onClose={setOpenViewDialog} 
        data={props.model} 
      />
        <div className='site-marker-container' style={{top:props.model.cords.y - 20,left:props.model.cords.x -20}}>
          <IconButton onClick={() => props.mode === "edit"? setOpenEditDialog(true): props.mode === "view"? setOpenViewDialog(true): ""} aria-label="delete">
            <FmdBadIcon color='secondary' sx={{ color: pink[500],fontSize:"20px" }}/>
          </IconButton>
        </div>
    </>
    
  )
}

export default SiteMarker

