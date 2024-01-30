import React, { useEffect, useState } from 'react'
import SiteMarker from './SiteMarker'
import { SiteModel } from 'src/Models/SiteModel'
import img from '/Public/SeatingMap.jpg'
import { Button, Card, List, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Issue from './Issue'

const uuidv4 = () => {
  return 'xxxxxxxx-xxxx-4xxx-yxxx-xxxxxxxxxxxx'
  .replace(/[xy]/g, function (c) {
      const r = Math.random() * 16 | 0, 
          v = c == 'x' ? r : (r & 0x3 | 0x8);
      return v.toString(16);
  });
}

enum MapMode {
  ADD = "add",
  EDIT = "edit",
  VIEW = "view"
}

const MapPlain = () => {
  const[mode,setMode] = useState<MapMode>(MapMode.ADD)
  const[siteMarkers,setSiteMarkers] = useState([])

  const handleChange = (event: React.MouseEvent<HTMLElement>,newMode: MapMode,) => {
    setMode(newMode);
  };

  const getMouseCords = (e : any) =>{
      let cords = {
          x: e.clientX - e.currentTarget.offsetLeft,
          y:e.clientY - e.currentTarget.offsetTop
      }
      return cords
  }

  const addSiteMarker = (e : any) => {
    const cords = getMouseCords(e)
    const date = new Date();

    let day = date.getDate();
    let month = date.getMonth() + 1;
    let year = date.getFullYear();

    const newModel : SiteModel = {
      cords: {
        x: cords.x,
        y: cords.y
      },
      id: uuidv4(),
      issues: [],
      description: 'Issue Site',
      created_at:`${day}-${month}-${year}`
    }
    setSiteMarkers([...siteMarkers,newModel])
  }

  useEffect(()=>{
    setSiteMarkers((prevState) => [...prevState])
  },[])

  return (
  <>
    <Card sx={{ 
        maxWidth: 1300,
        padding:1,
        display: 'flex',
        justifyContent: 'space-around',
    }}>
        {mode == MapMode.ADD?
        <div onClick={(e)=> addSiteMarker(e)} className='map-plain'>
          <img className='map-img' src={img}></img>
          {siteMarkers.map(marker=><SiteMarker key={marker.id} model={marker}/>)}
        </div>
        
      :mode == MapMode.EDIT?
        <div className='map-plain'>
          <img className='map-img' src={img}></img>
          {siteMarkers.map(marker=><SiteMarker key={marker.id} model={marker}/>)}
        </div>

      :mode == MapMode.VIEW?
      <div className='map-plain'>
        <img className='map-img' src={img}></img>
        {siteMarkers.map(marker=><SiteMarker key={marker.id} model={marker}/>)}
      </div>
      :<h1>Error: No Mode</h1>
      }

      <div className='tools'>
      <h1>Change Mode</h1>
        <ToggleButtonGroup
          color="primary"
          value={mode}
          exclusive
          onChange={handleChange}
          aria-label="Platform"
          >
          <ToggleButton value="add">ADD</ToggleButton>
          <ToggleButton value="edit">EDIT</ToggleButton>
          <ToggleButton value="view">VIEW</ToggleButton>
        </ToggleButtonGroup>

        <h1>Add Issue Type</h1>
        <div style={{display:'flex',marginTop:'10px'}}> 
          <TextField id="outlined-basic" label="Outlined" variant="outlined" />
          <Button variant="outlined">Add</Button>
        </div>
        <h1>Issue Sites</h1>
        <List sx={{
            maxHeight:'300px',
            overflow:"auto"
        }}>
          {siteMarkers.map(item => <Issue info={item}></Issue>)}
        </List>
      </div>
    </Card>
    
  </>

    
  )
}

export default MapPlain