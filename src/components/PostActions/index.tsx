import Box from '@mui/material/Box'
import PostActionsLikeButton from '../PostActionsLikeButton'
import PostActionsCommentButton from '../PostActionsCommentButton'
import PostActionsSaveButton from '../PostActionsSaveButton'


interface Props {
    dense?: boolean

    isPostLiked: boolean

    onLikePost(): void

    onUnlikePost(): void

    isPostSaved: boolean

    onSavePost(): void

    onRemovePost(): void

    onCommentOnPost(): void
}


export default function PostActions(props: Props) {

    return (
        <Box
            component='div'
            marginTop='4px'
            marginBottom='0'
            marginX='0'
            display='flex'
            flexDirection='row'
            overflow='visible'
            paddingBottom={props.dense ? '6px' : '8px'}
            paddingLeft={props.dense ? '0' : '16px'}
            paddingRight={props.dense ? '0' : '16px'}
            paddingTop={props.dense ? '0' : '6px'}
            sx={{
                ...!props.dense && {
                    order: '3',
                    borderTop: '1px solid #262626',
                },
            }}
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