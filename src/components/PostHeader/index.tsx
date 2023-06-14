import { useState, useMemo } from 'react'
import Box from '@mui/material/Box'
import Button from '../Button'
import PostSettingsModal from '../PostSettingsModal'
import UnfollowUserModal from '../UnfollowUserModal'
import { getTimeElapsed } from '../../utils'


interface Props {
    dense?: boolean
    user: {
        id: string | number
        username: string
        photoUrl: string
        following: boolean
        followingLoading: boolean
    }
    post: {
        id: string | number
        location: string | null
        createdAt: number
    }

    onFollowUser(id: string | number): void

    onUnfollowUser(id: string | number): void

    onGoToPost(): void

    onViewProfile(id: string | number): void
}

export default function PostHeader(props: Props) {

    const [isSettingsModalOpen, setIsSettingsModalOpen] = useState(false)
    const [isUnfollowUserModalOpen, setIsUnfollowUserModalOpen] = useState(false)

    const handleFollowUser = () => {
        props.onFollowUser(props.user.id)
    }

    const handleUnfollowUser = () => {
        setIsUnfollowUserModalOpen(false)
        props.onUnfollowUser(props.user.id)
    }


    const handleViewProfile = () => {
        props.onViewProfile(props.user.id)
    }

    const handleGoToPost = () => {
        setIsSettingsModalOpen(false)
        props.onGoToPost()
    }

    const handleViewProfileFromModal = () => {
        setIsSettingsModalOpen(false)
        props.onViewProfile(props.user.id)
    }

    const handleOpenSettingsModal = () => {
        setIsSettingsModalOpen(true)
    }

    const handleCloseSettingsModal = () => {
        setIsSettingsModalOpen(false)
    }

    const handleOpenUnfollowUserModal = () => {
        setIsSettingsModalOpen(false)
        setIsUnfollowUserModalOpen(true)
    }

    const handleCloseUnfollowUserModal = () => {
        setIsUnfollowUserModalOpen(false)
    }

    const timeAgo = useMemo(() => {
        if (props.dense) {
            return getTimeElapsed(props.post.createdAt, 'minutes')
        }
        return null
    }, [props.dense, props.post.createdAt])

    return (
        <Box
            component='div'
            bgcolor='transparent'
            boxSizing='border-box'
            display='flex'
            alignItems='center'
            justifyContent='space-between'
            flexDirection='row'
            position='relative'
            borderRadius='0'
            sx={{
                overflowY: 'visible',
                overflowX: 'visible',
            }}
        >
            <Box
                component='div'
                alignItems='center'
                boxSizing='border-box'
                display='flex'
                flexDirection='row'
                flexGrow='1'
                flexShrink='1'
                maxWidth='calc(100% - 48px)'
                position='relative'
                sx={{
                    ...props.dense && { margin: '8px 4px 8px 5px', padding: 'unset' },
                    ...!props.dense && { padding: '14px 4px 14px 16px' },
                }}
            >
                <Box
                    component='div'
                    display='block'
                >
                    <Box
                        component='div'
                        display='block'
                    >
                        <Box
                            component='div'
                            display='block'
                        >
                            <Box
                                component='div'
                                display='block'
                                position='relative'
                            >
                                <Box
                                    component='div'
                                    height='32px'
                                    width='32px'
                                    bgcolor='#1A1A1A'
                                    paddingLeft='0'
                                    paddingTop='0'
                                    minWidth='0'
                                    flexDirection='column'
                                    marginTop='0'
                                    marginBottom='0'
                                    boxSizing='border-box'
                                    display='flex'
                                    paddingRight='0'
                                    minHeight='0'
                                    alignItems='stretch'
                                    position='relative'
                                    marginLeft='0'
                                    zIndex='0'
                                    paddingBottom='0'
                                    textAlign='inherit'
                                    marginRight='0'
                                    sx={{
                                        borderBottomLeftRadius: '50%',
                                        borderTopRightRadius: '50%',
                                        borderRightStyle: 'solid',
                                        borderBottomColor: '#00000066',
                                        borderLeftWidth: '0',
                                        borderTopColor: '#00000066',
                                        touchAction: 'manipulation',
                                        borderRightWidth: '0',
                                        borderRightColor: '#00000066',
                                        borderTopWidth: '0',
                                        overflowX: 'hidden',
                                        borderLeftColor: '#00000066',
                                        borderLeftStyle: 'solid',
                                        cursor: 'pointer',
                                        outlineStyle: 'none',
                                        borderBottomWidth: '0',
                                        borderBottomStyle: 'solid',
                                        borderBottomRightRadius: '50%',
                                        borderTopLeftRadius: '50%',
                                        borderTopStyle: 'solid',
                                        overflowY: 'hidden',
                                    }}
                                    onClick={handleViewProfile}
                                >
                                    <img
                                        alt={`${props.user.username} profile picture`}
                                        style={{
                                            fontSize: '100%',
                                            width: '100%',
                                            height: '100%',
                                            verticalAlign: 'baseline',
                                            padding: '0',
                                            margin: '0',
                                            border: '0',
                                        }}
                                        src={props.user.photoUrl} />
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component='div'
                    marginLeft={props.dense ? '10px' : '14px'}
                    alignItems='flex-start'
                    boxSizing='border-box'
                    display='flex'
                    flexDirection='column'
                    flexGrow='1'
                    flexShrink='1'
                    overflow='hidden'
                    position='relative'
                    sx={{
                        ...props.dense && { justifyContent: 'center', minHeight: '40px' },
                    }}
                >
                    <Box
                        component='div'
                        maxWidth='100%'
                        alignItems='baseline'
                        display='flex'
                        flexDirection='row'
                        position='relative'
                    >
                        <Box
                            component='div'
                            display='flex'
                        >
                            <Box
                                component='div'
                                boxSizing='border-box'
                                flexGrow='1'
                                flexShrink='1'
                                fontSize='100%'
                                margin='0'
                                maxWidth='100%'
                                overflow='hidden'
                                padding='2px'
                                position='relative'
                                top={props.post.location ? '1px' : '0'}
                                sx={{
                                    verticalAlign: 'baseline',
                                    cursor: 'pointer',
                                }}
                                onClick={handleViewProfile}
                            >
                                <Box
                                    component='div'
                                    borderRadius='0'
                                    bgcolor='transparent'
                                    boxSizing='border-box'
                                    display='flex'
                                    alignItems='center'
                                    flexDirection='row'
                                    justifyContent='flex-start'
                                    position='relative'
                                    sx={{
                                        overflowY: 'visible',
                                        overflowX: 'visible',
                                    }}
                                >
                                    <Box
                                        component='span'
                                        lineHeight='18px'
                                        fontSize='14px'
                                        minWidth='0'
                                        margin='0!important'
                                        color='#F5F5F5'
                                        fontWeight='600'
                                        position='relative'
                                        display='block'
                                        maxWidth='100%'
                                        sx={{
                                            overflowY: 'visible',
                                            overflowX: 'visible',
                                            wordWrap: 'break-word',
                                            whiteSpace: 'pre-line',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        <Box
                                            component='div'
                                            display='inline'
                                        >
                                            {props.user.username}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                        {timeAgo && (
                            <Box
                                component='div'
                                borderRadius='0'
                                bgcolor='transparent'
                                boxSizing='border-box'
                                display='flex'
                                alignItems='center'
                                flexShrink='0'
                                flexDirection='row'
                                alignSelf='auto'
                                justifyContent='flex-start'
                                position='relative'
                                flexGrow='0'
                                sx={{
                                    overflowY: 'visible',
                                    overflowX: 'visible',
                                }}
                            >
                                <Box
                                    component='div'
                                    top={props.post.location ? '1px' : '0'}
                                    position='relative'
                                    display='block'
                                >
                                    <Box
                                        component='span'
                                        lineHeight='18px'
                                        fontSize='14px'
                                        fontWeight='400'
                                        minWidth='0'
                                        margin='0!important'
                                        color='#A8A8A8'
                                        position='relative'
                                        display='block'
                                        maxWidth='100%'
                                        sx={{
                                            overflowY: 'visible',
                                            overflowX: 'visible',
                                            wordWrap: 'break-word',
                                            whiteSpace: 'pre-line',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        <Box
                                            component='span'
                                            marginX='4px'
                                            color='#A8A8A8'
                                            display='inline'
                                        >
                                            •
                                        </Box>
                                        <Box
                                            component='span'
                                            display='inline'
                                        >
                                            {timeAgo}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        )}
                        <Box
                            component='div'
                            alignItems='baseline'
                            border='0'
                            boxSizing='border-box'
                            display='flex'
                            flexDirection='row'
                            flexShrink='0'
                            fontSize='100%'
                            margin='0'
                            padding='0'
                            position='relative'
                            top={props.post.location ? '1px' : '0'}
                            sx={{ verticalAlign: 'baseline' }}
                        >
                            <Box
                                component='div'
                                alignItems='stretch'
                                border='0'
                                boxSizing='border-box'
                                display='flex'
                                flexDirection='column'
                                flexShrink='0'
                                fontSize='100%'
                                marginLeft='0'
                                marginRight='2px'
                                marginY='0'
                                padding='0'
                                position='relative'
                                sx={{ verticalAlign: 'baseline' }}
                            >
                                {(!props.user.following || props.user.followingLoading) ? (
                                    <Box
                                        component='span'
                                        marginLeft='4px'
                                        marginRight='2px'
                                        color='#F5F5F5'
                                        display='inline'
                                    >
                                        •
                                    </Box>
                                ) : (
                                    <Box component='span' display='inline'>&#8203;</Box>
                                )}
                            </Box>
                            {(!props.user.following || props.user.followingLoading) && (
                                <Button
                                    variant='primary'
                                    text='Follow'
                                    loading={props.user.followingLoading}
                                    onClick={handleFollowUser}
                                />
                            )}
                        </Box>
                    </Box>
                    {props.post.location && props.dense ? (
                        (
                            <Box
                                component='div'
                                border='0'
                                bottom='1px'
                                boxSizing='border-box'
                                display='block'
                                flexShrink='0'
                                fontSize='100%'
                                margin='0'
                                maxWidth='100%'
                                padding='2px'
                                position='relative'
                                sx={{ verticalAlign: 'baseline' }}
                            >
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
                                        outline: 'none',
                                    }}
                                >
                                    <Box
                                        component='span'
                                        lineHeight='16px'
                                        fontWeight='400'
                                        minWidth='0'
                                        margin='0!important'
                                        color='#F5F5F5'
                                        position='relative'
                                        display='block'
                                        fontSize='12px'
                                        maxWidth='100%'
                                        sx={{
                                            overflowY: 'visible',
                                            overflowX: 'visible',
                                            wordWrap: 'break-word',
                                            whiteSpace: 'pre-line',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        {props.post.location}
                                    </Box>
                                </Box>
                            </Box>
                        )
                    ) : (
                        <Box
                            component='div'
                            border='0'
                            bottom='1px'
                            boxSizing='border-box'
                            display='block'
                            flexShrink='0'
                            fontSize='100%'
                            margin='0'
                            maxWidth='100%'
                            padding='2px'
                            position='relative'
                            sx={{ verticalAlign: 'baseline' }}
                        >
                            <Box
                                component='div'
                                display='block'
                            >
                                <Box
                                    component='div'
                                    display='block'
                                    overflow='hidden'
                                    sx={{
                                        textOverflow: 'ellipsis',
                                        whiteSpace: 'nowrap',
                                    }}
                                >
                                    <Box
                                        component='span'
                                        lineHeight='16px'
                                        fontWeight='400'
                                        minWidth='0'
                                        margin='0!important'
                                        color='#F5F5F5'
                                        position='relative'
                                        display='block'
                                        fontSize='12px'
                                        maxWidth='100%'
                                        sx={{
                                            overflowY: 'visible',
                                            overflowX: 'visible',
                                            wordWrap: 'break-word',
                                            whiteSpace: 'pre-line',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        {props.post.location}
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    )}
                </Box>
            </Box>
            <Box
                component='div'
                padding='0'
                display='block'
                sx={{
                    ...props.dense && { padding: '0', marginRight: '-8px' },
                    ...!props.dense && { paddingRight: '8px' },
                }}
            >
                <Box
                    component='div'
                    alignItems='center'
                    border='none'
                    display='flex'
                    justifyContent='center'
                    padding='8px'
                    lineHeight='18px'
                    fontSize='14px'
                    margin='0'
                    sx={{ cursor: 'pointer' }}
                    onClick={handleOpenSettingsModal}
                >
                    <Box
                        component='div'
                        alignItems='center'
                        display='flex'
                        justifyContent='center'
                    >
                        <Box
                            component='div'
                            height='24px'
                            width='24px'
                            borderRadius='0'
                            justifyContent='center'
                            bgcolor='transparent'
                            flexDirection='column'
                            boxSizing='border-box'
                            alignItems='center'
                            flexShrink='0'
                            alignSelf='auto'
                            position='relative'
                            flexGrow='0'
                            sx={{
                                overflowY: 'visible',
                                overflowX: 'visible',
                            }}
                        >
                            <svg
                                aria-label='More options'
                                className='_ab6-'
                                style={{ display: 'block', position: 'relative' }}
                                fill='rgb(245, 245, 245)'
                                height='24'
                                role='img'
                                viewBox='0 0 24 24'
                                width='24'
                            >
                                <circle cx='12' cy='12' r='1.5' />
                                <circle cx='6' cy='12' r='1.5' />
                                <circle cx='18' cy='12' r='1.5' />
                            </svg>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <PostSettingsModal
                open={isSettingsModalOpen}
                following={props.user.following}
                onUnfollowUser={handleOpenUnfollowUserModal}
                onGoToPost={handleGoToPost}
                onViewProfile={handleViewProfileFromModal}
                onCloseModal={handleCloseSettingsModal}
            />
            <UnfollowUserModal
                open={isUnfollowUserModalOpen}
                user={props.user}
                onUnfollowUser={handleUnfollowUser}
                onCloseModal={handleCloseUnfollowUserModal}
            />
        </Box>
    )
}