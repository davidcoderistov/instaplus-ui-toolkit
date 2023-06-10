import React, { useMemo, useCallback } from 'react'
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
    user: {
        id: string | number
        username: string
        firstName: string
        lastName: string
        photoUrl: string
        followedByUsernames: string[]
        followedByCount: number
    }

    onClickUser(id: string | number): void

    onRemoveUser?(id: string | number): void
}

interface LoadingProps {
    loading: true
    user?: never

    onClickUser?: never

    onRemoveUser?: never
}

type Props = StaticProps | LoadingProps

export default function SearchDrawerUserItem(props: Props) {

    const handleClickUser = useCallback(() => {
        if (!props.loading) {
            props.onClickUser(props.user.id)
        }
    }, [props.loading, props.onClickUser])

    const handleRemoveUser = useCallback((event: React.MouseEvent) => {
        if (!props.loading && props.onRemoveUser) {
            event.stopPropagation()
            props.onRemoveUser(props.user.id)
        }
    }, [props.loading, props.onRemoveUser])

    const subtitle = useMemo(() => {
        if (!props.loading) {
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
            onClick={handleClickUser}
        >
            <ListItemAvatar
                loading={props.loading}
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
            </ListItemContent>
            {!props.loading && !!props.onRemoveUser && (
                <ListItemActions>
                    <IconButton
                        sx={{ padding: 0 }}
                        onClick={handleRemoveUser}
                    >
                        <Close sx={{ color: '#A8A8A8', fontSize: '20px' }} />
                    </IconButton>
                </ListItemActions>
            )}
        </ListItem>
    )
}