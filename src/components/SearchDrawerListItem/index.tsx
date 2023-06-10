import React, { useMemo } from 'react'
import ListItem from '../ListItem'
import ListItemAvatar from '../ListItemAvatar'
import ListItemContent from '../ListItemContent'
import ListItemTitle from '../ListItemTitle'
import ListItemSubtitle from '../ListItemSubtitle'
import ListItemActions from '../ListItemActions'
import Skeleton from '@mui/material/Skeleton'
import IconButton from '@mui/material/IconButton'
import { Close } from '@mui/icons-material'


interface StaticProps {
    loading?: never
    hashtag?: boolean
    id: string | number
    user?: {
        id: string | number
        username: string
        firstName: string
        lastName: string
        photoUrl: string
        followedByUsernames: string[]
        followedByCount: number
    }

    onClickItem(id: string | number): void

    onRemoveItem?(id: string | number): void
}

interface LoadingProps {
    loading: true
    hashtag?: never
    id?: never
    user?: never

    onClickItem?: never

    onRemoveItem?: never
}

type Props = StaticProps | LoadingProps

export default function SearchDrawerListItem(props: Props) {

    const handleClickItem = () => {
        if (!props.loading) {
            props.onClickItem(props.id)
        }
    }

    const handleRemoveItem = (event: React.MouseEvent) => {
        if (!props.loading && props.onRemoveItem) {
            event.stopPropagation()
            props.onRemoveItem(props.id)
        }
    }

    const subtitle = useMemo(() => {
        if (!props.loading && props.user) {
            let followedBy = null
            if (props.user.followedByCount > 0 && props.user.followedByUsernames.length > 0) {
                const username = props.user.followedByUsernames[0]
                if (props.user.followedByCount > 1) {
                    followedBy = `Followed by ${username} + ${props.user.followedByCount - 1} more`
                } else {
                    followedBy = `Followed by ${username}`
                }
            }
            const user = `${props.user.firstName} ${props.user.lastName}`
            return followedBy ? `${user} • ${followedBy}` : user
        }
        return null
    }, [props.loading, props.user])

    return (
        <ListItem
            gutters
            clickable={!props.loading}
            onClick={handleClickItem}
        >
            <ListItemAvatar
                loading={props.loading}
                hashtag={props.hashtag}
                loader={
                    <Skeleton
                        variant='circular'
                        width={44}
                        height={44}
                        sx={{ backgroundColor: '#202020' }} />
                }
                user={props.loading ? null : props.user}
            />
            <ListItemContent gutters={props.loading}>
                <ListItemTitle
                    loading={props.loading}
                    loader={
                        <Skeleton
                            variant='rounded'
                            width={240}
                            height={17}
                            sx={{
                                backgroundColor: '#202020',
                                borderRadius: '8px',
                            }} />
                    }
                    title={props.user ? props.user.username : null}
                />
                {!props.hashtag && (
                    <ListItemSubtitle
                        loading={props.loading}
                        loader={
                            <Skeleton
                                variant='rounded'
                                width={180}
                                height={16}
                                sx={{
                                    backgroundColor: '#202020',
                                    borderRadius: '8px',
                                }} />
                        }
                        subtitle={subtitle}
                    />
                )}
            </ListItemContent>
            {!props.loading && !!props.onRemoveItem && (
                <ListItemActions>
                    <IconButton
                        sx={{ padding: 0 }}
                        onClick={handleRemoveItem}
                    >
                        <Close sx={{ color: '#A8A8A8', fontSize: '20px' }} />
                    </IconButton>
                </ListItemActions>
            )}
        </ListItem>
    )
}