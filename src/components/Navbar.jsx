import * as React from 'react'
import AppBar from '@mui/material/AppBar'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'
import Container from '@mui/material/Container'
import AdbIcon from '@mui/icons-material/Adb'
import { Badge } from '@mui/material'
import { useSelector } from 'react-redux'
import { NavLink } from 'react-router-dom'

function Navbar() {
    const likeCount = useSelector(state => state.likeList)?.length
    const savedCount = useSelector(state => state.savedProducts)?.length
    const orderedCount = useSelector(state => state.OrderedList)?.length
  return (
    <AppBar position="static">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <AdbIcon sx={{ display: { xs: 'none', md: 'flex' }, mr: 1 }} />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'none', md: 'flex' },
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>

          <AdbIcon sx={{ display: { xs: 'flex', md: 'none' }, mr: 1 }} />
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: 'flex', md: 'none' },
              flexGrow: 1,
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'inherit',
              textDecoration: 'none',
            }}
          >
            LOGO
          </Typography>
          <div className="flex space-x-5">
            <Badge badgeContent={likeCount} color="success" showZero>
              <NavLink to={"/liked"}
                className="cursor-pointer"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Liked{' '}
              </NavLink>
            </Badge>
            <Badge badgeContent={savedCount} color="success" showZero>
              <NavLink to={"/liked"}
                className="cursor-pointer"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                Saved{' '}
              </NavLink>
            </Badge>


            <Badge badgeContent={orderedCount} color="success" showZero>
              <NavLink to={"/liked"}
                className="cursor-pointer"
                sx={{ my: 2, color: 'white', display: 'block' }}
              >
                {' '}
                Ordered{' '}
              </NavLink>
            </Badge>
          </div>
        </Toolbar>
      </Container>
    </AppBar>
  )
}
export default Navbar
