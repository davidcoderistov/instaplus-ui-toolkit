import { useMemo } from 'react'
import Box from '@mui/material/Box'


interface ChatMessageProps {
    photoUrls: string[]
    usernames: string[]
    membersCount: number
    text: string
    timestamp: string
    seen: boolean
    selected: boolean

    onClick(): void
}

export default function ChatMessage(props: ChatMessageProps) {

    const usernames = useMemo(() => {
        if (props.membersCount > 2 && props.usernames.length > 1) {
            return `${props.usernames.slice(0, 2).join(', ')} and ${props.membersCount - 2} others`
        }
        return props.usernames.join(', ')
    }, [props.usernames, props.membersCount])

    return (
        <Box
            component='div'
            paddingRight='24px'
            paddingBottom='8px'
            bgcolor={props.selected ? '#262626' : 'transparent'}
            minWidth='0'
            marginTop='0'
            paddingLeft='24px'
            marginBottom='0'
            boxSizing='border-box'
            paddingTop='8px'
            position='relative'
            marginLeft='0'
            display='block'
            zIndex='0'
            textAlign='inherit'
            marginRight='0'
            sx={{
                borderRightStyle: 'solid',
                borderBottomColor: '#00000066',
                borderBottomLeftRadius: '0',
                borderLeftWidth: '0',
                borderTopColor: '#00000066',
                touchAction: 'manipulation',
                borderRightWidth: '0',
                borderRightColor: '#00000066',
                borderTopWidth: '0',
                userSelect: 'none',
                borderBottomRightRadius: '0',
                minHeight: '0',
                borderLeftColor: '#00000066',
                borderLeftStyle: 'solid',
                cursor: 'pointer',
                outlineStyle: 'none',
                borderBottomWidth: '0',
                borderBottomStyle: 'solid',
                borderTopLeftRadius: '0',
                borderTopRightRadius: '0',
                borderTopStyle: 'solid',
                listStyle: 'none',
                textDecoration: 'none',
                outline: 'none',
                '&:hover': {
                    ...!props.selected && { backgroundColor: '#121212' },
                },
            }}
            onClick={props.onClick}
        >
            <Box
                component='div'
                width={props.seen ? '342px' : '350px'}
                justifyContent='center'
                minWidth='0'
                flexDirection='column'
                boxSizing='border-box'
                display='flex'
                alignItems='stretch'
                position='relative'
                zIndex='0'
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
                            maxWidth='100%'
                        >
                            <Box
                                component='div'
                                paddingRight='12px'
                                display='flex'
                                flexShrink='0'
                            >
                                <Box
                                    component='div'
                                    height='56px'
                                    width='56px'
                                    position='relative'
                                    display='block'
                                >
                                    {props.photoUrls.length > 0 && (
                                        <Box
                                            component='span'
                                            height={props.photoUrls.length > 1 ? '40px' : '56px'}
                                            width={props.photoUrls.length > 1 ? '40px' : '56px'}
                                            position='relative'
                                            display='block'

                                            sx={{
                                                borderBottomLeftRadius: '50%',
                                                borderTopRightRadius: '50%',
                                                overflowX: 'hidden',
                                                borderBottomRightRadius: '50%',
                                                borderTopLeftRadius: '50%',
                                                overflowY: 'hidden',
                                            }}
                                        >
                                            <img alt='User avatar'
                                                 style={{
                                                     height: '100%',
                                                     width: '100%',
                                                     border: '0',
                                                 }}
                                                 height={props.photoUrls.length > 1 ? '40' : '56'}
                                                 src={props.photoUrls[0]}
                                                 width={props.photoUrls.length > 1 ? '40' : '56'} />
                                        </Box>
                                    )}
                                    {props.photoUrls.length > 1 && (
                                        <Box
                                            component='div'
                                            bgcolor='#000000'
                                            paddingRight='2px'
                                            right='0'
                                            paddingTop='2px'
                                            paddingLeft='2px'
                                            bottom='0'
                                            paddingBottom='2px'
                                            position='absolute'
                                            display='block'
                                            sx={{
                                                borderBottomLeftRadius: '50%',
                                                borderTopRightRadius: '50%',
                                                borderBottomRightRadius: '50%',
                                                borderTopLeftRadius: '50%',
                                            }}
                                        >
                                            <Box
                                                component='span'
                                                height='40px'
                                                width='40px'
                                                position='relative'
                                                display='block'

                                                sx={{
                                                    borderBottomLeftRadius: '50%',
                                                    borderTopRightRadius: '50%',
                                                    overflowX: 'hidden',
                                                    borderBottomRightRadius: '50%',
                                                    borderTopLeftRadius: '50%',
                                                    overflowY: 'hidden',
                                                }}
                                            >
                                                <img alt='User avatar'
                                                     style={{
                                                         height: '100%',
                                                         width: '100%',
                                                         border: '0',
                                                     }}
                                                     height='40'
                                                     src={props.photoUrls[1]}
                                                     width='40' />
                                            </Box>
                                        </Box>
                                    )}
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
                                width='244px'
                                bgcolor='transparent'
                                boxSizing='border-box'
                                display='flex'
                                alignItems='center'
                                flexShrink='0'
                                position='static'
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
                                    fontWeight={props.seen ? '400' : '600'}
                                    minWidth='0'
                                    marginBottom='0!important'
                                    color='#F5F5F5'
                                    marginRight='0!important'
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
                                        {usernames}
                                    </Box>
                                </Box>
                                <Box
                                    component='div'
                                    marginLeft='4px'
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
                                        overflowX: 'visible',
                                        overflowY: 'visible',
                                        borderBottomLeftRadius: '0',
                                        borderBottomRightRadius: '0',
                                        borderTopLeftRadius: '0',
                                        borderTopRightRadius: '0',
                                    }}
                                >
                                </Box>
                            </Box>
                            <Box
                                component='div'
                                height='8px'
                                display='block' />
                            <Box
                                component='div'
                                display='flex'
                                alignItems='center'
                            >
                                <Box
                                    component='div'
                                    height='18px'
                                    bgcolor='transparent'
                                    width='100%'
                                    boxSizing='border-box'
                                    display='flex'
                                    alignItems='center'
                                    flexShrink='0'
                                    position='static'
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
                                        lineHeight='16px'
                                        fontWeight={props.seen ? '400' : '700'}
                                        minWidth='0'
                                        marginBottom='0!important'
                                        marginRight='0!important'
                                        color={props.seen ? '#A8A8A8' : '#F5F5F5'}
                                        position='relative'
                                        display='block'
                                        fontSize='12px'
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
                                            {props.text}
                                        </Box>
                                    </Box>
                                    <Box
                                        component='span'
                                        marginRight='4px'
                                        marginLeft='4px'
                                        marginTop='0'
                                        marginBottom='0'
                                        flexShrink='0'
                                        color='#A8A8A8'
                                    >
                                        <Box
                                            component='span'
                                        >
                                            <Box
                                                component='span'
                                                height='1px'
                                                width='1px'
                                                position='absolute'
                                                sx={{
                                                    clip: 'rect(0,0,0,0)',
                                                    overflowX: 'hidden',
                                                    overflowY: 'hidden',
                                                }}
                                            >
                                                &nbsp;
                                            </Box>
                                            <Box
                                                component='span'
                                            > · </Box>
                                        </Box>
                                    </Box>
                                    <Box
                                        component='div'
                                        minWidth='0'
                                        flexShrink='0'
                                        display='block'
                                    >
                                        <Box
                                            component='span'
                                            lineHeight='16px'
                                            fontWeight='400'
                                            minWidth='0'
                                            marginBottom='0!important'
                                            marginRight='0!important'
                                            color='#A8A8A8'
                                            position='relative'
                                            display='block'
                                            fontSize='12px'
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
                                                    whiteSpace='nowrap'
                                                    display='block'
                                                >
                                                    {props.timestamp}
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                    <Box
                        component='div'
                        minWidth='0'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        flexShrink='0'
                        position='relative'
                        zIndex='0'
                        maxWidth='100%'
                    >
                        {!props.seen && (
                            <Box
                                component='div'
                                display='flex'
                                flexShrink='0'
                                paddingLeft='12px'
                            >
                                <Box
                                    component='div'
                                    bgcolor='transparent'
                                    boxSizing='border-box'
                                    display='flex'
                                    alignItems='center'
                                    flexShrink='0'
                                    position='static'
                                    flexDirection='row'
                                    alignSelf='auto'
                                    flexGrow='0'
                                    justifyContent='flex-end'
                                    sx={{
                                        overflowY: 'visible',
                                        borderBottomLeftRadius: 0,
                                        borderBottomRightRadius: 0,
                                        overflowX: 'visible',
                                        borderTopLeftRadius: 0,
                                        borderTopRightRadius: 0,
                                    }}
                                >
                                    <Box
                                        component='span'
                                        height='8px'
                                        display='inline-flex'
                                        width='8px'
                                        bgcolor='#0095F6'
                                        marginRight='8px'
                                        sx={{
                                            borderBottomLeftRadius: '50%',
                                            borderTopRightRadius: '50%',
                                            borderRightStyle: 'solid',
                                            borderLeftWidth: '0',
                                            borderRightWidth: '0',
                                            borderTopWidth: '0',
                                            borderLeftStyle: 'solid',
                                            borderBottomWidth: '0',
                                            borderBottomStyle: 'solid',
                                            borderBottomRightRadius: '50%',
                                            borderTopLeftRadius: '50%',
                                            borderTopStyle: 'solid',
                                        }} />
                                </Box>
                            </Box>
                        )}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}