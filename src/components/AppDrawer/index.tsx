import React from 'react'
import { useLocation } from 'react-router-dom'
import Box from '@mui/material/Box'
import { useMediaQuery } from '@mui/material'
import MuiDrawer from '@mui/material/Drawer'
import Typography from '@mui/material/Typography'
import { styled } from '@mui/material/styles'
import { NavLink as Link } from 'react-router-dom'
import AppDrawerItem from './AppDrawerItem'
import AppDrawerIcon from './AppDrawerIcon'
import AppDrawerAvatar from './AppDrawerAvatar'


const StyledLink = styled(Link)({
    color: 'black',
    textDecoration: 'none',
})

const drawerWidth = 245

const Drawer = styled(MuiDrawer, { shouldForwardProp: (prop) => prop !== 'open' })(
    ({ theme, open }) => ({
        '& .MuiDrawer-paper': {
            position: 'relative',
            whiteSpace: 'nowrap',
            width: drawerWidth,
            transition: theme.transitions.create('width', {
                easing: theme.transitions.easing.sharp,
                duration: theme.transitions.duration.enteringScreen,
            }),
            boxSizing: 'border-box',
            ...(!open && {
                overflowX: 'hidden',
                transition: theme.transitions.create('width', {
                    easing: theme.transitions.easing.sharp,
                    duration: theme.transitions.duration.leavingScreen,
                }),
                width: theme.spacing(7),
                [theme.breakpoints.up('sm')]: {
                    width: theme.spacing(9),
                },
            }),
        },
    }),
)

interface Props {
    username: string
    photoUrl?: string | null
    isSearchDrawerOpen: boolean
    isNotificationsDrawerOpen: boolean
    isCreatingNewPost: boolean
    isSettingsOpen: boolean

    onOpenSearchDrawer(event: React.MouseEvent): void

    onOpenNotificationsDrawer(event: React.MouseEvent): void

    onOpenCreateNewPost(): void
}

export default function AppDrawer(props: Props) {

    const location = useLocation()

    const mw1260 = useMediaQuery('(min-width:1260px)')

    const isDrawerOpen = !props.isSearchDrawerOpen && !props.isNotificationsDrawerOpen && mw1260 && location.pathname !== '/chat'

    const isLinkOpen = !props.isSearchDrawerOpen && !props.isNotificationsDrawerOpen && !props.isCreatingNewPost

    return (
        <Drawer
            variant='permanent'
            open={isDrawerOpen}
            PaperProps={{
                sx: {
                    backgroundColor: '#000000',
                    borderRight: '1px solid #262626',
                    paddingBottom: '20px',
                    paddingRight: '12px',
                    flexDirection: 'column',
                    boxSizing: 'border-box',
                    display: 'flex',
                    paddingLeft: '12px',
                    paddingTop: '8px',
                    alignItems: 'flex-start',
                },
            }}
        >
            <Box
                component='div'
                width='100%'
                flexShrink='0'
                height='92px'
                position='relative'
                display='block'
            >
                <Box
                    component='div'
                    height='73px'
                    paddingRight={isDrawerOpen ? '12px' : '0'}
                    width='100%'
                    paddingTop='25px'
                    boxSizing='border-box'
                    paddingLeft={isDrawerOpen ? '12px' : '0'}
                    marginBottom='19px'
                    paddingBottom='16px'
                    left='0'
                    top='0'
                    position='absolute'
                    display='block'
                >
                    <Box
                        component='div'
                        sx={{ opacity: 1 }}
                        display='block'
                    >
                        <StyledLink to='/'>
                            <Box
                                component='div'
                                display='inline'
                                padding='0'
                                margin='0'
                                border='0'
                                bgcolor='transparent'
                                boxSizing='border-box'
                                textAlign='inherit'
                                sx={{
                                    touchAction: 'manipulation',
                                    cursor: 'pointer',
                                    outline: 'none',
                                }}
                            >
                                {isDrawerOpen ? (
                                    <Typography noWrap variant='h5' color='#FFFFFF' sx={{ fontFamily: 'Bosca' }}>
                                        InstaPlus
                                    </Typography>
                                ) : (
                                    <Box component='div' padding='12px' sx={{
                                        '&:hover': {
                                            bgcolor: '#1A1A1A',
                                        },
                                    }}>
                                        <svg
                                            aria-label='InstaPlus'
                                            style={{ display: 'block', position: 'relative' }}
                                            color='rgb(245, 245, 245)'
                                            fill='rgb(245, 245, 245)'
                                            height='24'
                                            role='img'
                                            viewBox='0 0 24 24'
                                            width='24'
                                        >
                                            <title>InstaPlus</title>
                                            <path
                                                d='M12 2.982c2.937 0 3.285.011 4.445.064a6.087 6.087 0 0 1 2.042.379 3.408 3.408 0 0 1 1.265.823 3.408 3.408 0 0 1 .823 1.265 6.087 6.087 0 0 1 .379 2.042c.053 1.16.064 1.508.064 4.445s-.011 3.285-.064 4.445a6.087 6.087 0 0 1-.379 2.042 3.643 3.643 0 0 1-2.088 2.088 6.087 6.087 0 0 1-2.042.379c-1.16.053-1.508.064-4.445.064s-3.285-.011-4.445-.064a6.087 6.087 0 0 1-2.043-.379 3.408 3.408 0 0 1-1.264-.823 3.408 3.408 0 0 1-.823-1.265 6.087 6.087 0 0 1-.379-2.042c-.053-1.16-.064-1.508-.064-4.445s.011-3.285.064-4.445a6.087 6.087 0 0 1 .379-2.042 3.408 3.408 0 0 1 .823-1.265 3.408 3.408 0 0 1 1.265-.823 6.087 6.087 0 0 1 2.042-.379c1.16-.053 1.508-.064 4.445-.064M12 1c-2.987 0-3.362.013-4.535.066a8.074 8.074 0 0 0-2.67.511 5.392 5.392 0 0 0-1.949 1.27 5.392 5.392 0 0 0-1.269 1.948 8.074 8.074 0 0 0-.51 2.67C1.012 8.638 1 9.013 1 12s.013 3.362.066 4.535a8.074 8.074 0 0 0 .511 2.67 5.392 5.392 0 0 0 1.27 1.949 5.392 5.392 0 0 0 1.948 1.269 8.074 8.074 0 0 0 2.67.51C8.638 22.988 9.013 23 12 23s3.362-.013 4.535-.066a8.074 8.074 0 0 0 2.67-.511 5.625 5.625 0 0 0 3.218-3.218 8.074 8.074 0 0 0 .51-2.67C22.988 15.362 23 14.987 23 12s-.013-3.362-.066-4.535a8.074 8.074 0 0 0-.511-2.67 5.392 5.392 0 0 0-1.27-1.949 5.392 5.392 0 0 0-1.948-1.269 8.074 8.074 0 0 0-2.67-.51C15.362 1.012 14.987 1 12 1Zm0 5.351A5.649 5.649 0 1 0 17.649 12 5.649 5.649 0 0 0 12 6.351Zm0 9.316A3.667 3.667 0 1 1 15.667 12 3.667 3.667 0 0 1 12 15.667Zm5.872-10.859a1.32 1.32 0 1 0 1.32 1.32 1.32 1.32 0 0 0-1.32-1.32Z' />
                                        </svg>
                                    </Box>
                                )}
                            </Box>
                        </StyledLink>
                    </Box>
                </Box>
            </Box>
            <Box
                component='div'
                width='100%'
                flexGrow='1'
                display='block'
            >
                <StyledLink to='/'>
                    {({ isActive }) => (
                        <AppDrawerItem
                            name='Home'
                            isActive={isActive && isLinkOpen}
                            isCondensed={!isDrawerOpen}
                            icon={
                                <AppDrawerIcon
                                    ariaLabel='Home'
                                    path={
                                        <path
                                            d='M9.005 16.545a2.997 2.997 0 0 1 2.997-2.997A2.997 2.997 0 0 1 15 16.545V22h7V11.543L12 2 2 11.543V22h7.005Z'
                                            fill='none'
                                            stroke='currentColor'
                                            strokeLinejoin='round'
                                            strokeWidth='2' />
                                    }
                                />
                            }
                            activeIcon={
                                <AppDrawerIcon
                                    ariaLabel='Home'
                                    path={
                                        <path
                                            d='M22 23h-6.001a1 1 0 0 1-1-1v-5.455a2.997 2.997 0 1 0-5.993 0V22a1 1 0 0 1-1 1H2a1 1 0 0 1-1-1V11.543a1.002 1.002 0 0 1 .31-.724l10-9.543a1.001 1.001 0 0 1 1.38 0l10 9.543a1.002 1.002 0 0 1 .31.724V22a1 1 0 0 1-1 1Z' />
                                    }
                                />
                            } />
                    )}
                </StyledLink>
                <AppDrawerItem
                    name='Search'
                    isActive={props.isSearchDrawerOpen}
                    isCondensed={!isDrawerOpen}
                    isBordered={props.isSearchDrawerOpen}
                    onClick={props.onOpenSearchDrawer}
                    icon={
                        <AppDrawerIcon
                            ariaLabel='Search'
                            path={
                                <>
                                    <path d='M19 10.5A8.5 8.5 0 1 1 10.5 2a8.5 8.5 0 0 1 8.5 8.5Z'
                                          fill='none'
                                          stroke='currentColor'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth='2' />
                                    <line fill='none' stroke='currentColor'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth='2'
                                          x1='16.511'
                                          x2='22'
                                          y1='16.511'
                                          y2='22' />
                                </>
                            }
                        />
                    }
                    activeIcon={
                        <AppDrawerIcon
                            ariaLabel='Search'
                            path={
                                <>
                                    <path d='M18.5 10.5a8 8 0 1 1-8-8 8 8 0 0 1 8 8Z'
                                          fill='none'
                                          stroke='currentColor'
                                          strokeLinecap='round'
                                          strokeLinejoin='round'
                                          strokeWidth='3' />
                                    <line
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='3'
                                        x1='16.511'
                                        x2='21.643'
                                        y1='16.511'
                                        y2='21.643' />
                                </>
                            }
                        />
                    } />
                <StyledLink to='/explore'>
                    {({ isActive }) => (
                        <AppDrawerItem
                            name='Explore'
                            isActive={isActive && isLinkOpen}
                            isCondensed={!isDrawerOpen}
                            icon={
                                <AppDrawerIcon
                                    ariaLabel='Explore'
                                    path={
                                        <>
                                            <polygon fill='none'
                                                     points='13.941 13.953 7.581 16.424 10.06 10.056 16.42 7.585 13.941 13.953'
                                                     stroke='currentColor'
                                                     strokeLinecap='round'
                                                     strokeLinejoin='round'
                                                     strokeWidth='2' />
                                            <polygon fillRule='evenodd'
                                                     points='10.06 10.056 13.949 13.945 7.581 16.424 10.06 10.056' />
                                            <circle cx='12.001' cy='12.005' fill='none' r='10.5'
                                                    stroke='currentColor'
                                                    strokeLinecap='round'
                                                    strokeLinejoin='round'
                                                    strokeWidth='2' />
                                        </>
                                    } />
                            }
                            activeIcon={
                                <AppDrawerIcon
                                    ariaLabel='Explore'
                                    path={
                                        <path
                                            d='m13.173 13.164 1.491-3.829-3.83 1.49ZM12.001.5a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12.001.5Zm5.35 7.443-2.478 6.369a1 1 0 0 1-.57.569l-6.36 2.47a1 1 0 0 1-1.294-1.294l2.48-6.369a1 1 0 0 1 .57-.569l6.359-2.47a1 1 0 0 1 1.294 1.294Z' />
                                    }
                                />
                            } />
                    )}
                </StyledLink>
                <StyledLink to='/chat'>
                    {({ isActive }) => (
                        <AppDrawerItem
                            name='Messages'
                            isActive={isActive && isLinkOpen}
                            isCondensed={!isDrawerOpen}
                            icon={
                                <AppDrawerIcon
                                    ariaLabel='Messages'
                                    path={
                                        <>
                                            <path
                                                d='M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeMiterlimit='10'
                                                strokeWidth='1.739' />
                                            <path
                                                d='M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z'
                                                fillRule='evenodd' />
                                        </>
                                    }
                                />
                            }
                            activeIcon={
                                <AppDrawerIcon
                                    ariaLabel='Messages'
                                    path={
                                        <path
                                            d='M12.003 1.131a10.487 10.487 0 0 0-10.87 10.57 10.194 10.194 0 0 0 3.412 7.771l.054 1.78a1.67 1.67 0 0 0 2.342 1.476l1.935-.872a11.767 11.767 0 0 0 3.127.416 10.488 10.488 0 0 0 10.87-10.57 10.487 10.487 0 0 0-10.87-10.57Zm5.786 9.001-2.566 3.983a1.577 1.577 0 0 1-2.278.42l-2.452-1.84a.63.63 0 0 0-.759.002l-2.556 2.049a.659.659 0 0 1-.96-.874L8.783 9.89a1.576 1.576 0 0 1 2.277-.42l2.453 1.84a.63.63 0 0 0 .758-.003l2.556-2.05a.659.659 0 0 1 .961.874Z' />
                                    }
                                />
                            } />
                    )}
                </StyledLink>
                <AppDrawerItem
                    name='Notifications'
                    isActive={props.isNotificationsDrawerOpen}
                    isCondensed={!isDrawerOpen}
                    isBordered={props.isNotificationsDrawerOpen}
                    onClick={props.onOpenNotificationsDrawer}
                    icon={
                        <AppDrawerIcon
                            ariaLabel='Notifications'
                            path={
                                <path
                                    d='M16.792 3.904A4.989 4.989 0 0 1 21.5 9.122c0 3.072-2.652 4.959-5.197 7.222-2.512 2.243-3.865 3.469-4.303 3.752-.477-.309-2.143-1.823-4.303-3.752C5.141 14.072 2.5 12.167 2.5 9.122a4.989 4.989 0 0 1 4.708-5.218 4.21 4.21 0 0 1 3.675 1.941c.84 1.175.98 1.763 1.12 1.763s.278-.588 1.11-1.766a4.17 4.17 0 0 1 3.679-1.938m0-2a6.04 6.04 0 0 0-4.797 2.127 6.052 6.052 0 0 0-4.787-2.127A6.985 6.985 0 0 0 .5 9.122c0 3.61 2.55 5.827 5.015 7.97.283.246.569.494.853.747l1.027.918a44.998 44.998 0 0 0 3.518 3.018 2 2 0 0 0 2.174 0 45.263 45.263 0 0 0 3.626-3.115l.922-.824c.293-.26.59-.519.885-.774 2.334-2.025 4.98-4.32 4.98-7.94a6.985 6.985 0 0 0-6.708-7.218Z' />
                            }
                        />
                    }
                    activeIcon={
                        <AppDrawerIcon
                            ariaLabel='Notifications'
                            large
                            path={
                                <path
                                    d='M34.6 3.1c-4.5 0-7.9 1.8-10.6 5.6-2.7-3.7-6.1-5.5-10.6-5.5C6 3.1 0 9.6 0 17.6c0 7.3 5.4 12 10.6 16.5.6.5 1.3 1.1 1.9 1.7l2.3 2c4.4 3.9 6.6 5.9 7.6 6.5.5.3 1.1.5 1.6.5s1.1-.2 1.6-.5c1-.6 2.8-2.2 7.8-6.8l2-1.8c.7-.6 1.3-1.2 2-1.7C42.7 29.6 48 25 48 17.6c0-8-6-14.5-13.4-14.5z' />
                            }
                        />
                    } />
                <AppDrawerItem
                    name='Create'
                    isActive={props.isCreatingNewPost}
                    isCondensed={!isDrawerOpen}
                    onClick={props.onOpenCreateNewPost}
                    icon={
                        <AppDrawerIcon
                            ariaLabel='Create'
                            path={
                                <>
                                    <path
                                        d='M2 12v3.45c0 2.849.698 4.005 1.606 4.944.94.909 2.098 1.608 4.946 1.608h6.896c2.848 0 4.006-.7 4.946-1.608C21.302 19.455 22 18.3 22 15.45V8.552c0-2.849-.698-4.006-1.606-4.945C19.454 2.7 18.296 2 15.448 2H8.552c-2.848 0-4.006.699-4.946 1.607C2.698 4.547 2 5.703 2 8.552Z'
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2' />
                                    <line
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        x1='6.545' x2='17.455' y1='12.001' y2='12.001' />
                                    <line
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        x1='12.003' x2='12.003' y1='6.545' y2='17.455' />
                                </>
                            }
                        />
                    }
                    activeIcon={
                        <AppDrawerIcon
                            ariaLabel='Create'
                            path={
                                <path
                                    d='m12.003 5.545-.117.006-.112.02a1 1 0 0 0-.764.857l-.007.117V11H6.544l-.116.007a1 1 0 0 0-.877.876L5.545 12l.007.117a1 1 0 0 0 .877.876l.116.007h4.457l.001 4.454.007.116a1 1 0 0 0 .876.877l.117.007.117-.007a1 1 0 0 0 .876-.877l.007-.116V13h4.452l.116-.007a1 1 0 0 0 .877-.876l.007-.117-.007-.117a1 1 0 0 0-.877-.876L17.455 11h-4.453l.001-4.455-.007-.117a1 1 0 0 0-.876-.877ZM8.552.999h6.896c2.754 0 4.285.579 5.664 1.912 1.255 1.297 1.838 2.758 1.885 5.302L23 8.55v6.898c0 2.755-.578 4.286-1.912 5.664-1.298 1.255-2.759 1.838-5.302 1.885l-.338.003H8.552c-2.754 0-4.285-.579-5.664-1.912-1.255-1.297-1.839-2.758-1.885-5.302L1 15.45V8.551c0-2.754.579-4.286 1.912-5.664C4.21 1.633 5.67 1.05 8.214 1.002L8.552 1Z' />
                            }
                        />
                    } />
                <StyledLink to='/profile'>
                    {({ isActive }) => (
                        <AppDrawerItem
                            name='Profile'
                            isActive={isActive && isLinkOpen}
                            isCondensed={!isDrawerOpen}
                            icon={
                                <AppDrawerAvatar
                                    username={props.username}
                                    photoUrl={props.photoUrl} />
                            }
                            activeIcon={
                                <AppDrawerAvatar
                                    isActive
                                    username={props.username}
                                    photoUrl={props.photoUrl} />} />
                    )}
                </StyledLink>
            </Box>
            <Box
                component='div'
                display='block'
                width='100%'
            >
                <AppDrawerItem
                    name='More'
                    isActive={props.isSettingsOpen}
                    isCondensed={!isDrawerOpen}
                    icon={
                        <AppDrawerIcon
                            ariaLabel='More'
                            path={
                                <>
                                    <line fill='none' stroke='currentColor' strokeLinecap='round'
                                          strokeLinejoin='round' strokeWidth='2'
                                          x1='3' x2='21' y1='4' y2='4' />
                                    <line fill='none' stroke='currentColor' strokeLinecap='round'
                                          strokeLinejoin='round' strokeWidth='2'
                                          x1='3' x2='21' y1='12' y2='12' />
                                    <line fill='none' stroke='currentColor' strokeLinecap='round'
                                          strokeLinejoin='round' strokeWidth='2'
                                          x1='3' x2='21' y1='20' y2='20' />
                                </>
                            }
                        />
                    }
                    activeIcon={
                        <AppDrawerIcon
                            ariaLabel='More'
                            path={
                                <path
                                    d='M3.5 6.5h17a1.5 1.5 0 0 0 0-3h-17a1.5 1.5 0 0 0 0 3Zm17 4h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Zm0 7h-17a1.5 1.5 0 0 0 0 3h17a1.5 1.5 0 0 0 0-3Z' />
                            }
                        />
                    } />
            </Box>
        </Drawer>
    )
}