import React, { useCallback } from 'react'
import Box from '@mui/material/Box'


interface Props {
    loading: boolean
    hashtag?: boolean
    loader: React.ReactNode
    user: {
        username: string
        photoUrl: string
    } | null

    onClick?(): void
}

export default function ListItemAvatar(props: Props) {

    const handleClick = useCallback(() => {
        if (!props.loading && !!props.onClick) {
            props.onClick()
        }
    }, [props.loading, props.onClick])

    return (
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
                        alignItems={props.hashtag ? 'center' : 'stretch'}
                        position='relative'
                        marginLeft='0'
                        zIndex='0'
                        paddingBottom='0'
                        textAlign='inherit'
                        marginRight='0'
                        sx={{
                            ...props.hashtag && { justifyContent: 'center', border: '1px solid #363636' },
                            ...!props.hashtag && { borderStyle: 'solid', borderColor: '#00000066', borderWidth: '0' },
                            touchAction: 'manipulation',
                            overflowX: 'hidden',
                            cursor: props.loading ? 'default' : 'pointer',
                            outlineStyle: 'none',
                            overflowY: 'hidden',
                        }}
                        onClick={handleClick}
                    >
                        {props.loading ? props.loader : props.hashtag ? (
                            <svg aria-label='Hashtag' style={{ position: 'relative', display: 'block' }}
                                 color='rgb(245, 245, 245)'
                                 fill='rgb(245, 245, 245)' height='16' role='img' viewBox='0 0 24 24' width='16'>
                                <title>Hashtag</title>
                                <line fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                                      strokeWidth='2' x1='4.728' x2='20.635' y1='7.915' y2='7.915' />
                                <line fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                                      strokeWidth='2' x1='3.364' x2='19.272' y1='15.186' y2='15.186' />
                                <line fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                                      strokeWidth='2' x1='17.009' x2='13.368' y1='2' y2='22' />
                                <line fill='none' stroke='currentColor' strokeLinecap='round' strokeLinejoin='round'
                                      strokeWidth='2' x1='10.64' x2='7' y1='2' y2='22' />
                            </svg>
                        ) : props.user ? (
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
                        ) : null}
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}