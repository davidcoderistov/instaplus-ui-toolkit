import { useMemo } from 'react'
import Box from '@mui/material/Box'


interface Props {
    photoUrls: string[]
    usernames: string[]

    onClickChatMembers(): void

    onClickChatDetails(): void
}

export default function ChatHeader(props: Props) {

    const usernames = useMemo(() => {
        if (props.usernames.length > 5) {
            return `${props.usernames.slice(0, 5).join(', ')}, others`
        }
        return props.usernames.join(', ')
    }, [props.usernames])

    return (
        <Box
            component='div'
            zIndex='1'
            display='block'
        >
            <Box
                component='div'
                height='75px'
                width='100%'
                marginBottom='0'
                boxSizing='border-box'
                display='flex'
                alignItems='center'
                minHeight='75px'
                paddingLeft='16px'
                flexDirection='row'
                paddingRight='16px'
                borderBottom='1px solid #262626'
            >
                <Box
                    component='div'
                    marginRight='-6px'
                    flexShrink='1'
                    flexWrap='nowrap'
                    marginTop='-6px'
                    minWidth='0'
                    marginLeft='-6px'
                    boxSizing='border-box'
                    display='flex'
                    alignItems='center'
                    marginBottom='-6px'
                    flexBasis='0'
                    justifyContent='space-between'
                    flexDirection='row'
                    position='relative'
                    zIndex='0'
                    flexGrow='1'
                >
                    <Box
                        component='div'
                        paddingRight='6px'
                        minWidth='0'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        flexShrink='0'
                        paddingTop='6px'
                        position='relative'
                        zIndex='0'
                        maxWidth='100%'
                        paddingLeft='6px'
                        paddingBottom='6px'
                    >
                        <Box
                            component='div'
                            paddingLeft='0'
                            bgcolor='transparent'
                            paddingTop='0'
                            minWidth='0'
                            width='fit-content'
                            flexBasis='auto'
                            marginTop='0'
                            marginBottom='0'
                            boxSizing='border-box'
                            paddingRight='0'
                            minHeight='0'
                            flexShrink='0'
                            position='relative'
                            marginLeft='0'
                            zIndex='0'
                            paddingBottom='0'
                            textAlign='inherit'
                            marginRight='0'
                            sx={{
                                borderRightStyle: 'solid',
                                borderBottomColor: '#00000066',
                                borderLeftWidth: '0',
                                borderTopColor: '#00000066',
                                touchAction: 'manipulation',
                                borderRightWidth: 0,
                                borderRightColor: '#00000066',
                                borderTopWidth: 0,
                                borderTopRightRadius: 'inherit',
                                borderLeftColor: '#00000066',
                                borderLeftStyle: 'solid',
                                cursor: 'pointer',
                                outlineStyle: 'none',
                                borderBottomWidth: '0',
                                borderBottomStyle: 'solid',
                                borderTopLeftRadius: 'inherit',
                                borderBottomRightRadius: 'inherit',
                                borderBottomLeftRadius: 'inherit',
                                borderTopStyle: 'solid',
                            }}
                            onClick={props.onClickChatMembers}
                        >
                            <Box
                                component='div'
                                height='44px'
                                width='44px'
                                position='relative'
                                display='block'
                            >
                                {props.photoUrls.length > 1 ? (
                                    <>
                                        <Box
                                            component='span'
                                            height='32px'
                                            width='32px'
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
                                            <img
                                                style={{
                                                    width: '100%',
                                                    height: '100%',
                                                    border: '0',
                                                }}
                                                alt='User avatar'
                                                height='32'
                                                src={props.photoUrls[0]}
                                                width='32' />
                                        </Box>
                                        <Box
                                            component='div'
                                            bgcolor='#000000'
                                            right='0'
                                            paddingTop='1px'
                                            paddingLeft='1px'
                                            paddingBottom='1px'
                                            bottom='0'
                                            paddingRight='1px'
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
                                                height='32px'
                                                width='32px'
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
                                                <img
                                                    style={{
                                                        width: '100%',
                                                        height: '100%',
                                                        border: '0',
                                                    }}
                                                    alt='User avatar'
                                                    className='x5yr21d xh8yej3'
                                                    height='32'
                                                    src={props.photoUrls[1]}
                                                    width='32' />
                                            </Box>
                                        </Box>
                                    </>
                                ) : props.photoUrls.length > 0 ? (
                                    <Box
                                        component='span'
                                        height='44px'
                                        width='44px'
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
                                        <img
                                            alt='User avatar'
                                            style={{ width: '100%', height: '100%' }}
                                            height='44'
                                            src={props.photoUrls[0]}
                                            width='44' />
                                    </Box>
                                ) : null}

                            </Box>
                        </Box>
                    </Box>
                    <Box
                        component='div'
                        paddingRight='6px'
                        flexShrink='1'
                        minWidth='0'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        paddingTop='6px'
                        flexBasis='0'
                        position='relative'
                        zIndex='0'
                        flexGrow='1'
                        maxWidth='100%'
                        paddingLeft='6px'
                        paddingBottom='6px'
                    >
                        <Box
                            component='div'
                            paddingLeft='0'
                            bgcolor='transparent'
                            paddingTop='0'
                            minWidth='0'
                            width='fit-content'
                            flexBasis='auto'
                            marginTop='0'
                            marginBottom='0'
                            boxSizing='border-box'
                            paddingRight='0'
                            minHeight='0'
                            flexShrink='0'
                            position='relative'
                            marginLeft='0'
                            zIndex='0'
                            paddingBottom='0'
                            textAlign='inherit'
                            marginRight='0'
                            sx={{
                                borderRightStyle: 'solid',
                                borderBottomColor: '#00000066',
                                borderLeftWidth: '0',
                                borderTopColor: '#00000066',
                                touchAction: 'manipulation',
                                borderRightWidth: '0',
                                borderRightColor: '#00000066',
                                borderTopWidth: '0',
                                borderTopRightRadius: 'inherit',
                                borderLeftColor: '#00000066',
                                borderLeftStyle: 'solid',
                                cursor: 'pointer',
                                outlineStyle: 'none',
                                borderBottomWidth: '0',
                                borderBottomStyle: 'solid',
                                borderTopLeftRadius: 'inherit',
                                borderBottomRightRadius: 'inherit',
                                borderBottomLeftRadius: 'inherit',
                                borderTopStyle: 'solid',
                            }}
                            onClick={props.onClickChatMembers}
                        >
                            <Box
                                component='div'
                                bgcolor='transparent'
                                width='fit-content'
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
                                        lineHeight='20px'
                                        fontSize='16px'
                                        minWidth='0'
                                        marginBottom='0!important'
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
                                            {usernames}
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component='div'
                    display='flex'
                    paddingLeft='12px'
                    justifyContent='flex-end'
                >
                    <Box
                        component='div'
                        paddingLeft='8px'
                        display='flex'
                        paddingRight='0'
                        paddingTop='0'
                        marginTop='0'
                    >
                        <Box
                            component='div'
                            justifyContent='center'
                            paddingLeft='0'
                            bgcolor='transparent'
                            paddingTop='0'
                            marginTop='0'
                            marginBottom='0'
                            boxSizing='border-box'
                            display='flex'
                            alignItems='center'
                            paddingRight='0'
                            marginLeft='0'
                            paddingBottom='0'
                            textAlign='inherit'
                            marginRight='0'
                            sx={{
                                cursor: 'pointer',
                                touchAction: 'manipulation',
                                borderRightStyle: 'none',
                                borderLeft: '0',
                                borderBottomStyle: 'none',
                                borderTopStyle: 'none',
                                borderRight: '0',
                                borderBottom: '0',
                                borderTop: '0',
                            }}
                            onClick={props.onClickChatDetails}
                        >
                            <Box
                                component='div'
                                justifyContent='center'
                                flexDirection='column'
                                display='flex'
                                alignItems='center'
                            >
                                <svg aria-label='Conversation information'
                                     style={{ position: 'relative', display: 'block' }}
                                     color='rgb(245, 245, 245)'
                                     fill='rgb(245, 245, 245)'
                                     height='24'
                                     role='img'
                                     viewBox='0 0 24 24'
                                     width='24'>
                                    <title>Conversation information</title>
                                    <circle
                                        cx='12.001'
                                        cy='12.005'
                                        fill='none'
                                        r='10.5'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2' />
                                    <circle
                                        cx='11.819'
                                        cy='7.709'
                                        r='1.25' />
                                    <line
                                        fill='none'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2'
                                        x1='10.569'
                                        x2='13.432'
                                        y1='16.777'
                                        y2='16.777' />
                                    <polyline
                                        fill='none'
                                        points='10.569 11.05 12 11.05 12 16.777'
                                        stroke='currentColor'
                                        strokeLinecap='round'
                                        strokeLinejoin='round'
                                        strokeWidth='2' />
                                </svg>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}