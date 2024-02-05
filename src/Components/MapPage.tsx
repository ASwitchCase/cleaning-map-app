import { Box, Tabs, Tab } from '@mui/material';
import React from 'react'
import MapPlain from './MapPlain';
import CustomTabPanel from './CustomTabPanel';

const MapPage = () => {
    const [value, setValue] = React.useState(0);
    const handleChange = (event: React.SyntheticEvent, newValue: number) => {
        setValue(newValue);
    };
    const a11yProps = (index: number) => {
        return {
          id: `simple-tab-${index}`,
          'aria-controls': `simple-tabpanel-${index}`,
        };
    }
  return (
    <div>
          <Box sx={{ width: '100%' }}>
            <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
              <Tabs value={value} onChange={handleChange} aria-label="basic tabs example">
                <Tab label="Main Auditorium" {...a11yProps(0)} />
                <Tab label="Balcony" {...a11yProps(1)} />
                <Tab label="Main Lobby" {...a11yProps(2)} />
              </Tabs>
            </Box>
            <CustomTabPanel value={value} index={0}>
              <MapPlain/>
            </CustomTabPanel>
            <CustomTabPanel value={value} index={1}>
              Item Two
            </CustomTabPanel>
            <CustomTabPanel value={value} index={2}>
              Item fff
            </CustomTabPanel>
          </Box>
    </div>
  )
}

export default MapPage