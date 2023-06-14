import Box from '@mui/material/Box'
import { formatNumber } from '../../utils'


const Typography = (props: { children: string, onClick?(): void }) => {

    return (
        <Box
            component='span'
            display='inline'
            padding='0'
            margin='0'
            border='0'
            bgcolor='transparent'
            boxSizing='border-box'
            textAlign='inherit'
            sx={{
                touchAction: 'manipulation',
                cursor: 'pointer',
                outline: 'none',
            }}
            onClick={props.onClick}
        >
            <Box
                component='span'
                lineHeight='18px'
                fontSize='14px'
                display='inline'
                minWidth='0'
                margin='0!important'
                color='#F5F5F5'
                fontWeight='600'
                maxWidth='100%'
                sx={{
                    wordWrap: 'break-word',
                    whiteSpace: 'pre-line',
                    wordBreak: 'break-word',
                }}
            >
                {props.children}
            </Box>
        </Box>
    )
}

interface Props {
    likingUser: {
        id: string | number
        username: string
    } | null
    likesCount: number

    onViewUser(id): void

    onViewLikes(): void

    onViewPost?(): void
}

export default function PostLikes(props: Props) {

    const handleViewUser = () => {
        if (props.likingUser) {
            props.onViewUser(props.likingUser.id)
        }
    }

    return (
        <Box
            component='span'
            lineHeight='18px'
            fontSize='14px'
            fontWeight='400'
            minWidth='0'
            margin='0!important'
            color='#F5F5F5'
            position='relative'
            display='block'
            maxWidth='100%'
            sx={{
                wordWrap: 'break-word',
                whiteSpace: 'pre-line',
                wordBreak: 'break-word',
                overflowY: 'visible',
                overflowX: 'visible',
            }}
        >
            {props.likesCount > 0 && props.likingUser ? (
                <>
                    Liked by <Typography
                    onClick={handleViewUser}>{props.likingUser.username}</Typography> {props.likesCount > 1 && (
                    <>
                        and <Typography
                        onClick={props.onViewLikes}>{formatNumber(props.likesCount - 1)} {props.likesCount - 1 > 1 ? 'others' : 'other'}</Typography>
                    </>
                )}
                </>
            ) : (
                <>
                    Be the first to like <Typography onClick={props.onViewPost}>this</Typography>
                </>
            )}
        </Box>
    )
}