import { useMemo } from 'react'
import Box from '@mui/material/Box'
import ChatMessageTitle from '../ChatMessageTitle'
import ChatMessageReply from '../ChatMessageReply'
import ChatMessageBubble from '../ChatMessageBubble'


interface Message {
    creatorUsername: string
    creatorPhotoUrl: string
    text: string | null
    photoUrl: string | null
    photoOrientation: 'portrait' | 'landscape' | null
    isVideo: boolean
    onClickPhoto: () => void | null
}

interface Props {
    type: 'single' | 'group'
    position: 'start' | 'between' | 'end' | 'solo'
    lhs: boolean
    message: Message
    replyMessage: Message | null
    reactions?: string[]
    reactionsCount?: number
}

export default function ChatMessage(props: Props) {

    const showMessageTitle = useMemo(() =>
            !((props.type === 'group' && (props.position === 'start' || props.position === 'solo')) || props.replyMessage),
        [props.type, props.position, props.replyMessage])

    return (
        <Box
            component='div'
            position='relative'
            display='block'
        >
            <Box
                component='div'
                display='block'
            >
                <Box
                    component='div'
                    flexDirection='column'
                    display='flex'
                    position='relative'
                >
                    {(props.position === 'start' || props.position === 'solo' || Boolean(props.replyMessage)) && (
                        <Box
                            component='div'
                            height='10px'
                            width='100%'
                            bgcolor='#000000'
                            display='block'
                        />
                    )}
                    <ChatMessageTitle
                        empty={showMessageTitle}
                        lhs={props.lhs}
                        rhs={!props.lhs}
                        username={props.replyMessage ? props.replyMessage.creatorUsername : props.message.creatorUsername}
                        reply={!!props.replyMessage}
                    />
                    {props.replyMessage && (
                        <>
                            {props.replyMessage.text ? (
                                <ChatMessageReply
                                    lhs={props.lhs}
                                    rhs={!props.lhs}
                                    message={props.replyMessage.text} />
                            ) : props.replyMessage.photoUrl ? (
                                <ChatMessageReply
                                    lhs={props.lhs}
                                    rhs={!props.lhs}
                                    photoUrl={props.replyMessage.photoUrl}
                                    orientation={props.replyMessage.photoOrientation}
                                    isVideo={props.replyMessage.isVideo}
                                    onClick={props.replyMessage.onClickPhoto}
                                />
                            ) : null}
                        </>
                    )}
                    <ChatMessageBubble
                        position={props.position}
                        type={props.message.text ? 'text' : 'photo'}
                        lhs={props.lhs}
                        rhs={!props.lhs}
                        hasAvatar={props.lhs && (props.position === 'end' || props.position === 'solo')}
                        avatarUsername={props.message.creatorUsername}
                        avatarUrl={props.message.creatorPhotoUrl}
                        text={props.message.text || undefined}
                        photoUrl={props.message.photoUrl || undefined}
                        photoOrientation={props.message.photoOrientation || undefined}
                        onClickPhoto={props.message.onClickPhoto || undefined}
                        reactions={props.reactions}
                        reactionsCount={props.reactionsCount}
                    />
                    {(props.position === 'end' || props.position === 'solo') && (
                        <Box
                            component='div'
                            height='7px'
                            width='100%'
                            bgcolor='#000000'
                            display='block'
                        />
                    )}
                </Box>
            </Box>
        </Box>
    )
}