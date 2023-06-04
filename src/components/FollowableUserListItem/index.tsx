import Box from '@mui/material/Box'
import Button from '../Button'


interface StaticProps {
    loading?: never
    username: string
    firstName: string
    lastName: string
    photoUrl: string
    following: boolean

    onFollow(): void

    onUnfollow(): void
}

type Props = StaticProps

export default function FollowableUserListItem(props: Props) {

    return (
        <Box
            component='div'
            paddingLeft='0'
            bgcolor='transparent'
            width='100%'
            paddingTop='0'
            minWidth='0'
            flexBasis='auto'
            marginTop='0'
            boxSizing='border-box'
            paddingRight='0'
            minHeight='0'
            flexShrink='0'
            position='relative'
            marginLeft='0'
            display='block'
            zIndex='0'
            maxWidth='100%'
            paddingBottom='0'
            textAlign='inherit'
            marginRight='0'
            sx={{
                borderRightStyle: 'solid',
                borderBottomColor: '#00000066',
                borderLeftWidth: 0,
                borderTopColor: '#00000066',
                borderBottomRightRadius: 'unset',
                touchAction: 'manipulation',
                borderRightWidth: '0',
                marginBottom: '0',
                borderRightColor: '#00000066',
                borderTopWidth: '0',
                userSelect: 'none',
                borderLeftColor: '#00000066',
                borderLeftStyle: 'solid',
                borderBottomLeftRadius: 'unset',
                outlineStyle: 'none',
                borderBottomWidth: '0',
                borderBottomStyle: 'solid',
                borderTopLeftRadius: 'unset',
                borderTopRightRadius: 'unset',
                borderTopStyle: 'solid',
            }}
        >
            <Box
                component='div'
                paddingBottom='8px'
                alignContent='stretch'
                bgcolor='transparent'
                flexDirection='column'
                boxSizing='border-box'
                display='flex'
                flexShrink='0'
                paddingTop='8px'
                position='static'
                paddingLeft='16px'
                alignItems='stretch'
                paddingRight='16px'
                alignSelf='auto'
                justifyContent='flex-start'
                flexGrow='0'
                sx={{
                    overflowY: 'visible',
                    borderBottomLeftRadius: '0',
                    borderBottomRightRadius: '0',
                    overflowX: 'visible',
                    borderTopLeftRadius: '0',
                    borderTopRightRadius: '0',
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
                                alignContent='stretch'
                                marginRight='12px'
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
                                    borderBottomLeftRadius: '0',
                                    borderBottomRightRadius: '0',
                                    overflowX: 'visible',
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                }}
                            >
                                <Box
                                    component='div'
                                    alignContent='stretch'
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
                                        borderBottomLeftRadius: '0',
                                        borderBottomRightRadius: '0',
                                        overflowX: 'visible',
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                    }}
                                >
                                    <Box
                                        component='div'
                                        width='44px'
                                        height='44px'
                                        borderRadius='50%'
                                        bgcolor='#121212'
                                        paddingLeft='0'
                                        paddingTop='0'
                                        minWidth='0'
                                        flexDirection='column'
                                        flexBasis='auto'
                                        marginTop='0'
                                        marginBottom='0'
                                        boxSizing='border-box'
                                        display='flex'
                                        paddingRight='0'
                                        minHeight='0'
                                        flexShrink='0'
                                        alignItems='stretch'
                                        position='relative'
                                        marginLeft='0'
                                        zIndex='0'
                                        paddingBottom='0'
                                        textAlign='inherit'
                                        marginRight='0'
                                        sx={{
                                            borderStyle: 'solid',
                                            borderColor: '#00000066',
                                            borderWidth: '0',
                                            touchAction: 'manipulation',
                                            overflowX: 'hidden',
                                            cursor: 'pointer',
                                            outlineStyle: 'none',
                                            overflowY: 'hidden',
                                        }}
                                    >
                                        <img
                                            alt={`${props.username} profile picture`}
                                            style={{
                                                fontSize: '100%',
                                                width: '100%',
                                                height: '100%',
                                                verticalAlign: 'baseline',
                                                padding: '0',
                                                margin: '0',
                                                border: '0',
                                            }}
                                            src={props.photoUrl} />
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
                                    alignContent='stretch'
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
                                        borderBottomLeftRadius: '0',
                                        borderBottomRightRadius: '0',
                                        overflowX: 'visible',
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                    }}
                                >
                                    <Box
                                        component='span'
                                        lineHeight='18px'
                                        fontSize='14px'
                                        minWidth='0'
                                        marginBottom='0!important'
                                        color='#F5F5F5'
                                        marginRight='0!important'
                                        fontWeight='600'
                                        position='relative'
                                        display='block'
                                        maxWidth='100%'
                                        marginLeft='0!important'
                                        marginTop='0!important'
                                        sx={{
                                            overflowY: 'visible',
                                            wordWrap: 'break-word',
                                            overflowX: 'visible',
                                            whiteSpace: 'pre-line',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        <Box
                                            component='span'
                                            display='block'
                                            maxWidth='100%'
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                overflowX: 'hidden',
                                                overflowY: 'hidden',
                                            }}
                                        >
                                            <Box
                                                component='div'
                                                alignContent='stretch'
                                                bgcolor='transparent'
                                                boxSizing='border-box'
                                                display='flex'
                                                flexShrink='0'
                                                position='static'
                                                alignItems='stretch'
                                                flexDirection='row'
                                                alignSelf='auto'
                                                justifyContent='flex-start'
                                                flexGrow='0'
                                                borderTopLeftRadius='0'
                                                borderTopRightRadius='0'
                                                sx={{
                                                    overflowY: 'visible',
                                                    borderBottomLeftRadius: '0',
                                                    borderBottomRightRadius: '0',
                                                    overflowX: 'visible',
                                                }}
                                            >
                                                <Box
                                                    component='div'
                                                    display='inline'
                                                    paddingLeft='0'
                                                    bgcolor='transparent'
                                                    paddingTop='0'
                                                    marginTop='0'
                                                    borderLeft='0'
                                                    marginBottom='0'
                                                    boxSizing='border-box'
                                                    paddingRight='0'
                                                    marginLeft='0'
                                                    borderRight='0'
                                                    paddingBottom='0'
                                                    textAlign='inherit'
                                                    marginRight='0'
                                                    borderBottom='0'
                                                    borderTop='0'
                                                    sx={{
                                                        touchAction: 'manipulation',
                                                        cursor: 'pointer',
                                                    }}
                                                >
                                                    <Box
                                                        component='div'
                                                        alignContent='stretch'
                                                        bgcolor='transparent'
                                                        boxSizing='border-box'
                                                        display='flex'
                                                        flexShrink='0'
                                                        position='static'
                                                        alignItems='stretch'
                                                        flexDirection='row'
                                                        alignSelf='auto'
                                                        justifyContent='flex-start'
                                                        flexGrow='0'
                                                        sx={{
                                                            overflowY: 'visible',
                                                            borderBottomLeftRadius: '0',
                                                            borderBottomRightRadius: '0',
                                                            overflowX: 'visible',
                                                            borderTopLeftRadius: '0',
                                                            borderTopRightRadius: '0',
                                                        }}
                                                    >
                                                        <Box
                                                            component='span'
                                                            lineHeight='18px'
                                                            fontSize='14px'
                                                            display='inline'
                                                            minWidth='0'
                                                            marginBottom='0!important'
                                                            color='#F5F5F5'
                                                            marginRight='0!important'
                                                            fontWeight='600'
                                                            maxWidth='100%'
                                                            marginLeft='0!important'
                                                            marginTop='0!important'
                                                            sx={{
                                                                wordWrap: 'break-word',
                                                                whiteSpace: 'pre-line',
                                                                wordBreak: 'break-word',
                                                            }}
                                                        >
                                                            <Box
                                                                component='div'
                                                                alignContent='stretch'
                                                                bgcolor='transparent'
                                                                boxSizing='border-box'
                                                                display='flex'
                                                                alignItems='center'
                                                                flexShrink='0'
                                                                posiiton='static'
                                                                flexDirection='row'
                                                                alignSelf='auto'
                                                                justifyContent='flex-start'
                                                                flexGrow='0'
                                                                sx={{
                                                                    overflowY: 'visible',
                                                                    borderBottomLeftRadius: '0',
                                                                    borderBottomRightRadius: '0',
                                                                    overflowX: 'visible',
                                                                    borderTopLeftRadius: '0',
                                                                    borderTopRightRadius: '0',
                                                                }}
                                                            >
                                                                {props.username}
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        component='span'
                                        lineHeight='18px'
                                        fontSize='14px'
                                        fontWeight='400'
                                        minWidth='0'
                                        marginBottom='0!important'
                                        marginRight='0!important'
                                        color='#A8A8A8'
                                        position='relative'
                                        display='block'
                                        maxWidth='100%'
                                        marginLeft='0!important'
                                        marginTop='0!important'
                                        sx={{
                                            overflowY: 'visible',
                                            wordWrap: 'break-word',
                                            overflowX: 'visible',
                                            whiteSpace: 'pre-line',
                                            wordBreak: 'break-word',
                                        }}
                                    >
                                        <Box
                                            component='span'
                                            display='block'
                                            maxWidth='100%'
                                            sx={{
                                                whiteSpace: 'nowrap',
                                                textOverflow: 'ellipsis',
                                                overflowX: 'hidden',
                                                overflowY: 'hidden',
                                            }}
                                        >
                                            {props.firstName} {props.lastName}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
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
                                flexShrink='1'
                                alignContent='stretch'
                                bgcolor='transparent'
                                boxSizing='border-box'
                                display='flex'
                                position='static'
                                alignItems='stretch'
                                flexDirection='row'
                                alignSelf='auto'
                                justifyContent='flex-start'
                                flexGrow='0'
                                marginLeft='12px'
                                sx={{
                                    overflowY: 'visible',
                                    borderBottomLeftRadius: '0',
                                    borderBottomRightRadius: '0',
                                    overflowX: 'visible',
                                    borderTopLeftRadius: '0',
                                    borderTopRightRadius: '0',
                                }}
                            >
                                {props.following ? (
                                    <Button
                                        variant='secondary'
                                        text='Following'
                                        contained
                                    />
                                ) : (
                                    <Button
                                        variant='primary'
                                        text='Follow'
                                        contained
                                    />
                                )}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}