import React, { useEffect, useState } from 'react'
import SiteMarker from './SiteMarker'
import { SiteModel } from 'src/Models/SiteModel'

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

enum MapMode {
  ADD,
  EDIT,
  VIEW
}

const MapPlain = () => {
  const[mode,setMode] = useState<MapMode>(MapMode.ADD)
  const[siteMarkers,setSiteMarkers] = useState([])

  const getMouseCords = (e : any) =>{
      let cords = {
          x: e.clientX - e.currentTarget.offsetLeft,
          y:e.clientY - e.currentTarget.offsetTop
      }
      return cords
  }

  const addSiteMarker = (e : any) => {
    const cords = getMouseCords(e)
    const newModel : SiteModel = {
      cords: {
        x: cords.x,
        y: cords.y
      },
      id: uuidv4(),
      issues: [],
      description: ''
    }
    setSiteMarkers([...siteMarkers,newModel])
  }

  useEffect(()=>{
    setSiteMarkers((prevState) => [...prevState])
  },[])

  return (
    <div onClick={(e)=> addSiteMarker(e)} className='map-plain'>
      {siteMarkers.map(marker=><SiteMarker key={marker.id} model={marker}/>)}
    </div>
  )
}

export default MapPlain