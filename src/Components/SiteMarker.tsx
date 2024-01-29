import React from 'react'
import { SiteModel } from 'src/Models/SiteModel'

interface propsModel{
    model : SiteModel
}

const SiteMarker = (props:propsModel) => {
  return (
    <>
        <div className='site-marker-container' style={{top:props.model.cords.y,left:props.model.cords.x}}>


        </div>
    </>
    
  )
}

export default SiteMarker