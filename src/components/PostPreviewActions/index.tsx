import Box from '@mui/material/Box'
import PostActionsLikeButton from '../PostActionsLikeButton'
import PostActionsCommentButton from '../PostActionsCommentButton'
import PostActionsSaveButton from '../PostActionsSaveButton'


interface Props {
    isPostLiked: boolean

    onLikePost(): void

    onUnlikePost(): void

    isPostSaved: boolean

    onSavePost(): void

    onRemovePost(): void

    onCommentOnPost(): void
}

export default function PostPreviewActions(props: Props) {

    return (
        <Box
            component='div'
            marginTop='4px'
            display='flex'
            flexDirection='row'
            paddingX='16px'
            borderTop='1px solid #262626'
            marginX='0'
            marginBottom='0'
            order='3'
            paddingBottom='8px'
            paddingTop='6px'
        >
            <Box
                component='span'
                display='inline-block'
                marginLeft='-8px'
            >
                <PostActionsLikeButton
                    isPostLiked={props.isPostLiked}
                    onLikePost={props.onLikePost}
                    onUnlikePost={props.onUnlikePost} />
            </Box>
            <Box
                component='span'
                display='inline-block'
            >
                <PostActionsCommentButton onClick={props.onCommentOnPost} />
            </Box>
            <Box
                component='span'
                display='inline-block'
                marginLeft='auto'
                marginRight='-10px'
                padding='0'
                sx={{ verticalAlign: 'baseline' }}
            >
                <PostActionsSaveButton
                    isPostSaved={props.isPostSaved}
                    onSavePost={props.onSavePost}
                    onRemovePost={props.onRemovePost} />
            </Box>
        </Box>
    )
}