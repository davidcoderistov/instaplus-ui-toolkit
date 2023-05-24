import Box from '@mui/material/Box'


interface Props {
    photoUrl: string
    orientation: 'portrait' | 'landscape'
    reply?: boolean
}

export default function ChatMessagePhoto({ photoUrl, orientation, reply }: Props) {

    const maxWidth = reply ? 141 : 236
    const maxHeight = reply ? 204 : 225
    const paddingBottom = orientation === 'portrait' ? 150 : 66.6667
    const aspectRatio = orientation === 'portrait' ? 320 / 480 : 600 / 400
    const width = aspectRatio * maxHeight

    return (
        <Box
            component='div'
            zIndex='1'
            position='relative'
            maxWidth='100%'
            display='block'
        >
            <Box
                component='div'
                bgcolor='transparent'
                paddingTop='0'
                minWidth='0'
                flexBasis='auto'
                marginTop='0'
                marginBottom='0'
                boxSizing='border-box'
                display='flex'
                paddingRight='0'
                minHeight='0'
                flexShrink='0'
                alignItems='stretch'
                flexDirection='row'
                position='relative'
                marginLeft='0'
                zIndex='0'
                paddingBottom='0'
                textAlign='inherit'
                marginRight='0'
                sx={{
                    borderBottomLeftRadius: '18px',
                    borderTopLeftRadius: '18px',
                    borderRightStyle: 'solid',
                    borderBottomRightRadius: '18px',
                    borderBottomColor: '#0000000d',
                    borderLeftWidth: '0',
                    paddingLeft: '0',
                    borderTopColor: '#0000000d',
                    touchAction: 'manipulation',
                    borderRightWidth: '0',
                    borderRightColor: '#0000000d',
                    borderTopWidth: '0',
                    userSelect: 'none',
                    overflowX: 'hidden',
                    borderLeftColor: '#0000000d',
                    borderLeftStyle: 'solid',
                    cursor: 'pointer',
                    outlineStyle: 'none',
                    borderBottomWidth: '0',
                    borderBottomStyle: 'solid',
                    borderTopRightRadius: '18px',
                    borderTopStyle: 'solid',
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
                        maxWidth='100%'
                        display='block'
                    >
                        <Box
                            component='div'
                            maxWidth={`${maxWidth}px`}
                            display='block'
                        >
                            <Box
                                component='div'
                                maxWidth='100%'
                                width={`${width}px`}
                                flexDirection='column'
                                marginTop='0'
                                marginBottom='0'
                                display='flex'
                                position='relative'
                                marginLeft='0'
                                marginRight='0'
                                sx={{
                                    borderBottomLeftRadius: '22px',
                                    borderTopLeftRadius: '22px',
                                    borderBottomRightRadius: '22px',
                                    borderTopRightRadius: '22px',
                                }}
                            >
                                <Box
                                    component='div'
                                    paddingBottom={`${paddingBottom}%`}
                                    height='auto'
                                    width='100%'
                                    position='relative'
                                    display='block'
                                >
                                    <Box
                                        component='div'
                                        width='100%'
                                        right='0'
                                        boxSizing='border-box'
                                        height='100%'
                                        bottom='0'
                                        left='0'
                                        top='0'
                                        position='absolute'
                                        display='block'
                                    >
                                        <img
                                            alt='Open photo'
                                            style={{
                                                display: 'block',
                                                maxHeight: `${maxHeight}px`,
                                                maxWidth: '100%',
                                                width: '100%',
                                                height: '100%',
                                                border: 0,
                                                overflowClipMargin: 'content-box',
                                                overflow: 'clip',
                                            }}
                                            src={photoUrl}
                                        />
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
                <Box
                    component='div'
                    right='0'
                    bgcolor='#0000000d'
                    bottom='0'
                    left='0'
                    top='0'
                    position='absolute'
                    display='block'
                    sx={{
                        opacity: '0',
                        pointerEvents: 'none',
                        borderTopRightRadius: 'inherit',
                        borderTopLeftRadius: 'inherit',
                        borderBottomRightRadius: 'inherit',
                        borderBottomLeftRadius: 'inherit',
                    }}
                />
            </Box>
        </Box>
    )
}