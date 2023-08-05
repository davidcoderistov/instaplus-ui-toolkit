import { useState, useRef } from 'react'
import Box from '@mui/material/Box'
import CircularProgress from '@mui/material/CircularProgress'
import PostPreviewSlider from '../PostPreviewSlider'
import CaptionInput from './CaptionInput'
import LocationInput from './LocationInput'
import Hashtag from './Hashtag'
import Button from '../Button'
import UserAvatar from './UserAvatar'


interface IHashtag {
    _id: string | number
    name: string
    postIds: string[]
}

interface Media {
    photoUrl: string | null
    videoUrl: string | null
}

interface Props {
    media: Media[]
    user: {
        username: string
        photoUrl: string | null
    }
    isSharing: boolean
    hashtags: IHashtag[]
    hashtagsLoading: boolean

    onFetchHashtags(searchQuery: string): void

    onSharePost(caption: string, location: string, hashtags: string[]): void
}

export default function CreatePost(props: Props) {

    const [isTypingHashtag, setIsTypingHashtag] = useState(false)

    const caption = useRef('')
    const location = useRef('')

    const handleChangeCaption = (value: string) => {
        const r = /#[^\s#]+$/
        caption.current = value
        const hashtags = value.match(r)
        const isTypingHashtag = Array.isArray(hashtags) && hashtags.length > 0
        setIsTypingHashtag(isTypingHashtag)
        if (isTypingHashtag) {
            props.onFetchHashtags(hashtags[0].slice(1, hashtags.length))
        }
    }

    const handleChangeLocation = (value: string) => {
        location.current = value
    }

    const handleSharePost = () => {
        const r = /#[^\s#]+/g
        const hashtags = caption.current.match(r)
        props.onSharePost(caption.current, location.current, Array.isArray(hashtags) ? hashtags : [])
    }

    return (
        <Box
            component='div'
            width='843px'
            flexShrink='1'
            flexBasis='auto'
            display='flex'
            flexGrow='1'
        >
            <Box
                component='div'
                justifyContent='center'
                display='flex'
                height='100%'
                position='relative'
                alignItems='flex-start'
                width='503px'
            >
                <PostPreviewSlider
                    media={props.media}
                />
            </Box>
            <Box
                component='div'
                boxSizing='border-box'
                display='flex'
                position='relative'
                width='340px'
                borderLeft='1px solid #363636'
            >
                <Box
                    component='div'
                    borderRadius='0'
                    bgcolor='transparent'
                    minWidth='0'
                    flexDirection='column'
                    boxSizing='border-box'
                    display='flex'
                    minHeight='0'
                    alignItems='stretch'
                    alignSelf='auto'
                    justifyContent='flex-start'
                    position='relative'
                    flexGrow='1'
                    sx={{
                        overflowY: 'visible',
                        overflowX: 'visible',
                    }}
                >
                    <Box
                        component='div'
                        alignItems='stretch'
                        border='0'
                        boxSizing='border-box'
                        display='flex'
                        flexDirection='column'
                        fontSize='100%'
                        padding='0'
                        position='relative'
                        sx={{ verticalAlign: 'baseline' }}
                    >
                        <UserAvatar
                            username={props.user.username}
                            photoUrl={props.user.photoUrl} />
                        <CaptionInput onChangeValue={handleChangeCaption} />
                        <Box
                            component='div'
                            maxHeight='136px'
                            sx={{
                                overflowX: 'hidden',
                                overflowY: 'auto',
                            }}
                            marginBottom='5px'
                        >
                            {isTypingHashtag && props.hashtagsLoading && (
                                <Box
                                    component='div'
                                    width='100%'
                                    height='136px'
                                    display='flex'
                                    flexDirection='column'
                                    justifyContent='center'
                                    alignItems='center'
                                    bgcolor='#000000'
                                >
                                    <CircularProgress
                                        size={30}
                                        thickness={3}
                                        sx={{
                                            color: 'grey',
                                        }} />
                                </Box>
                            )}
                            {isTypingHashtag && !props.hashtagsLoading && props.hashtags.length > 0 &&
                                props.hashtags.map(hashtag => (
                                    <Hashtag
                                        key={hashtag._id}
                                        hashtag={hashtag}
                                        onClick={console.log} />
                                ))}
                        </Box>
                        <LocationInput onChangeLocation={handleChangeLocation} />
                        <Box
                            component='div'
                            borderRadius='0'
                            bgcolor='transparent'
                            flexDirection='column'
                            boxSizing='border-box'
                            display='flex'
                            flexShrink='0'
                            alignItems='stretch'
                            alignSelf='auto'
                            justifyContent='flex-start'
                            position='relative'
                            flexGrow='0'
                            marginTop='25px'
                            paddingX='16px'
                            sx={{
                                overflowY: 'visible',
                                overflowX: 'visible',
                            }}
                        >
                            <Button
                                variant='primary'
                                text='Share'
                                contained
                                loading={props.isSharing}
                                onClick={handleSharePost}
                            />
                        </Box>
                    </Box>
                </Box>
            </Box>
        </Box>
    )
}