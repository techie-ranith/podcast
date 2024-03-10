'use client'
import React, { useState } from 'react'
import Box from '@mui/material/Box'
import Drawer from '@mui/material/Drawer'
import AppBar from '@mui/material/AppBar'
import CssBaseline from '@mui/material/CssBaseline'
import Toolbar from '@mui/material/Toolbar'
import List from '@mui/material/List'
import Typography from '@mui/material/Typography'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemIcon from '@mui/material/ListItemIcon'
import ListItemText from '@mui/material/ListItemText'
import DashboardIcon from '@mui/icons-material/Dashboard'
import BookmarkIcon from '@mui/icons-material/Bookmark'
import AddIcon from '@mui/icons-material/Add'
import PeopleIcon from '@mui/icons-material/People'
import { Container } from 'components/common/'
import Image from 'next/image'
import logo from '/public/images/footer_icons/foss_logo.png'
import Dashboard from 'components/admin/Dashboard'
import AddEpisode from 'components/admin/AddEpisode'
import User from 'components/admin/User'
import Platforms from 'components/admin/Platforms'

const drawerWidth = 240

export default function ClippedDrawer() {
  const [activeButton, setActiveButton] = useState('Dashboard')

  const handleButtonClick = (text: string) => {
    setActiveButton(text)
  }

  const DashboardContent = () => {
    return <Dashboard></Dashboard>
  }
  const AddEpisodeContent = () => {
    return (
      <div>
        <AddEpisode></AddEpisode>
      </div>
    )
  }
  const UserContent = () => {
    return (
      <div>
        <User></User>
      </div>
    )
  }
  const PlatformsContent = () => {
    return (
      <div>
        <Platforms></Platforms>
      </div>
    )
  }

  const renderContent = () => {
    switch (activeButton) {
      case 'Dashboard':
        return <DashboardContent />
      case 'Add Episode':
        return <AddEpisodeContent />
      case 'Users':
        return <UserContent />
      case 'Platforms':
        return <PlatformsContent />
      default:
        return null
    }
  }

  return (
    <Box sx={{ display: 'flex' }}>
      <CssBaseline />
      <AppBar
        position="fixed"
        sx={{ zIndex: (theme) => theme.zIndex.drawer + 1 }}
      >
        <Toolbar>
          <Typography
            variant="h6"
            noWrap
            component="div"
            className="flex gap-2 items-center justify-center"
          >
            <Image src={logo} alt="image"></Image>
            Dialectic
          </Typography>
        </Toolbar>
      </AppBar>
      <Drawer
        variant="permanent"
        sx={{
          width: drawerWidth,
          flexShrink: 0,
          [`& .MuiDrawer-paper`]: {
            width: drawerWidth,
            boxSizing: 'border-box',
          },
        }}
      >
        <Toolbar />
        <Box sx={{ overflow: 'auto' }}>
          <List>
            {['Dashboard', 'Add Episode', 'Users', 'Platforms'].map(
              (text, index) => (
                <ListItem key={text} disablePadding>
                  <ListItemButton onClick={() => handleButtonClick(text)}>
                    <ListItemIcon>
                      {index % 4 === 0 ? (
                        <DashboardIcon />
                      ) : index % 4 === 1 ? (
                        <AddIcon />
                      ) : index % 4 === 2 ? (
                        <PeopleIcon />
                      ) : (
                        <BookmarkIcon />
                      )}
                    </ListItemIcon>
                    <ListItemText primary={text} />
                  </ListItemButton>
                </ListItem>
              ),
            )}
          </List>
        </Box>
      </Drawer>
      <Box component="main" sx={{ flexGrow: 1, p: 3 }}>
        <Toolbar />
        <Container>{renderContent()}</Container>
      </Box>
    </Box>
  )
}
