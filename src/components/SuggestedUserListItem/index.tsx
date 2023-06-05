import React, { useState, useMemo, useCallback } from 'react'
import ListItem from '../ListItem'
import ListItemAvatar from '../ListItemAvatar'
import ListItemContent from '../ListItemContent'
import ListItemTitle from '../ListItemTitle'
import ListItemSubtitle from '../ListItemSubtitle'
import ListItemActions from '../ListItemActions'
import Button from '../Button'
import Skeleton from '@mui/material/Skeleton'
import UnfollowUserModal from '../UnfollowUserModal'


interface StaticProps {
    loading?: never
    authUserId: string | number
    user: {
        id: string | number
        username: string
        firstName: string
        lastName: string
        photoUrl: string
        following: boolean
        followingLoading: boolean
        followedByUsernames: string[]
        followedByCount: number
    }

    onFollowUser(id: string | number): void

    onUnfollowUser(id: string | number): void

    onClickUser(id: string | number): void
}

interface LoadingProps {
    loading: true
    authUserId?: never
    user?: never

    onFollowUser?: never

    onUnfollowUser?: never

    onClickUser?: never
}

type Props = StaticProps | LoadingProps

const SuggestedUserListItem = React.memo((props: Props) => {

    const [unfollowUserModalOpen, setUnfollowUserModalOpen] = useState(false)

    const handleOpenUnfollowUserModal = () => {
        setUnfollowUserModalOpen(true)
    }

    const handleCloseUnfollowUserModal = () => {
        setUnfollowUserModalOpen(false)
    }

    const handleFollowUser = useCallback(() => {
        if (!props.loading) {
            props.onFollowUser(props.user.id)
        }
    }, [props.loading, props.onFollowUser])

    const handleUnfollowUser = useCallback(() => {
        if (!props.loading) {
            setUnfollowUserModalOpen(false)
            props.onUnfollowUser(props.user.id)
        }
    }, [props.loading, props.onUnfollowUser])

    const handleClickUser = useCallback(() => {
        if (!props.loading) {
            props.onClickUser(props.user.id)
        }
    }, [props.loading, props.onClickUser])

    const followedBy = useMemo(() => {
        if (!props.loading) {
            if (props.user.followedByCount > 0 && props.user.followedByUsernames.length > 0) {
                const usernames = props.user.followedByUsernames.join(props.user.followedByCount === 2 ? ' and ' : ', ')
                if (props.user.followedByCount > 2) {
                    return `Followed by ${usernames} + ${props.user.followedByCount - 2} more`
                }
                return `Followed by ${usernames}`
            }
        }
        return 'Suggested for you'
    }, [props.loading, props.user])

    return (
        <>
            <ListItem>
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
                    onClick={handleClickUser}
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
                        onClick={handleClickUser}
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
                        subtitle={props.user ? `${props.user.firstName} ${props.user.lastName}` : null}
                    />
                    {!props.loading && (
                        <ListItemSubtitle
                            loading={false}
                            loader={null}
                            subtitle={followedBy}
                            dense
                        />
                    )}
                </ListItemContent>
                {!props.loading && props.authUserId !== props.user.id && (
                    <ListItemActions>
                        {props.user.following ? (
                            <Button
                                variant='secondary'
                                text='Following'
                                contained
                                loading={props.user.followingLoading}
                                onClick={handleOpenUnfollowUserModal}
                            />
                        ) : (
                            <Button
                                variant='primary'
                                text='Follow'
                                contained
                                loading={props.user.followingLoading}
                                onClick={handleFollowUser}
                            />
                        )}
                    </ListItemActions>
                )}
            </ListItem>
            <UnfollowUserModal
                open={unfollowUserModalOpen}
                user={{
                    id: props.user?.id ?? '',
                    username: props.user?.username ?? '',
                    photoUrl: props.user?.photoUrl ?? '',
                }}
                onUnfollowUser={handleUnfollowUser}
                onCloseModal={handleCloseUnfollowUserModal}
            />
        </>
    )
})

export default SuggestedUserListItem