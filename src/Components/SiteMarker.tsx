import React, { useState } from 'react'
import { SiteModel } from 'src/Models/SiteModel'
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';
import FmdBadIcon from '@mui/icons-material/FmdBad'
import { pink } from '@mui/material/colors';
import EditDialog from './EditDialog';
import { IssueTypeModel } from 'src/Models/IssueTypeModel';
interface propsModel{
    model : SiteModel,
    isEditable : boolean,
    issueTypes: IssueTypeModel[],
    onEdit: Function
}

const SiteMarker = (props:propsModel) => {
  const[openEditDialog,setOpenEditDialog] = useState(false)
  return (
    <>
      <EditDialog
        open={openEditDialog}
        onClose={setOpenEditDialog}
        data={props.model}
        issueTypes={props.issueTypes}
        onEdit={props.onEdit}
      />
        <div className='site-marker-container' style={{top:props.model.cords.y - 20,left:props.model.cords.x -20}}>
          <IconButton onClick={() => props.isEditable? setOpenEditDialog(true): ""} aria-label="delete">
            <FmdBadIcon color='secondary' sx={{ color: pink[500],fontSize:"20px" }}/>
          </IconButton>
        </div>
    </>
    
  )
}

export default SiteMarker

