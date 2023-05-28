import { useMemo, useCallback } from 'react'
import Box from '@mui/material/Box'
import ChatMessageTitle from '../ChatMessageTitle'
import ChatMessageReply from '../ChatMessageReply'
import ChatMessageBubble from '../ChatMessageBubble'


interface Message {
    id: string | number
    creatorUsername: string
    creatorPhotoUrl: string
    text: string | null
    photoUrl: string | null
    photoOrientation: 'portrait' | 'landscape' | null
    isVideo: boolean
}

interface Props {
    type: 'single' | 'group'
    position: 'start' | 'between' | 'end' | 'solo'
    lhs: boolean
    message: Message
    replyMessage: Message | null
    reactions?: {
        items: string[]
        count: number
    }
    onClickPhoto: (message: Message) => void | null
    onClickReplyPhoto: (message: Message) => void | null
}

export default function ChatMessage(props: Props) {

    const showMessageTitle = useMemo(() =>
            !((props.type === 'group' && (props.position === 'start' || props.position === 'solo')) || props.replyMessage),
        [props.type, props.position, props.replyMessage])

    const handleClickReplyPhoto = useCallback(() => {
        if (props.onClickReplyPhoto && props.replyMessage) {
            props.onClickReplyPhoto(props.replyMessage)
        }
    }, [props.onClickReplyPhoto, props.replyMessage])

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
                            ) : props.replyMessage.photoUrl && props.replyMessage.photoOrientation ? (
                                <ChatMessageReply
                                    lhs={props.lhs}
                                    rhs={!props.lhs}
                                    photoUrl={props.replyMessage.photoUrl}
                                    orientation={props.replyMessage.photoOrientation}
                                    isVideo={props.replyMessage.isVideo}
                                    onClick={handleClickReplyPhoto}
                                />
                            ) : null}
                        </>
                    )}
                    <ChatMessageBubble
                        position={props.position}
                        lhs={props.lhs}
                        message={props.message}
                        reactions={props.reactions}
                        onClickPhoto={props.onClickPhoto}
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