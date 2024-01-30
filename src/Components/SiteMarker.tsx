import React from 'react'
import { SiteModel } from 'src/Models/SiteModel'
import PushPinIcon from '@mui/icons-material/PushPin';
import { IconButton } from '@mui/material';

interface propsModel{
    model : SiteModel
}

const SiteMarker = (props:propsModel) => {
  return (
    <>
        <div className='site-marker-container' style={{top:props.model.cords.y,left:props.model.cords.x}}>

          <IconButton aria-label="delete">
              <PushPinIcon color='secondary'/>
          </IconButton>
        </div>
    </>
    
  )
}

export default SiteMarker