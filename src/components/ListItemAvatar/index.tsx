import React, { useCallback } from 'react'
import Box from '@mui/material/Box'


interface Props {
    loading: boolean
    loader: React.ReactNode
    user: {
        username: string
        photoUrl: string
    } | null

    onClick(): void
}

export default function ListItemAvatar(props: Props) {

    const handleClick = useCallback(() => {
        if (!props.loading) {
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
                            cursor: props.loading ? 'default' : 'pointer',
                            outlineStyle: 'none',
                            overflowY: 'hidden',
                        }}
                        onClick={handleClick}
                    >
                        {props.loading ? props.loader : props.user ? (
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