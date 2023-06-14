import Box from '@mui/material/Box'
import PostLikeAvatars from '../PostLikeAvatars'
import PostLikes from '../PostLikes'


interface User {
    id: string | number
    username: string
    photoUrl: string
}

interface Props {
    likingUsers: User[] | null
    likingUser: {
        id: string | number
        username: string
    } | null
    likesCount: number

    onViewUser(id): void

    onViewLikes(): void
}

export default function PostPreviewLikes(props: Props) {

    return (
        <Box
            component='div'
            paddingLeft='16px'
            paddingRight='16px'
            marginBottom='4px'
            order='4'
            display='block'
        >
            <Box
                component='div'
                borderRadius='0'
                bgcolor='transparent'
                minWidth='0'
                boxSizing='border-box'
                display='flex'
                minHeight='0'
                alignItems='stretch'
                flexDirection='row'
                justifyContent='flex-start'
                position='relative'
                sx={{
                    overflowY: 'visible',
                    overflowX: 'visible',
                }}
            >
                {props.likingUsers && props.likingUsers.length > 0 && (
                    <PostLikeAvatars
                        likingUsers={props.likingUsers}
                        onViewLikes={props.onViewLikes}
                    />
                )}
                <Box
                    component='div'
                    margin='auto'
                    alignContent='stretch'
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
                    flexWrap='wrap'
                    sx={{
                        overflowY: 'visible',
                        overflowX: 'visible',
                    }}
                >
                    <PostLikes
                        likingUser={props.likingUser}
                        likesCount={props.likesCount}
                        onViewUser={props.onViewUser}
                        onViewLikes={props.onViewLikes}
                    />
                </Box>
            </Box>
        </Box>
    )
}