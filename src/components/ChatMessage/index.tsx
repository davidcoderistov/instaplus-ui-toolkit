import React, { useState, useMemo, useCallback, useRef, forwardRef } from 'react'
import Box from '@mui/material/Box'
import ChatMessageTitle from '../ChatMessageTitle'
import ChatMessageReply from '../ChatMessageReply'
import ChatMessageBubble from '../ChatMessageBubble'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { useClickOutside } from '../../hooks'


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

    onReact(emoji: string): void

    onReply(message: Message): void
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

    const [emojiPickerOpen, setEmojiPickerOpen] = useState(false)

    const emojiRef = useRef<Node | null>(null)
    const emojiBtnRef = useRef<Node | null>(null)

    useClickOutside(emojiRef, (target) => {
        if (!emojiPickerOpen || (emojiPickerOpen && !emojiBtnRef.current?.contains(target))) {
            setEmojiPickerOpen(false)
        }
    })

    const handleOpenEmojiPicker = (event: React.MouseEvent) => {
        setEmojiPickerOpen(emojiPickerOpen => !emojiPickerOpen)
        event.stopPropagation()
    }

    const handlePickEmoji = useCallback(({ emoji }: EmojiClickData) => {
        props.onReact(emoji)
    }, [props.onReact])

    const ForwardedChatMessageBubble = forwardRef((props, ref) => (
        <ChatMessageBubble {...props} emojiRef={ref} />
    ))

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
                    <ForwardedChatMessageBubble
                        ref={emojiBtnRef}
                        position={props.position}
                        lhs={props.lhs}
                        message={props.message}
                        reactions={props.reactions}
                        onClickPhoto={props.onClickPhoto}
                        onReact={handleOpenEmojiPicker}
                        onReply={props.onReply}
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
            <Box
                component='div'
                position='absolute'
                zIndex='100'
                display={emojiPickerOpen ? 'flex' : 'none'}
                justifyContent={props.lhs ? 'flex-start' : 'flex-end'}
                width='100%'
                marginTop='2px'
            >
                <Box
                    component='div'
                    ref={emojiRef}
                    sx={{
                        ...props.lhs && { marginLeft: '50px' },
                        ...!props.lhs && { marginRight: '16px' },
                    }}
                >
                    <EmojiPicker
                        theme='dark'
                        emojiStyle='google'
                        skinTonesDisabled
                        searchDisabled
                        previewConfig={{ showPreview: false }}
                        height='340px'
                        width='340px'
                        onEmojiClick={handlePickEmoji}
                    />
                </Box>
            </Box>
        </Box>
    )
}