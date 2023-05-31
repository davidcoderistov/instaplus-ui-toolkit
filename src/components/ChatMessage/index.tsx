import React, { useState, useMemo, useCallback, useRef, forwardRef } from 'react'
import Box from '@mui/material/Box'
import ChatMessageTitle from '../ChatMessageTitle'
import ChatMessageReply from '../ChatMessageReply'
import ChatMessageBubble from '../ChatMessageBubble'
import { Message, ReplyMessage } from '../../types/Message'
import EmojiPicker, { EmojiClickData } from 'emoji-picker-react'
import { useClickOutside } from '../../hooks'


interface Props {
    type: 'single' | 'group'
    position: 'start' | 'between' | 'end' | 'solo'
    lhs: boolean
    authUserId: string | number
    message: Message
    onClickPhoto: (message: Message) => void | null
    onClickReplyPhoto: (message: ReplyMessage) => void | null

    onReact(emoji: string): void

    onReply(message: Message): void
}

const ForwardedChatMessageBubble = forwardRef((props, ref) => (
    <ChatMessageBubble {...props} emojiRef={ref} />
))

export default function ChatMessage(props: Props) {

    const showMessageTitle = useMemo(() =>
            !((props.lhs && props.type === 'group' && (props.position === 'start' || props.position === 'solo')) || props.message.reply),
        [props.lhs, props.type, props.position, props.message.reply])

    const handleClickReplyPhoto = useCallback(() => {
        if (props.onClickReplyPhoto && props.message.reply) {
            props.onClickReplyPhoto(props.message.reply)
        }
    }, [props.onClickReplyPhoto, props.message.reply])

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
        setEmojiPickerOpen(false)
    }, [props.onReact])

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
                    {(props.position === 'start' || props.position === 'solo' || Boolean(props.message.reply)) && (
                        <Box
                            component='div'
                            height='10px'
                            width='100%'
                            bgcolor='#000000'
                            display='block'
                        />
                    )}
                    <ChatMessageTitle
                        type={props.type}
                        empty={showMessageTitle}
                        lhs={props.lhs}
                        rhs={!props.lhs}
                        authUserId={props.authUserId}
                        creator={props.message.creator}
                        replyCreator={props.message.reply?.creator}
                        reply={!!props.message.reply}
                    />
                    {props.message.reply && (
                        <>
                            {props.message.reply.text ? (
                                <ChatMessageReply
                                    lhs={props.lhs}
                                    rhs={!props.lhs}
                                    message={props.message.reply.text} />
                            ) : props.message.reply.photoUrl && props.message.reply.photoOrientation ? (
                                <ChatMessageReply
                                    lhs={props.lhs}
                                    rhs={!props.lhs}
                                    photoUrl={props.message.reply.photoUrl}
                                    orientation={props.message.reply.photoOrientation}
                                    isVideo={Boolean(props.message.reply.videoUrl)}
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
            {emojiPickerOpen && (
                <Box
                    component='div'
                    position='absolute'
                    zIndex='100'
                    display='flex'
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
            )}
        </Box>
    )
}