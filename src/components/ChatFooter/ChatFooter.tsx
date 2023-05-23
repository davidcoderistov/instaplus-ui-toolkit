import { useState, useCallback } from 'react'
import Box from '@mui/material/Box'
import ChatFooterEmojiPicker from './ChatFooterEmojiPicker'
import ChatFooterTextInput from './ChatFooterTextInput'
import ChatFooterActions from './ChatFooterActions'


interface Props {
    isReplying: boolean

    onSendMessage(message: string): void

    onSendLike(): void

    onUploadFile(file: File): void
}

export default function ChatFooter({ isReplying, onSendMessage, onSendLike, onUploadFile }: Props) {

    const [message, setMessage] = useState('')

    const handlePickEmoji = useCallback((emoji: string) => {
        setMessage(message => `${message}${emoji}`)
    }, [])

    const handleSendMessage = useCallback(() => {
        onSendMessage(message)
    }, [message, onSendMessage])

    return (
        <Box
            component='div'
            paddingLeft='11px'
            display='flex'
            alignItems='center'
            paddingRight='16px'
            minHeight='44px'
        >
            <ChatFooterEmojiPicker
                onPickEmoji={handlePickEmoji} />
            <ChatFooterTextInput
                message={message}
                onChange={setMessage} />
            <ChatFooterActions
                isTyping={message.length > 0}
                isReplying={isReplying}
                onSendMessage={handleSendMessage}
                onSendLike={onSendLike}
                onUploadFile={onUploadFile} />
        </Box>
    )
}