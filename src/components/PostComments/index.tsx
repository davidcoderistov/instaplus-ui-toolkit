import Box from '@mui/material/Box'
import PostComment from '../PostComment'
import CircularProgress from '@mui/material/CircularProgress'


interface Creator {
    id: string | number
    username: string
    photoUrl: string
}

interface Comment {
    id: string | number
    creator: Creator
    body: string
    isLiked: boolean
    likesCount: number
    repliesCount: number
    replies: Comment[]
    showReplies: boolean
    repliesLoading: boolean
    createdAt: number
}

interface Post {
    id: string | number
    creator: Creator
    description: string | null
    createdAt: number
}

interface Props {
    post: Post
    comments: Comment[]
    commentsLoading: boolean
    hasMoreComments: boolean

    onFetchMoreComments(): void

    onViewUser(userId: string | number): void

    onViewCommentLikes(commentId: string | number): void

    onReplyToComment(commentId: string | number): void

    onLikeComment(commentId: string | number): void

    onUnlikeComment(commentId: string | number): void

    onViewReplies(commentId: string | number): void

    onHideReplies(commentId: string | number): void
}

export default function PostComments(props: Props) {

    const handleFetchMoreComments = () => {
        if (!props.commentsLoading) {
            props.onFetchMoreComments()
        }
    }

    return (
        <Box
            component='div'
            margin='0 0 auto'
            padding='0 16px'
            order='1'
            display='flex'
            flexDirection='column'
            flexGrow='1'
            flexShrink='1'
            minHeight='0'
            position='relative'
            sx={{
                overflowX: 'hidden',
                overflowY: 'auto',
            }}
        >
            {!props.commentsLoading && !props.hasMoreComments && props.comments.length < 1 ? (
                <Box
                    component='div'
                    height='100%'
                    borderRadius='0'
                    justifyContent='center'
                    bgcolor='transparent'
                    flexDirection='column'
                    boxSizing='border-box'
                    display='flex'
                    alignItems='center'
                    flexShrink='0'
                    position='static'
                    alignSelf='auto'
                    flexGrow='0'
                    sx={{
                        overflowY: 'visible',
                        overflowX: 'visible',
                    }}
                >
                    <Box
                        component='div'
                        borderRadius='0'
                        bgcolor='transparent'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        flexShrink='0'
                        position='static'
                        alignItems='stretch'
                        alignSelf='auto'
                        justifyContent='flex-start'
                        marginBottom='8px'
                        flexGrow='0'
                        sx={{
                            overflowY: 'visible',
                            overflowX: 'visible',
                        }}
                    >
                        <Box
                            component='span'
                            lineHeight='30px'
                            minWidth='0'
                            margin='0!important'
                            color='#F5F5F5'
                            textAlign='center'
                            fontWeight='700'
                            position='relative'
                            display='block'
                            maxWidth='100%'
                            fontSize='24px'
                            sx={{
                                overflowY: 'visible',
                                overflowX: 'visible',
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-line',
                                wordBreak: 'break-word',
                            }}
                        >
                            No comments yet.
                        </Box>
                    </Box>
                    <Box
                        component='div'
                        borderRadius='0'
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
                            overflowX: 'visible',
                        }}
                    >
                        <Box
                            component='span'
                            lineHeight='18px'
                            fontSize='14px'
                            fontWeight='400'
                            minWidth='0'
                            margin='0!important'
                            color='#F5F5F5'
                            textAlign='center'
                            position='relative'
                            display='block'
                            maxWidth='100%'
                            sx={{
                                overflowY: 'visible',
                                overflowX: 'visible',
                                wordWrap: 'break-word',
                                whiteSpace: 'pre-line',
                                wordBreak: 'break-word',
                            }}
                        >
                            Start the conversation.
                        </Box>
                    </Box>
                </Box>
            ) : (
                <Box
                    component='div'
                    border='0'
                    boxSizing='border-box'
                    flexGrow='1'
                    fontSize='100%'
                    height='100%'
                    width='calc(100% - 16px)'
                    left='0'
                    margin='0'
                    paddingY='16px'
                    paddingLeft='16px'
                    paddingRight='0'
                    position='absolute'
                    display='block'
                    sx={{
                        verticalAlign: 'baseline',
                    }}
                >
                    {props.commentsLoading && props.comments.length < 1 ? [...Array(6).keys()].map(index => (
                        <PostComment
                            key={index}
                            loading />
                    )) : (
                        <>
                            {props.post.description && (
                                <PostComment
                                    condensed
                                    comment={{
                                        id: 'post-description-comment',
                                        creator: props.post.creator,
                                        body: props.post.description,
                                        isLiked: false,
                                        likesCount: 0,
                                        repliesCount: 0,
                                        showReplies: false,
                                        repliesLoading: false,
                                        createdAt: props.post.createdAt,
                                    }}
                                />
                            )}
                            {props.comments.map(comment => (
                                <PostComment
                                    key={comment.id}
                                    comment={comment}
                                    onViewUser={props.onViewUser}
                                    onViewCommentLikes={props.onViewCommentLikes}
                                    onReplyToComment={props.onReplyToComment}
                                    onLikeComment={props.onLikeComment}
                                    onUnlikeComment={props.onUnlikeComment}
                                    onViewReplies={props.onViewReplies}
                                    onHideReplies={props.onHideReplies}
                                />
                            ))}
                            {((props.commentsLoading && props.comments.length > 0) || props.hasMoreComments) && (
                                <Box
                                    component='div'
                                    minHeight='40px'
                                    borderRadius='0'
                                    justifyContent='center'
                                    bgcolor='transparent'
                                    flexDirection='column'
                                    margin='0'
                                    boxSizing='border-box'
                                    display='flex'
                                    alignItems='stretch'
                                    position='relative'
                                    sx={{
                                        overflowY: 'visible',
                                        overflowX: 'visible',
                                    }}
                                >
                                    <Box
                                        component='div'
                                        alignItems='center'
                                        border='none'
                                        display='flex'
                                        justifyContent='center'
                                        color='#F5F5F5'
                                        fontSize='14px'
                                        lineHeight='18px'
                                        margin='0'
                                        padding='8px'
                                        sx={{ cursor: props.commentsLoading ? 'default' : 'pointer' }}
                                        onClick={handleFetchMoreComments}
                                    >
                                        <Box
                                            component='div'
                                            display='flex'
                                            alignItems='center'
                                            justifyContent='center'
                                        >
                                            {props.commentsLoading ? (
                                                <CircularProgress
                                                    size={24}
                                                    thickness={5}
                                                    sx={{
                                                        color: 'grey',
                                                        marginLeft: '8px',
                                                        position: 'relative',
                                                        left: '-4px',
                                                    }} />
                                            ) : (
                                                <svg
                                                    aria-label='Load more comments'
                                                    style={{ position: 'relative', display: 'block' }}
                                                    color='rgb(245, 245, 245)'
                                                    fill='rgb(245, 245, 245)'
                                                    height='24'
                                                    role='img'
                                                    viewBox='0 0 24 24'
                                                    width='24'
                                                >
                                                    <title>Load more comments</title>
                                                    <circle cx='12.001' cy='12.005' fill='none' r='10.5'
                                                            stroke='currentColor'
                                                            strokeLinecap='round' strokeLinejoin='round'
                                                            strokeWidth='2' />
                                                    <line fill='none' stroke='currentColor' strokeLinecap='round'
                                                          strokeLinejoin='round' strokeWidth='2' x1='7.001' x2='17.001'
                                                          y1='12.005' y2='12.005' />
                                                    <line fill='none' stroke='currentColor' strokeLinecap='round'
                                                          strokeLinejoin='round' strokeWidth='2' x1='12.001' x2='12.001'
                                                          y1='7.005' y2='17.005' />
                                                </svg>
                                            )}
                                        </Box>
                                    </Box>
                                </Box>
                            )}
                        </>
                    )}
                </Box>
            )}
        </Box>
    )
}