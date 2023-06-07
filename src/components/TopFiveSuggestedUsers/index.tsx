import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import SuggestedUserListItem from '../SuggestedUserListItem'


interface User {
    id: string | number
    username: string
    firstName: string
    lastName: string
    photoUrl: string
    following: boolean
    followingLoading: boolean
    followedByUsernames: string[]
    followedByCount: number
}

interface Props {
    authUser: {
        id: string | number
        username: string
        firstName: string
        lastName: string
        photoUrl: string
    }
    users: User[]
    isInitialLoading: boolean
    onFollowUser: (id: string | number) => void
    onUnfollowUser: (id: string | number) => void
    onClickUser: (id: string | number) => void
    onClickAuthUser: () => void
    onSeeAll: () => void
}

export default function TopFiveSuggestedUsers(props: Props) {

    return (
        <Box
            component='div'
            width='319px'
            paddingLeft='64px'
            height='100vh'
            display='block'
        >
            <Box
                component='div'
                marginTop='36px'
                borderRadius='0'
                bgcolor='transparent'
                flexDirection='column'
                boxSizing='border-box'
                display='flex'
                position='static'
                alignItems='stretch'
                justifyContent='flex-start'
                sx={{
                    overflowY: 'visible',
                    overflowX: 'visible',
                }}
            >
                <Box
                    component='div'
                    borderRadius='0'
                    bgcolor='transparent'
                    flexDirection='column'
                    boxSizing='border-box'
                    display='flex'
                    flexShrink='0'
                    position='static'
                    paddingLeft='16px'
                    alignItems='stretch'
                    paddingRight='16px'
                    alignSelf='auto'
                    justifyContent='flex-start'
                    flexGrow='0'
                    sx={{
                        overflowY: 'visible',
                        overflowX: 'visible',
                    }}
                >
                    <Box
                        component='div'
                        width='100%'
                        marginRight='4px'
                        borderRadius='0'
                        bgcolor='transparent'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        flexShrink='0'
                        position='static'
                        alignItems='stretch'
                        alignSelf='auto'
                        justifyContent='flex-start'
                        flexGrow='0'
                        sx={{
                            overflowY: 'visible',
                            overflowX: 'visible',
                        }}
                    >
                        <Box
                            component='div'
                            padding='0'
                            bgcolor='transparent'
                            width='100%'
                            minWidth='0'
                            flexBasis='auto'
                            margin='0'
                            boxSizing='border-box'
                            minHeight='0'
                            flexShrink='0'
                            borderRadius='unset'
                            position='relative'
                            display='block'
                            zIndex='0'
                            maxWidth='100%'
                            textAlign='inherit'
                            sx={{
                                borderStyle: 'solid',
                                borderColor: '#00000066',
                                borderWidth: '0',
                                touchAction: 'manipulation',
                                userSelect: 'none',
                                cursor: 'pointer',
                                outlineStyle: 'none',
                            }}
                            onClick={props.onClickAuthUser}
                        >
                            <Box
                                component='div'
                                borderRadius='0'
                                padding='0'
                                bgcolor='transparent'
                                flexDirection='column'
                                boxSizing='border-box'
                                display='flex'
                                position='static'
                                alignItems='stretch'
                                justifyContent='flex-start'
                                sx={{
                                    overflowY: 'visible',
                                    overflowX: 'visible',
                                }}
                            >
                                <Box
                                    component='div'
                                    justifyContent='center'
                                    minWidth='0'
                                    flexDirection='column'
                                    boxSizing='border-box'
                                    display='flex'
                                    alignItems='stretch'
                                    position='relative'
                                    zIndex='0'
                                    flexGrow='1'
                                >
                                    <Box
                                        component='div'
                                        flexWrap='nowrap'
                                        boxSizing='border-box'
                                        display='flex'
                                        alignItems='center'
                                        flexShrink='0'
                                        justifyContent='space-between'
                                        flexDirection='row'
                                        position='relative'
                                        zIndex='0'
                                    >
                                        <Box
                                            component='div'
                                            minWidth='0'
                                            flexDirection='column'
                                            alignSelf='center'
                                            boxSizing='border-box'
                                            display='flex'
                                            flexShrink='0'
                                            position='relative'
                                            zIndex='0'
                                            maxWidth='100%'
                                        >
                                            <Box
                                                component='div'
                                                marginRight='12px'
                                                borderRadius='0'
                                                bgcolor='transparent'
                                                flexDirection='column'
                                                boxSizing='border-box'
                                                display='flex'
                                                flexShrink='0'
                                                position='static'
                                                alignItems='stretch'
                                                alignSelf='auto'
                                                justifyContent='flex-start'
                                                flexGrow='0'
                                                sx={{
                                                    overflowY: 'visible',
                                                    overflowX: 'visible',
                                                }}
                                            >
                                                <Box
                                                    component='div'
                                                    alignSelf='center'
                                                    display='block'
                                                    flex='none'
                                                    position='relative'
                                                >
                                                    <Box
                                                        component='div'
                                                        width='44px'
                                                        height='44px'
                                                        borderRadius='50%'
                                                        padding='0'
                                                        minWidth='0'
                                                        flexDirection='column'
                                                        flexBasis='auto'
                                                        margin='0'
                                                        boxSizing='border-box'
                                                        display='flex'
                                                        minHeight='0'
                                                        alignItems='stretch'
                                                        position='relative'
                                                        zIndex='0'
                                                        textAlign='inherit'
                                                        overflow='hidden'
                                                        sx={{
                                                            borderStyle: 'solid',
                                                            borderColor: '#00000066',
                                                            borderWidth: '0',
                                                            touchAction: 'manipulation',
                                                            cursor: 'pointer',
                                                            outlineStyle: 'none',
                                                        }}
                                                    >
                                                        <img
                                                            alt={`${props.authUser.username} profile picture`}
                                                            style={{
                                                                fontSize: '100%',
                                                                width: '100%',
                                                                height: '100%',
                                                                verticalAlign: 'baseline',
                                                                padding: '0',
                                                                margin: '0',
                                                                border: '0',
                                                                overflowClipMargin: 'content-box',
                                                                overflow: 'clip',
                                                            }}
                                                            src={props.authUser.photoUrl} />
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box
                                            component='div'
                                            flexShrink='1'
                                            minWidth='0'
                                            flexBasis='auto'
                                            boxSizing='border-box'
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='space-between'
                                            flexDirection='row'
                                            position='relative'
                                            zIndex='0'
                                            flexGrow='1'
                                            flexWrap='wrap'
                                        >
                                            <Box
                                                component='div'
                                                minWidth='0'
                                                flexDirection='column'
                                                boxSizing='border-box'
                                                display='flex'
                                                flexShrink='0'
                                                position='relative'
                                                zIndex='0'
                                                flexGrow='1'
                                                maxWidth='100%'
                                            >
                                                <Box
                                                    component='div'
                                                    borderRadius='0'
                                                    bgcolor='transparent'
                                                    minWidth='0'
                                                    flexDirection='column'
                                                    boxSizing='border-box'
                                                    display='flex'
                                                    minHeight='0'
                                                    position='static'
                                                    alignSelf='auto'
                                                    justifyContent='flex-start'
                                                    flexGrow='1'
                                                    alignItems='flex-start'
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
                                                            component='span'
                                                            display='block'
                                                            overflow='hidden'
                                                            maxWidth='100%'
                                                            sx={{
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                            }}
                                                        >
                                                            <Box
                                                                component='div'
                                                                borderRadius='0'
                                                                bgcolor='transparent'
                                                                minWidth='0'
                                                                boxSizing='border-box'
                                                                display='flex'
                                                                minHeight='0'
                                                                position='static'
                                                                alignItems='stretch'
                                                                flexDirection='row'
                                                                justifyContent='flex-start'
                                                                marginLeft='0'
                                                                sx={{
                                                                    overflowY: 'visible',
                                                                    overflowX: 'visible',
                                                                }}
                                                            >
                                                                {props.authUser.username}
                                                            </Box>
                                                        </Box>
                                                    </Box>
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
                                                            overflow='hidden'
                                                            display='block'
                                                            maxWidth='100%'
                                                            sx={{
                                                                whiteSpace: 'nowrap',
                                                                textOverflow: 'ellipsis',
                                                            }}
                                                        >
                                                            <Box
                                                                component='div'
                                                                borderRadius='0'
                                                                bgcolor='transparent'
                                                                minWidth='0'
                                                                flexDirection='column'
                                                                boxSizing='border-box'
                                                                display='flex'
                                                                minHeight='0'
                                                                position='static'
                                                                alignItems='stretch'
                                                                justifyContent='flex-start'
                                                                marginLeft='0'
                                                                sx={{
                                                                    overflowY: 'visible',
                                                                    overflowX: 'visible',
                                                                }}
                                                            >
                                                                <Box
                                                                    component='span'
                                                                    lineHeight='18px'
                                                                    fontSize='14px'
                                                                    display='inline'
                                                                    fontWeight='400'
                                                                    minWidth='0'
                                                                    margin='0!important'
                                                                    color='#A8A8A8'
                                                                    maxWidth='100%'
                                                                    sx={{
                                                                        wordWrap: 'break-word',
                                                                        whiteSpace: 'pre-line',
                                                                        wordBreak: 'break-word',
                                                                    }}
                                                                >
                                                                    {`${props.authUser.firstName} ${props.authUser.lastName}`}
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                {(props.isInitialLoading || props.users.length > 0) && (
                    <Box
                        component='div'
                        marginTop='24px'
                        borderRadius='0'
                        bgcolor='transparent'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        flexShrink='0'
                        position='static'
                        alignItems='stretch'
                        alignSelf='auto'
                        justifyContent='flex-start'
                        marginBottom='8px'
                        flexGrow='0'
                        sx={{
                            overflowY: 'visible',
                            overflowX: 'visible',
                        }}
                    >
                        <Box
                            component='div'
                            bgcolor='#000000'
                            display='flex'
                            flexDirection='column'
                            margin='0 0 12px -16px'
                            width='calc(100% + 32px)'
                        >
                            {!props.isInitialLoading && (
                                <Box
                                    component='div'
                                    borderRadius='0'
                                    paddingBottom='4px'
                                    bgcolor='transparent'
                                    boxSizing='border-box'
                                    display='flex'
                                    alignItems='center'
                                    flexShrink='0'
                                    paddingLeft='16px'
                                    flexDirection='row'
                                    paddingRight='16px'
                                    alignSelf='auto'
                                    justifyContent='flex-start'
                                    position='relative'
                                    paddingTop='4px'
                                    flexGrow='0'
                                    sx={{
                                        overflowY: 'visible',
                                        overflowX: 'visible',
                                    }}
                                >
                                    <Box
                                        component='div'
                                        borderRadius='0'
                                        bgcolor='transparent'
                                        minWidth='0'
                                        flexDirection='column'
                                        boxSizing='border-box'
                                        display='flex'
                                        minHeight='0'
                                        alignSelf='auto'
                                        justifyContent='flex-start'
                                        position='relative'
                                        flexGrow='1'
                                        alignItems='flex-start'
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
                                            fontWeight='600'
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
                                            Suggested for you
                                        </Box>
                                    </Box>
                                    <Button
                                        variant='text'
                                        size='small'
                                        sx={{
                                            textTransform: 'none',
                                            color: '#FFFFFF',
                                            '&:hover': {
                                                color: '#A8A8A8',
                                            },
                                            padding: 0,
                                            minWidth: 0,
                                        }}
                                        onClick={props.onSeeAll}
                                    >
                                        See All
                                    </Button>
                                </Box>
                            )}
                            <Box
                                component='div'
                                marginLeft='4px'
                                borderRadius='0'
                                bgcolor='transparent'
                                flexDirection='column'
                                boxSizing='border-box'
                                display='flex'
                                flexShrink='0'
                                alignItems='stretch'
                                alignSelf='auto'
                                justifyContent='flex-start'
                                position='relative'
                                flexGrow='0'
                                marginBottom='4px'
                                sx={{
                                    overflowY: 'visible',
                                    overflowX: 'visible',
                                }}
                            >
                                <Box
                                    component='div'
                                    paddingBottom='8px'
                                    borderRadius='0'
                                    bgcolor='transparent'
                                    flexDirection='column'
                                    boxSizing='border-box'
                                    display='flex'
                                    flexShrink='0'
                                    paddingTop='8px'
                                    position='static'
                                    alignItems='stretch'
                                    alignSelf='auto'
                                    justifyContent='flex-start'
                                    flexGrow='0'
                                    sx={{
                                        overflowY: 'visible',
                                        overflowX: 'visible',
                                    }}
                                >
                                    <Box
                                        component='div'
                                        display='block'
                                        height='auto'
                                        overflow='hidden'
                                    >
                                        <Box
                                            component='div'
                                            position='relative'
                                            display='flex'
                                            flexDirection='column'
                                            paddingY='0'
                                        >
                                            {props.isInitialLoading ? [...Array(5).keys()].map(index => (
                                                <SuggestedUserListItem
                                                    key={index}
                                                    loading
                                                />
                                            )) : props.users.slice(0, 5).map(user => (
                                                <SuggestedUserListItem
                                                    key={user.id}
                                                    dense
                                                    authUserId={props.authUser.id}
                                                    user={user}
                                                    onFollowUser={props.onFollowUser}
                                                    onUnfollowUser={props.onUnfollowUser}
                                                    onClickUser={props.onClickUser}
                                                />
                                            ))}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                )}
            </Box>
        </Box>
    )
}