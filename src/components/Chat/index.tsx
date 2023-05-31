import React, { useState, useMemo, useCallback } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import ChatHeader from '../ChatHeader'
import ChatFooter from '../ChatFooter'
import ChatDescription from '../ChatDescription'
import ChatMessage from '../ChatMessage'
import ChatMessageTimestamp from '../ChatMessageTimestamp'
import InfiniteScroll from 'react-infinite-scroll-component'
import { Message, ReplyMessage } from '../../types/Message'
import moment from 'moment'


interface Props {
    type: 'single' | 'group'
    authUserId: number | string

    messages: Message[]
    messagesCount: number
    hasMoreMessages: boolean

    onFetchMoreMessages(): void

    creator: {
        id: string
        username: string
    }

    memberPhotoUrls: string[]
    memberUsernames: string[]
    membersCount: number

    onClickChatMembers(): void

    onClickChatDetails(): void

    onViewChatDescription(): void

    onClickPhoto(message: Message): void

    onClickReplyPhoto(message: ReplyMessage): void

    onReact(emoji: string): void

    onSendMessage(message: string, replyingMessage: Message | null): void

    onSendLike(): void

    onUploadFile(file: File): void
}

export default function Chat(props: Props) {

    const timestampMessages = useCallback((messages: Message[], messagesCount: number)
        : Array<{ message: Message, timestamp: boolean }> => {
        const messagesCopy = messages.map(message => ({
            message,
            timestamp: false,
        }))
        if (messagesCount > 0) {
            let separatorsCount = 0
            for (let i = 0; i < messages.length - 1; ++i) {
                const first = moment(messages[i].createdAt)
                const second = moment(messages[i + 1].createdAt)
                if (second.diff(first, 'minutes') > 10) {
                    messagesCopy.splice(separatorsCount + i + 1, 0, {
                        message: messages[i + 1],
                        timestamp: true,
                    })
                    ++separatorsCount
                }
            }
            if (messages.length === messagesCount) {
                messagesCopy.splice(0, 0, {
                    message: messages[0],
                    timestamp: true,
                })
            }
        }
        return messagesCopy
    }, [])

    const [replyingMessage, setReplyingMessage] = useState<Message | null>(null)

    const handleReplyMessage = useCallback((replyingMessage: Message) => {
        setReplyingMessage(replyingMessage)
    }, [])

    const handleCancelReplyMessage = useCallback(() => {
        setReplyingMessage(null)
    }, [])

    const handleSendMessage = useCallback((message: string) => {
        props.onSendMessage(message, replyingMessage)
        setReplyingMessage(null)
    }, [props.onSendMessage, replyingMessage])

    const messages = useMemo(() => {
        return timestampMessages(Array.from(props.messages).reverse(), props.messagesCount).map(
            ({ message, timestamp }, index, messages) => {
                if (timestamp) {
                    return (
                        <ChatMessageTimestamp
                            key={`message-timestamp-${index}`}
                            timestamp={message.createdAt} />
                    )
                }
                let position
                const isPrevMessageFromSameUser = index - 1 > -1 && index - 1 < messages.length &&
                    !messages[index - 1].timestamp && messages[index - 1].message.creator.id === message.creator.id
                const isNextMessageFromSameUser = index + 1 < messages.length &&
                    !messages[index + 1].timestamp && messages[index + 1].message.creator.id === message.creator.id
                if (isPrevMessageFromSameUser) {
                    if (isNextMessageFromSameUser) {
                        position = 'between'
                    } else {
                        position = 'end'
                    }
                } else {
                    if (isNextMessageFromSameUser) {
                        position = 'start'
                    } else {
                        position = 'solo'
                    }
                }
                return (
                    <ChatMessage
                        key={message.id}
                        type={props.type}
                        position={position}
                        lhs={message.creator.id !== props.authUserId}
                        authUserId={props.authUserId}
                        message={message}
                        onClickPhoto={props.onClickPhoto}
                        onClickReplyPhoto={props.onClickReplyPhoto}
                        onReact={props.onReact}
                        onReply={handleReplyMessage}
                    />
                )
            })
    }, [props.messages, props.messagesCount, props.type, props.authUserId, timestampMessages, handleReplyMessage, props.onClickPhoto, props.onClickReplyPhoto, props.onReact])

    return (
        <Box
            component='div'
            flexShrink='1'
            minWidth='337px'
            flexDirection='column'
            boxSizing='border-box'
            display='flex'
            flexBasis='0'
            position='relative'
            zIndex='0'
            flexGrow='1'
            maxWidth='100%'
        >
            <Box
                component='div'
                bgcolor='#000000'
                minWidth='0'
                flexDirection='column'
                display='flex'
                minHeight='inherit'
                position='relative'
                zIndex='0'
                flexGrow='1'
            >
                <Box
                    component='div'
                    flexShrink='1'
                    flexDirection='column'
                    bgcolor='#000000'
                    boxSizing='border-box'
                    display='flex'
                    fontSize='.9375rem'
                    minHeight='0'
                    position='relative'
                    flexBasis='100%'
                    zIndex='0'
                    flexGrow='1'
                    maxWidth='100%'
                    sx={{
                        overflowX: 'hidden',
                        overflowY: 'hidden',
                    }}
                >
                    <Box
                        component='div'
                        flexDirection='column'
                        boxSizing='border-box'
                        display='flex'
                        minHeight='0'
                        position='relative'
                        zIndex='0'
                        flexGrow='1'
                    >
                        <Box
                            component='div'
                            flexShrink='1'
                            flexWrap='nowrap'
                            paddingTop='0'
                            minWidth='0'
                            boxSizing='border-box'
                            display='flex'
                            flexBasis='0'
                            justifyContent='space-between'
                            alignItems='stretch'
                            flexDirection='row'
                            position='relative'
                            zIndex='0'
                            flexGrow='1'
                        >
                            <Box
                                component='div'
                                flexShrink='1'
                                minWidth='0'
                                flexDirection='column'
                                boxSizing='border-box'
                                display='flex'
                                flexBasis='0'
                                position='relative'
                                zIndex='0'
                                flexGrow='1'
                                maxWidth='100%'
                                sx={{
                                    overflowX: 'hidden',
                                    overflowY: 'hidden',
                                }}
                            >
                                <ChatHeader
                                    photoUrls={props.memberPhotoUrls}
                                    usernames={props.memberUsernames}
                                    membersCount={props.membersCount}
                                    onClickChatMembers={props.onClickChatMembers}
                                    onClickChatDetails={props.onClickChatDetails}
                                />
                                <Box
                                    component='div'
                                    maxHeight='inherit'
                                    justifyContent='inherit'
                                    flexGrow='inherit'
                                    minWidth='inherit'
                                    height='inherit'
                                    minHeight='inherit'
                                    width='inherit'
                                    position='relative'
                                    maxWidth='inherit'
                                    display='inherit'
                                    alignItems='inherit'
                                    flexDirection='inherit'
                                    flexShrink='inherit'
                                >
                                    <Box
                                        component='div'
                                        display='flex'
                                        height='100%'
                                        flexGrow='1'
                                    >
                                        <Box
                                            component='div'
                                            flexDirection='column'
                                            display='flex'
                                            minHeight='0'
                                            position='relative'
                                            zIndex='0'
                                            flexGrow='1'
                                            maxWidth='100%'
                                        >
                                            <Box
                                                component='div'
                                                maxHeight='100%'
                                                flexDirection='column'
                                                display='flex'
                                                flexBasis='0'
                                                position='relative'
                                                flexGrow='1'
                                                sx={{
                                                    overflowX: 'hidden',
                                                    overflowY: 'hidden',
                                                }}
                                            >
                                                <Box
                                                    component='div'
                                                    flexDirection='column'
                                                    display='flex'
                                                    height='100%'
                                                    flexGrow='1'
                                                >
                                                    <Box
                                                        component='div'
                                                        flexDirection='column'
                                                        display='flex'
                                                        borderRight='2px solid #000000'
                                                        flexGrow='1'
                                                        borderLeft='2px solid #000000'
                                                        sx={{
                                                            overflowX: 'hidden',
                                                            overflowY: 'hidden',
                                                        }}
                                                    >
                                                        <Box
                                                            component='div'
                                                            flexShrink='1'
                                                            minWidth='0'
                                                            flexDirection='column'
                                                            flexBasis='auto'
                                                            boxSizing='border-box'
                                                            display='flex'
                                                            minHeight='0'
                                                            alignItems='stretch'
                                                            position='relative'
                                                            zIndex='0'
                                                            flexGrow='1'
                                                            sx={{
                                                                isolation: 'isolate',
                                                                overflowX: 'hidden',
                                                                overflowY: 'hidden',
                                                            }}
                                                        >
                                                            <Box
                                                                component='div'
                                                                flexShrink='1'
                                                                flexDirection='column'
                                                                display='flex'
                                                                zIndex='0'
                                                                flexGrow='1'
                                                                sx={{
                                                                    isolation: 'isolate',
                                                                    overflowX: 'hidden',
                                                                    overflowY: 'hidden',
                                                                }}
                                                            >
                                                                <Box
                                                                    component='div'
                                                                    flexDirection='column'
                                                                    display='flex'
                                                                    position='relative'
                                                                    flexGrow='1'
                                                                    sx={{
                                                                        overflowX: 'hidden',
                                                                        overflowAnchor: 'none',
                                                                        overflowY: 'hidden',
                                                                    }}
                                                                >
                                                                    <Box
                                                                        id='scrollableChat'
                                                                        component='div'
                                                                        flexShrink='1'
                                                                        width='100%'
                                                                        flexDirection='column-reverse'
                                                                        display='flex'
                                                                        position='relative'
                                                                        flexGrow='1'
                                                                        sx={{
                                                                            overflowX: 'hidden',
                                                                            overflowAnchor: 'none',
                                                                            overflowY: 'scroll',
                                                                        }}
                                                                    >
                                                                        <InfiniteScroll
                                                                            next={props.onFetchMoreMessages}
                                                                            hasMore={props.hasMoreMessages}
                                                                            loader={
                                                                                <Box
                                                                                    component='div'
                                                                                    display='flex'
                                                                                    flexDirection='row'
                                                                                    justifyContent='center'
                                                                                    alignItems='flex-start'
                                                                                    height='50px'
                                                                                >
                                                                                    <CircularProgress size={25} thickness={5} sx={{
                                                                                        color: 'grey',
                                                                                        mt: 1,
                                                                                    }} />
                                                                                </Box>
                                                                            }
                                                                            dataLength={props.messages.length}
                                                                            scrollableTarget='scrollableChat'
                                                                            inverse={true}
                                                                            style={{
                                                                                display: 'flex',
                                                                                flexDirection: 'column-reverse',
                                                                            }}
                                                                        >
                                                                            <Box
                                                                                component='div'
                                                                                display='block'
                                                                            >
                                                                                {!props.hasMoreMessages && (
                                                                                    <>
                                                                                        <ChatDescription
                                                                                            photoUrls={props.memberPhotoUrls}
                                                                                            usernames={props.memberUsernames}
                                                                                            membersCount={props.membersCount}
                                                                                            creator={props.creator.username}
                                                                                            onView={props.onViewChatDescription}
                                                                                        />
                                                                                        <Box
                                                                                            component='div'
                                                                                            minWidth='0'
                                                                                            position='relative'
                                                                                            zIndex='0'
                                                                                            flexGrow='1'
                                                                                            flexBasis='auto'
                                                                                            flexShrink='0'
                                                                                            display='flex'
                                                                                            flexDirection='column'
                                                                                            minHeight='0'
                                                                                            alignItems='stretch'
                                                                                            height='calc(100vh - 572px)'
                                                                                        />
                                                                                    </>
                                                                                )}
                                                                                {messages}
                                                                            </Box>
                                                                        </InfiniteScroll>
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <ChatFooter
                                                authUserId={props.authUserId}
                                                replyingMessage={replyingMessage}
                                                onSendMessage={handleSendMessage}
                                                onSendLike={props.onSendLike}
                                                onUploadFile={props.onUploadFile}
                                                onCancelReply={handleCancelReplyMessage}
                                            />
                                        </Box>
                                    </Box>
                                </Box>
                            </Box>
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}