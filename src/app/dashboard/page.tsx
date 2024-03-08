'use client'
import * as React from 'react'
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
import Episodecard from 'components/admin/EpisodeCard'
import { clerkClient } from '@clerk/nextjs'
import { Container } from 'components/common/'
import Image from 'next/image'
import logo from '/public/images/footer_icons/foss_logo.png'

import ApplePodcast from '/public/images/Apple_podcasts.svg'
import Spotify from '/public/images/Spotify.svg'
import RSS from '/public/images/RSS.svg'
import OverCast from '/public/images/Overcast.svg'

const drawerWidth = 240

export default function ClippedDrawer() {
  const episodeCards = Array.from({ length: 6 }, (_, index) => (
    <Episodecard key={index}></Episodecard>
  ))

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
                  <ListItemButton>
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
        <Container>
          <div className="flex items-center justify-center border w-full">
            <div className="flex-1">{episodeCards}</div>
            <div className="flex flex-col  flex-1 border">
              <div className="users"></div>
              <div className="flex items-center justify-center flex-col gap-20">
                <div className="flex items-center justify-center gap-4">
                  <Image src={ApplePodcast} alt="apple"></Image>
                  <div>Apple Podcast</div>
                </div>
                <div className="flex items-center justify-center gap-4">
                  <Image src={Spotify} alt="Spotify"></Image>
                  <div>Spotify</div>
                </div>
                <div className="flex items-center justify-center">
                  <Image src={RSS} alt="RSS"></Image>
                  <div></div>
                </div>
                <div className="flex items-center justify-center">
                  <Image src={OverCast} alt="Overcast"></Image>
                  <div></div>
                </div>
              </div>
            </div>
          </div>
        </Container>
      </Box>
    </Box>
  )
}
