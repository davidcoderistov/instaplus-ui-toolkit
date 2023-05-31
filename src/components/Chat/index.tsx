import React, { useMemo, useCallback } from 'react'
import Box from '@mui/material/Box'
import ChatHeader from '../ChatHeader'
import ChatFooter from '../ChatFooter'
import ChatDescription from '../ChatDescription'
import ChatMessage from '../ChatMessage'
import ChatMessageTimestamp from '../ChatMessageTimestamp'
import { Message } from '../../types/Message'
import moment from 'moment'


interface Props {
    type: 'single' | 'group'
    messages: Message[]
    messagesCount: number
    authUserId: number | string
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
                    />
                )
            })
    }, [props.messages, props.messagesCount, props.type, props.authUserId, timestampMessages])

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
                                    photoUrls={[
                                        'https://res.cloudinary.com/dd3isrbpv/image/upload/v1680258928/storage/avatars/1679067426167-IsabellaPhillips_bxquac.png',
                                        'https://res.cloudinary.com/dd3isrbpv/image/upload/v1680258510/storage/avatars/1679066038798-DavidJohnson_yoygkf.png',
                                    ]}
                                    usernames={[
                                        'Анита🤍✨',
                                        'David Robertson',
                                        'A N N A S T A S I A🍒',
                                        'John Doe',
                                        'Mike Tyson',
                                        'Else',
                                    ]}
                                    onClickChatMembers={() => {
                                        console.log('onClickChatMembers()')
                                    }}
                                    onClickChatDetails={() => {
                                        console.log('onClickChatDetails()')
                                    }}
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
                                                                        component='div'
                                                                        flexShrink='1'
                                                                        width='100%'
                                                                        flexDirection='column'
                                                                        display='flex'
                                                                        position='relative'
                                                                        flexGrow='1'
                                                                        sx={{
                                                                            overflowX: 'hidden',
                                                                            overflowAnchor: 'none',
                                                                            overflowY: 'scroll',
                                                                        }}
                                                                    >
                                                                        <ChatDescription
                                                                            photoUrls={['https://scontent.cdninstagram.com/v/t51.2885-19/287437333_827705364875116_8262683665376304640_n.jpg?stp=dst-jpg_s100x100&_nc_cat=101&ccb=1-7&_nc_sid=8ae9d6&_nc_ohc=YuGAygNe81oAX9tUcof&_nc_ad=z-m&_nc_cid=0&_nc_ht=scontent.cdninstagram.com&oh=00_AfDGbQTKBmHKy8gnrg0ZoGc6Tgn1ozzEiyFxn26t1yPNow&oe=647A51D1']}
                                                                            usernames={['A N N A S T A S I A']}
                                                                            creator='annastasia.m'
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
                                                                        {messages}
                                                                    </Box>
                                                                </Box>
                                                            </Box>
                                                        </Box>
                                                    </Box>
                                                </Box>
                                            </Box>
                                            <ChatFooter
                                                isReplying
                                                replyUsername='Anita'
                                                replyText='asd'
                                                onSendMessage={console.log}
                                                onSendLike={() => {
                                                    console.log('onSendLike()')
                                                }}
                                                onUploadFile={console.log}
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