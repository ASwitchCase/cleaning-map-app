import React, { useEffect, useState } from 'react'
import SiteMarker from './SiteMarker'
import { SiteModel } from 'src/Models/SiteModel'
import img from '/Public/SeatingMap.jpg'
import { Button, Card, List, TextField, ToggleButton, ToggleButtonGroup } from '@mui/material'
import Issue from './Issue'
import { IssueTypeModel } from 'src/Models/IssueTypeModel'
import IssueType from './IssueType'

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
  const[newIssueType,setNewIssueType] = useState("")
  const[siteMarkers,setSiteMarkers] = useState([])
  const[issueTypes,setIssueTypes] = useState([])

  const handleChange = (event: React.MouseEvent<HTMLElement>,newMode: MapMode,) => {
    setMode(newMode);
  };

  const handleDeleteIssueType = (id: string) => {
    const newList = issueTypes.filter(item => item.id !== id)
    setIssueTypes(newList)
  }

  const handleDeleteIssue = (id: string) => {
    const newList = siteMarkers.filter(item => item.id !== id)
    setSiteMarkers(newList)
  }

  const getMouseCords = (e : any) =>{
      let rect = e.currentTarget.getBoundingClientRect();
      let cords = {
          x: e.clientX - rect.left,
          y:e.clientY - rect.top
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
    setIssueTypes((prev) => [...prev])
    setNewIssueType((prev) => prev)
  },[])

  const handleAddIssueType = () => {
    const n : IssueTypeModel = {
      id: uuidv4(),
      name: newIssueType,
      color: "GREEN"
    }
    setIssueTypes([...issueTypes,n])
  }

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
          <TextField onChange={(e) => setNewIssueType(e.target.value)} id="outlined-basic" label="Outlined" variant="outlined" />
          <Button onClick={handleAddIssueType} variant="outlined">Add</Button>
        </div>
        <div className='issue-type-container'> 
            {issueTypes.map(item => <IssueType onDelete={handleDeleteIssueType} issueType={item}/>)}
        </div>
        <h1>Issue Sites</h1>
        <List sx={{
            maxHeight:'300px',
            overflow:"auto"
        }}>
          {siteMarkers.map(item => <Issue onDelete={handleDeleteIssue} info={item}></Issue>)}
        </List>
      </div>
    </Card>
    
  </>

    
  )
}

export default MapPlain