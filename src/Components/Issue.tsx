import { ListItem, ListItemAvatar, Avatar, ListItemText, IconButton } from '@mui/material'
import React, { useEffect } from 'react'
import FmdBadIcon from '@mui/icons-material/FmdBad'
import DeleteIcon from '@mui/icons-material/Delete';
import { SiteModel } from 'src/Models/SiteModel';

const Issue = (props:{info:SiteModel, onDelete:Function}) => {
  const handleDelete = () => {
    props.onDelete(props.info.id)
  };
  return (
    <div>
        <ListItem>
          <ListItemAvatar>
            <Avatar>
              <FmdBadIcon/>
            </Avatar>
          </ListItemAvatar>
          <ListItemText primary={props.info.description} secondary={props.info.created_at}/>
          <IconButton onClick={handleDelete} edge="end" aria-label="delete">
              <DeleteIcon/>
          </IconButton>
        </ListItem>
    </div>
  )
}

export default Issue