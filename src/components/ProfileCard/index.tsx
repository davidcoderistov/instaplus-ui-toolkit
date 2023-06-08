import { useCallback } from 'react'
import Box from '@mui/material/Box'
import MediaGallery from '../MediaGallery'
import Button from '../Button'
import Skeleton from '@mui/material/Skeleton'
import Stats from './Stats'
import FollowingButton from '../FollowingButton'


interface StaticProps {
    loading?: never
    user: {
        id: string | number
        username: string
        firstName: string
        lastName: string
        photoUrl: string
        following: boolean
        followingLoading: boolean
    }
    postsCount: number
    followersCount: number
    followingCount: number
    posts: {
        id: string | number
        photoUrl: string
    }[]

    onClickUser(id: string | number): void

    onMessageUser(id: string | number): void

    onFollowUser(id: string | number): void

    onUnfollowUser(id: string | number): void

    onClickPost(id: string | number): void
}

interface LoadingProps {
    loading: true
    user?: never
    postsCount?: never
    followersCount?: never
    followingCount?: never
    posts?: never

    onClickUser?: never

    onMessageUser?: never

    onFollowUser?: never

    onUnfollowUser?: never

    onClickPost?: never
}

type Props = StaticProps | LoadingProps

export default function ProfileCard(props: Props) {

    const handleClickUser = useCallback(() => {
        if (!props.loading) {
            props.onClickUser(props.user.id)
        }
    }, [props.loading, props.onClickUser])

    const handleFollowUser = useCallback(() => {
        if (!props.loading) {
            props.onFollowUser(props.user.id)
        }
    }, [props.loading, props.onFollowUser])

    const handleMessageUser = useCallback(() => {
        if (!props.loading) {
            props.onMessageUser(props.user.id)
        }
    }, [props.loading, props.onMessageUser])

    return (
        <Box
            component='div'
            paddingTop='16px'
            display='grid'
            alignItems='center'
            width='366px'
            paddingBottom='16px'
            gridTemplateRows='64px 40px min-content'
            sx={{
                gridRowGap: '16px',
            }}
        >
            <Box
                component='div'
                display='grid'
                alignItems='center'
                gridTemplateColumns='64px 1fr'
                paddingX='16px'
                sx={{
                    gridColumnGap: '8px',
                }}
            >
                <Box
                    component='div'
                >
                    <Box
                        component='div'
                        sx={{ cursor: props.loading ? 'default' : 'pointer' }}
                        onClick={handleClickUser}
                    >
                        <Box
                            component='div'
                            width='56px'
                            height='56px'
                            borderRadius='50%'
                            boxSizing='border-box'
                            overflow='hidden'
                            position='relative'
                            display='block'
                            bgcolor={props.loading ? 'transparent' : '#121212'}
                        >
                            {props.loading ? (
                                <Skeleton
                                    variant='circular'
                                    width={56}
                                    height={56}
                                    sx={{ backgroundColor: '#202020' }} />
                            ) : (
                                <img
                                    alt='Picture'
                                    style={{
                                        objectFit: 'cover',
                                        left: '0',
                                        width: '100%',
                                        userSelect: 'none',
                                        height: '100%',
                                        top: '0',
                                        position: 'absolute',
                                        border: '0',
                                        overflowClipMargin: 'content-box',
                                        overflow: 'clip',
                                    }}
                                    src={props.user.photoUrl}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>
                <Box
                    component='div'
                >
                    <Box
                        component='div'
                    >
                        <Box
                            component='div'
                            height='18px'
                            display='flex'
                            alignItems='center'
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
                                    cursor: props.loading ? 'default' : 'pointer',
                                    touchAction: 'manipulation',
                                    outline: 'none',
                                }}
                                onClick={handleClickUser}
                            >
                                <Box
                                    component='span'
                                    lineHeight='20px'
                                    display='inline'
                                    fontSize='16px'
                                    minWidth='0'
                                    margin='0'
                                    color='#F5F5F5'
                                    fontWeight='700'
                                    maxWidth='100%'
                                    sx={{
                                        wordWrap: 'break-word',
                                        whiteSpace: 'pre-line',
                                        wordBreak: 'break-word',
                                    }}
                                >
                                    {props.loading ? (
                                        <Skeleton
                                            variant='rounded'
                                            width={240}
                                            height={17}
                                            sx={{
                                                backgroundColor: '#202020',
                                                borderRadius: '8px',
                                            }} />
                                    ) : props.user.username}
                                </Box>
                            </Box>
                        </Box>
                        <Box
                            component='div'
                            height='18px'
                            width='262px'
                            marginTop='4px'
                        >
                            <Box
                                component='span'
                                lineHeight='18px'
                                display='inline'
                                fontSize='14px'
                                minWidth='0'
                                margin='0'
                                color='#A8A8A8'
                                fontWeight='400'
                                maxWidth='100%'
                                sx={{
                                    wordWrap: 'break-word',
                                    whiteSpace: 'pre-line',
                                    wordBreak: 'break-word',
                                }}
                            >
                                {props.loading ? (
                                    <Skeleton
                                        variant='rounded'
                                        width={180}
                                        height={16}
                                        sx={{
                                            backgroundColor: '#202020',
                                            borderRadius: '8px',
                                        }} />
                                ) : `${props.user.firstName} ${props.user.lastName}`}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
            <Box
                component='div'
            >
                <Box
                    component='div'
                    display='grid'
                    gridTemplateColumns='1fr 1fr 1fr'
                    alignItems='center'
                    sx={{
                        gridColumnGap: '3px',
                    }}
                >
                    <Stats
                        loading={props.loading}
                        title='posts'
                        count={props.postsCount}
                    />
                    <Stats
                        loading={props.loading}
                        title='followers'
                        count={props.followersCount}
                    />
                    <Stats
                        loading={props.loading}
                        title='following'
                        count={props.followingCount}
                    />
                </Box>
            </Box>
            <Box
                component='div'
            >
                <MediaGallery
                    items={props.loading ? [...Array(3).keys()].map(index => ({
                        id: index,
                        photoUrl: null,
                    })) : props.posts}
                    onClick={props.onClickPost}
                />
            </Box>
            <Box
                component='div'
            >
                <Box
                    component='div'
                    display='block'
                    paddingX='16px'
                >
                    <Box
                        component='div'
                        display='flex'
                    >
                        <Box
                            component='div'
                            maxWidth='200px'
                            flexGrow='1'
                            marginRight='4px'
                        >
                            {props.loading ? (
                                <Skeleton
                                    variant='rounded'
                                    height={34}
                                    sx={{
                                        backgroundColor: '#202020',
                                        borderRadius: '8px',
                                    }} />
                            ) : (
                                <Button
                                    variant='primary'
                                    text='Message'
                                    contained
                                    fullWidth
                                    startIcon={
                                        <svg
                                            aria-label=''
                                            style={{ display: 'block', position: 'relative' }}
                                            color='rgb(255, 255, 255)'
                                            fill='rgb(255, 255, 255)'
                                            height='18'
                                            role='img'
                                            viewBox='0 0 24 24'
                                            width='18'
                                        >
                                            <title>Message</title>
                                            <path
                                                d='M12.003 2.001a9.705 9.705 0 1 1 0 19.4 10.876 10.876 0 0 1-2.895-.384.798.798 0 0 0-.533.04l-1.984.876a.801.801 0 0 1-1.123-.708l-.054-1.78a.806.806 0 0 0-.27-.569 9.49 9.49 0 0 1-3.14-7.175 9.65 9.65 0 0 1 10-9.7Z'
                                                fill='none'
                                                stroke='currentColor'
                                                strokeMiterlimit='10'
                                                strokeWidth='1.739' />
                                            <path
                                                d='M17.79 10.132a.659.659 0 0 0-.962-.873l-2.556 2.05a.63.63 0 0 1-.758.002L11.06 9.47a1.576 1.576 0 0 0-2.277.42l-2.567 3.98a.659.659 0 0 0 .961.875l2.556-2.049a.63.63 0 0 1 .759-.002l2.452 1.84a1.576 1.576 0 0 0 2.278-.42Z'
                                                fillRule='evenodd' />
                                        </svg>
                                    }
                                    onClick={handleMessageUser}
                                />
                            )}
                        </Box>
                        <Box
                            component='div'
                            maxWidth='200px'
                            flexGrow='1'
                            marginLeft='4px'
                        >
                            {props.loading ? (
                                <Skeleton
                                    variant='rounded'
                                    height={34}
                                    sx={{
                                        backgroundColor: '#202020',
                                        borderRadius: '8px',
                                    }} />
                            ) : props.user.following ? (
                                <FollowingButton
                                    contained
                                    fullWidth
                                    minWidth={113}
                                    user={props.user}
                                    onUnfollowUser={props.onUnfollowUser}
                                />
                            ) : (
                                <Button
                                    variant='primary'
                                    text='Follow'
                                    contained
                                    fullWidth
                                    minWidth={113}
                                    loading={props.user.followingLoading}
                                    onClick={handleFollowUser}
                                />
                            )}
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}