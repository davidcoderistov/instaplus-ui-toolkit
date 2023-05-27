import Box from '@mui/material/Box'


interface Props {
    empty?: true
    lhs?: true
    rhs?: true
    username?: string
    reply?: boolean
}

export default function ChatMessageTitle(props: Props) {

    return (
        <Box
            component='h4'
            fontSize='inherit'
            fontWeight='inherit'
            color='inherit'
            margin='0'
            padding='0'
            sx={{
                outline: 'none',
            }}
        >
            {props.empty ? (
                <Box
                    component='span'
                    height='1px'
                    width='1px'
                    position='absolute'
                    sx={{
                        clip: 'rect(0,0,0,0)',
                        overflowX: 'hidden',
                        clipPath: 'inset(50%)',
                        overflowY: 'hidden',
                    }}
                >
                    Message title
                </Box>
            ) : (
                <Box
                    component='div'
                    flexDirection='column'
                    display='flex'
                    sx={{ ...props.rhs && { alignItems: 'flex-end' } }}
                >
                    <Box
                        component='div'
                        paddingLeft='50px'
                        alignSelf='stretch'
                        paddingRight='22px'
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
                            paddingTop='10px'
                            display='flex'
                            alignItems='center'
                            sx={{
                                ...props.rhs && { paddingRight: '8px' },
                                ...props.lhs && { paddingLeft: props.reply ? '8px' : '12px' },
                                ...props.lhs && !props.reply && { paddingBottom: '6px' },
                            }}
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
                                {props.reply ?
                                    props.lhs ? `${props.username} replied to you` : props.rhs ? `You replied to ${props.username}` : null :
                                    props.username}
                            </Box>
                        </Box>
                    </Box>
                </Box>
            )}
        </Box>
    )
}