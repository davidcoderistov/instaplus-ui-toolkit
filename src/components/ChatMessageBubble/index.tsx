import { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import ChatMessagePhoto from '../ChatMessagePhoto'


const Wrapper = (props: { type?: 'wrap' | 'contain', flexGrow: string }) => {

    return (
        <Box
            component='div'
            alignSelf='stretch'
            flexDirection='column'
            bgcolor='#000000'
            display='flex'
            alignItems='inherit'
            flexGrow={props.flexGrow}
            maxWidth='100%'
            justifyContent='flex-end'
        >
            {props.type === 'wrap' && (
                <Box
                    component='div'
                    flexBasis='0'
                    flexGrow='1'
                    display='block'
                />
            )}
            {props.type === 'contain' && (
                <Box
                    component='div'
                    flexShrink='1'
                    display='flex'
                    width='16px'
                    flexGrow='1'
                />
            )}
        </Box>
    )
}

interface Props {
    position: 'start' | 'between' | 'end' | 'solo'
    type: 'text' | 'photo'
    lhs?: true
    rhs?: true
    hasAvatar?: boolean
    avatarUrl?: string
    avatarMeta?: string
    photoUrl?: string
    photoOrientation?: string
    text?: string

    onClickPhoto(): void
}

export default function ChatMessageBubble(props: Props) {

    const [hovered, setHovered] = useState(false)

    const borderBottomLeftRadius = props.rhs || props.position === 'end' || props.position === 'solo' ? '18px' : '4px'
    const borderTopLeftRadius = props.rhs || props.position === 'start' || props.position === 'solo' ? '18px' : '4px'
    const borderBottomRightRadius = props.lhs || props.position === 'end' || props.position === 'solo' ? '18px' : '4px'
    const borderTopRightRadius = props.lhs || props.position === 'start' || props.position === 'solo' ? '18px' : '4px'

    const handleMouseEnter = useCallback(() => {
        setHovered(true)
    }, [])

    const handleMouseLeave = useCallback(() => {
        setHovered(false)
    }, [])

    return (
        <Box
            component='div'
            display='block'
            onMouseEnter={handleMouseEnter}
            onMouseLeave={handleMouseLeave}
        >
            <Box
                component='div'
                display='flex'
            >
                {props.rhs && (
                    <Box
                        component='div'
                        alignSelf='stretch'
                        flexDirection='column'
                        bgcolor='#000000'
                        display='flex'
                        paddingRight='8px'
                        paddingLeft='14px'
                        alignItems='inherit'
                        flexGrow='0'
                        maxWidth='100%'
                        justifyContent='flex-end'
                    />
                )}
                {props.lhs && (
                    <Box
                        component='div'
                        alignSelf='stretch'
                        flexDirection='column'
                        bgcolor='#000000'
                        display='flex'
                        paddingRight='8px'
                        paddingLeft='14px'
                        alignItems='inherit'
                        flexGrow='0'
                        maxWidth='100%'
                        justifyContent='flex-end'
                    >
                        <Box
                            component='div'
                            bgcolor='transparent'
                            paddingLeft='0'
                            paddingTop='0'
                            minWidth='0'
                            flexBasis='auto'
                            marginTop='0'
                            marginBottom='0'
                            boxSizing='border-box'
                            paddingRight='0'
                            minHeight='0'
                            flexShrink='0'
                            display='inline-block'
                            alignItems='stretch'
                            flexDirection='row'
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
                                userSelect: 'none',
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
                        >
                            {props.hasAvatar ? (
                                <Box
                                    component='div'
                                    alignItems='flex-end'
                                    width='28px'
                                    display='flex'
                                    height='28px'
                                >
                                    <Box
                                        component='span'
                                        flexBasis='inherit'
                                        maxHeight='inherit'
                                        justifyContent='inherit'
                                        flexGrow='inherit'
                                        minWidth='inherit'
                                        height='inherit'
                                        minHeight='inherit'
                                        width='inherit'
                                        maxWidth='inherit'
                                        display='inherit'
                                        alignSelf='inherit'
                                        alignItems='inherit'
                                        flexDirection='inherit'
                                        flexShrink='inherit'
                                    >
                                        <img style={{
                                            borderRadius: '50%',
                                            objectFit: 'cover',
                                            width: '100%',
                                            height: '100%',
                                            display: 'inline-block',
                                            border: '0',
                                            overflowClipMargin: 'content-box',
                                            overflow: 'clip',
                                        }}
                                             src={props.avatarUrl}
                                             alt={props.avatarMeta} />
                                    </Box>
                                </Box>
                            ) : (
                                <Box
                                    component='div'
                                    width='28px'
                                    display='block'
                                />
                            )}
                        </Box>
                    </Box>
                )}
                <Box
                    component='div'
                    flexShrink='1'
                    minWidth='0'
                    display='flex'
                    flexGrow='1'
                    sx={{
                        ...props.rhs && { flexDirection: 'row-reverse' },
                    }}
                >
                    <Box
                        component='div'
                        alignSelf='stretch'
                        flexDirection='column'
                        display='flex'
                        maxWidth='calc(100% - 101px)'
                        alignItems='inherit'
                        justifyContent='flex-end'
                    >
                        <Box
                            component='div'
                            paddingLeft='0'
                            fontSize='100%'
                            paddingTop='0'
                            flexDirection='column'
                            marginTop='0'
                            borderLeft='0'
                            marginBottom='0'
                            boxSizing='border-box'
                            display='flex'
                            paddingRight='0'
                            flexShrink='0'
                            alignItems='stretch'
                            position='relative'
                            marginLeft='0'
                            borderRight='0'
                            paddingBottom='0'
                            marginRight='0'
                            borderBottom='0'
                            borderTop='0'
                            sx={{
                                touchAction: 'manipulation',
                                verticalAlign: 'baseline',
                            }}
                        >
                            <Box
                                component='div'
                                width='100%'
                                display='flex'
                            >
                                {props.rhs && (
                                    <Wrapper
                                        type='wrap'
                                        flexGrow='1' />
                                )}
                                <Box
                                    component='div'
                                    flexDirection='column'
                                    display='flex'
                                    position='relative'
                                    alignItems={props.lhs ? 'flex-start' : 'flex-end'}
                                    maxWidth='100%'
                                >
                                    {props.position !== 'start' && (
                                        <Box
                                            component='div'
                                            width='100%'
                                            bgcolor='#000000'
                                            height='2px'
                                            display='block'
                                        />
                                    )}
                                    {props.type === 'photo' ? (
                                        <Box
                                            component='div'
                                            alignSelf='stretch'
                                            flexDirection='column'
                                            bgcolor='#000000'
                                            display='flex'
                                            alignItems='inherit'
                                            flexGrow='0'
                                            maxWidth='100%'
                                            justifyContent='flex-end'
                                        >
                                            <ChatMessagePhoto
                                                photoUrl={props.photoUrl}
                                                orientation={props.photoOrientation}
                                                borderRadius={{
                                                    topLeft: borderTopLeftRadius,
                                                    bottomLeft: borderBottomLeftRadius,
                                                    topRight: borderTopRightRadius,
                                                    bottomRight: borderBottomRightRadius,
                                                }}
                                                onClick={props.onClickPhoto}
                                            />
                                        </Box>
                                    ) : (
                                        <Box
                                            component='div'
                                            width='100%'
                                            display='flex'
                                        >
                                            {props.rhs && (
                                                <Wrapper
                                                    type='wrap'
                                                    flexGrow='1' />
                                            )}
                                            <Box
                                                component='div'
                                                bgcolor={props.rhs ? '#3797F0' : '#262626'}
                                                padding='7px 12px'
                                                zIndex='1'
                                                maxWidth='564px'
                                                position='relative'
                                                color='#FFFFFF'
                                                display='block'
                                                sx={{
                                                    borderBottomRightRadius: borderBottomRightRadius,
                                                    overflowX: 'hidden',
                                                    borderBottomLeftRadius: borderBottomLeftRadius,
                                                    borderTopLeftRadius: borderTopLeftRadius,
                                                    overflowWrap: 'break-word',
                                                    borderTopRightRadius: borderTopRightRadius,
                                                    wordBreak: 'break-word',
                                                    overflowY: 'hidden',
                                                }}
                                            >
                                                <Box
                                                    component='div'
                                                    boxSizing='border-box'
                                                    position='relative'
                                                    zIndex='0'
                                                    display='block'
                                                >
                                                    <Box
                                                        component='div'
                                                        fontSize='0.9375rem'
                                                        textAlign='left'
                                                        lineHeight='20px'
                                                        color={props.rhs ? '#FFFFFF' : '#F5F5F5'}
                                                        display='block'
                                                        sx={{
                                                            whiteSpace: 'pre-wrap',
                                                        }}
                                                    >
                                                        {props.text}
                                                    </Box>
                                                </Box>
                                            </Box>
                                            {props.lhs && (
                                                <Wrapper
                                                    type='wrap'
                                                    flexGrow='1' />
                                            )}
                                        </Box>
                                    )}
                                </Box>
                                {props.lhs && (
                                    <Wrapper
                                        type='wrap'
                                        flexGrow='1' />
                                )}
                            </Box>
                            <Wrapper flexGrow='0' />
                        </Box>
                    </Box>
                    <Box
                        component='div'
                        alignSelf='stretch'
                        flexDirection='column'
                        bgcolor='#000000'
                        display='flex'
                        alignItems='inherit'
                        flexGrow='0'
                        maxWidth='100%'
                        justifyContent='flex-end'
                    >
                        <Box
                            component='div'
                            justifyContent='center'
                            flexDirection='column'
                            display='flex'
                            flexShrink='0'
                            zIndex='10'
                            position='relative'
                            width='96px'
                            flexGrow='1'
                            sx={{
                                ...props.lhs && { paddingLeft: '5px' },
                                ...props.rhs && { paddingRight: '5px' },
                            }}
                        >
                            <Box
                                component='div'
                                display='flex'
                                alignItems='center'
                                flexDirection={props.lhs ? 'row' : 'row-reverse'}
                                width='96px'
                            >
                                {hovered && (
                                    <Box
                                        component='div'
                                        display='flex'
                                        alignItems='center'
                                        flexDirection={props.lhs ? 'row' : 'row-reverse'}
                                        width='96px'
                                    >
                                        <Box
                                            component='div'
                                        >
                                            <Box
                                                component='div'
                                                paddingBottom='8px'
                                                paddingLeft='8px'
                                                justifyContent='center'
                                                bgcolor='transparent'
                                                marginTop='0'
                                                marginBottom='0'
                                                borderLeft='0'
                                                boxSizing='border-box'
                                                display='flex'
                                                alignItems='center'
                                                paddingTop='8px'
                                                paddingRight='8px'
                                                marginLeft='0'
                                                marginRight='0'
                                                sx={{
                                                    touchAction: 'manipulation',
                                                    cursor: 'pointer',
                                                    borderRightStyle: 'none',
                                                    borderBottomStyle: 'none',
                                                    borderTopStyle: 'none',
                                                    borderLeftStyle: 'none',
                                                    opacity: '0.568',
                                                    '&:hover': { opacity: 1 },
                                                }}
                                            >
                                                <Box
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                    flexDirection='column'
                                                >
                                                    <svg
                                                        aria-label='Reaction'
                                                        style={{ display: 'block', position: 'relative' }}
                                                        color='rgb(245, 245, 245)'
                                                        fill='rgb(245, 245, 245)'
                                                        height='16'
                                                        role='img'
                                                        viewBox='0 0 24 24'
                                                        width='16'>
                                                        <title>Reaction</title>
                                                        <path
                                                            d='M15.83 10.997a1.167 1.167 0 1 0 1.167 1.167 1.167 1.167 0 0 0-1.167-1.167Zm-6.5 1.167a1.167 1.167 0 1 0-1.166 1.167 1.167 1.167 0 0 0 1.166-1.167Zm5.163 3.24a3.406 3.406 0 0 1-4.982.007 1 1 0 1 0-1.557 1.256 5.397 5.397 0 0 0 8.09 0 1 1 0 0 0-1.55-1.263ZM12 .503a11.5 11.5 0 1 0 11.5 11.5A11.513 11.513 0 0 0 12 .503Zm0 21a9.5 9.5 0 1 1 9.5-9.5 9.51 9.51 0 0 1-9.5 9.5Z' />
                                                    </svg>
                                                </Box>
                                            </Box>
                                        </Box>
                                        <Box
                                            component='div'
                                        >
                                            <Box
                                                component='div'
                                                paddingBottom='8px'
                                                paddingLeft='8px'
                                                justifyContent='center'
                                                bgcolor='transparent'
                                                marginTop='0'
                                                marginBottom='0'
                                                borderLeft='0'
                                                boxSizing='border-box'
                                                display='flex'
                                                alignItems='center'
                                                paddingTop='8px'
                                                paddingRight='8px'
                                                marginLeft='0'
                                                marginRight='0'
                                                sx={{
                                                    touchAction: 'manipulation',
                                                    cursor: 'pointer',
                                                    borderRightStyle: 'none',
                                                    borderBottomStyle: 'none',
                                                    borderTopStyle: 'none',
                                                    borderLeftStyle: 'none',
                                                    opacity: '0.568',
                                                    '&:hover': { opacity: 1 },
                                                }}
                                            >
                                                <Box
                                                    display='flex'
                                                    justifyContent='center'
                                                    alignItems='center'
                                                    flexDirection='column'
                                                >
                                                    <svg
                                                        aria-label='Reply'
                                                        style={{ display: 'block', position: 'relative' }}
                                                        color='rgb(245, 245, 245)'
                                                        fill='rgb(245, 245, 245)'
                                                        height='16'
                                                        role='img'
                                                        viewBox='0 0 24 24'
                                                        width='16'>
                                                        <title>Reply</title>
                                                        <path
                                                            d='M14 8.999H4.413l5.294-5.292a1 1 0 1 0-1.414-1.414l-7 6.998c-.014.014-.019.033-.032.048A.933.933 0 0 0 1 9.998V10c0 .027.013.05.015.076a.907.907 0 0 0 .282.634l6.996 6.998a1 1 0 0 0 1.414-1.414L4.415 11H14a7.008 7.008 0 0 1 7 7v3.006a1 1 0 0 0 2 0V18a9.01 9.01 0 0 0-9-9Z' />
                                                    </svg>
                                                </Box>
                                            </Box>
                                        </Box>
                                    </Box>
                                )}
                            </Box>
                        </Box>
                    </Box>
                    <Wrapper
                        type='wrap'
                        flexGrow='1'
                    />
                </Box>
                <Wrapper
                    type='contain'
                    flexGrow='0'
                />
            </Box>
        </Box>
    )
}