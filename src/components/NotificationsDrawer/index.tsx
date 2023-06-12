import SidebarDrawer from '../SidebarDrawer'
import Box from '@mui/material/Box'
import { Typography } from '@mui/material'
import NotificationsDrawerListItem from '../NotificationsDrawerListItem'


const NotificationsDrawerTitle = (props: { title: string }) => {

    return (
        <Box
            component='div'
            paddingRight='24px'
            paddingTop='0'
            paddingLeft='24px'
            display='flex'
            marginTop='22px'
            marginBottom='18px'
            paddingBottom='0'
        >
            <Box
                component='span'
                lineHeight='20px'
                fontSize='16px'
                minWidth='0'
                color='#F5F5F5'
                margin='0!important'
                fontWeight='700'
                position='relative'
                display='block'
                maxWidth='100%'
                sx={{
                    overflowY: 'visible',
                    wordWrap: 'break-word',
                    overflowX: 'visible',
                    whiteSpace: 'pre-line',
                    wordBreak: 'break-word',
                }}
            >
                {props.title}
            </Box>
        </Box>
    )
}

const NotificationsDrawerDivider = () => {

    return (
        <Box
            component='div'
            marginBottom='12px'
            marginLeft='0'
            marginTop='12px'
            marginRight='0'
            display='block'
        >
            <Box
                component='div'
                height='1px'
                width='100%'
                margin='0'
                bgcolor='#262626'
            />
        </Box>
    )
}

interface Notification {
    photoUrls: string[]
    usernames: string[]
    peopleCount: number
    createdAt: number
}

interface PostNotification extends Notification {
    postId: string | number
    postPhotoUrl: string
    isPostReel: boolean
}

interface FollowNotification extends Notification {
    type: 'follow'
    userId: string | number | null
}

interface LikeNotification extends PostNotification {
    type: 'like'
}

interface CommentNotification extends PostNotification {
    type: 'comment'
}

type NotificationI = FollowNotification | LikeNotification | CommentNotification

interface SearchDrawerProps {
    open: boolean
    loading: boolean
    todayNotifications: NotificationI[]
    thisWeekNotifications: NotificationI[]
    thisMonthNotifications: NotificationI[]
    earlierNotifications: NotificationI[]

    onClick(type: 'follow' | 'like' | 'comment', id: string | number | null): void
}

export default function NotificationsDrawer(props: SearchDrawerProps) {

    const todayNotificationsCount = props.todayNotifications.length
    const thisWeekNotificationsCount = props.thisWeekNotifications.length
    const thisMonthNotificationsCount = props.thisMonthNotifications.length
    const earlierNotificationsCount = props.earlierNotifications.length

    return (
        <SidebarDrawer
            variant='permanent'
            anchor='left'
            open={props.open}
            PaperProps={{ sx: { backgroundColor: 'black', borderRight: '1px solid #232323' } }}
        >
            <Box
                component='div'
                paddingTop='24px'
                paddingBottom='24px'
                paddingRight='24px'
                paddingLeft='24px'
                marginTop='8px'
                marginLeft='0'
                marginRight='0'
                display='block'
            >
                <Box
                    component='div'
                    display='block'
                >
                    <Box
                        component='div'
                        lineHeight='30px'
                        minWidth='0'
                        margin='0!important'
                        color='#F5F5F5'
                        textAlign='left'
                        fontWeight='600'
                        position='relative'
                        display='block'
                        maxWidth='100%'
                        fontSize='22px'
                        sx={{
                            overflowY: 'visible',
                            overflowX: 'visible',
                            wordWrap: 'break-word',
                            whiteSpace: 'pre-line',
                            wordBreak: 'break-word',
                        }}
                    >
                        Notifications
                    </Box>
                </Box>
            </Box>
            <Box
                component='div'
                display='flex'
                flexDirection='column'
                flexGrow='1'
                flexShrink='1'
                minHeight='0'
                position='relative'
                sx={{ overflowX: 'hidden', overflowY: 'auto' }}
            >
                <Box
                    component='div'
                    border='0'
                    flexGrow='1'
                    fontSize='100%'
                    left='0'
                    margin='0'
                    position='absolute'
                    width='100%'
                    sx={{ overflowX: 'hidden', overflowY: 'auto', verticalAlign: 'baseline' }}
                >
                    {props.loading ? [...Array(10).keys()].map(index => (
                        <NotificationsDrawerListItem
                            key={index}
                            loading />
                    )) : (
                        <>
                            {todayNotificationsCount > 0 && (
                                <>
                                    <NotificationsDrawerTitle title='Today' />
                                    {props.todayNotifications.map((notification, index) => (
                                        <NotificationsDrawerListItem
                                            key={index}
                                            notification={notification}
                                            onClick={props.onClick}
                                        />
                                    ))}
                                    {(thisWeekNotificationsCount > 0 || thisMonthNotificationsCount > 0 || earlierNotificationsCount > 0) && (
                                        <NotificationsDrawerDivider />
                                    )}
                                </>
                            )}
                            {thisWeekNotificationsCount > 0 && (
                                <>
                                    <NotificationsDrawerTitle title='This Week' />
                                    {props.thisWeekNotifications.map((notification, index) => (
                                        <NotificationsDrawerListItem
                                            key={index + todayNotificationsCount}
                                            notification={notification}
                                            onClick={props.onClick}
                                        />
                                    ))}
                                    {(thisMonthNotificationsCount > 0 || earlierNotificationsCount > 0) && (
                                        <NotificationsDrawerDivider />
                                    )}
                                </>
                            )}
                            {thisMonthNotificationsCount > 0 && (
                                <>
                                    <NotificationsDrawerTitle title='This Month' />
                                    {props.thisMonthNotifications.map((notification, index) => (
                                        <NotificationsDrawerListItem
                                            key={index + todayNotificationsCount + thisWeekNotificationsCount}
                                            notification={notification}
                                            onClick={props.onClick}
                                        />
                                    ))}
                                    {earlierNotificationsCount > 0 && (
                                        <NotificationsDrawerDivider />
                                    )}
                                </>
                            )}
                            {earlierNotificationsCount > 0 && (
                                <>
                                    <NotificationsDrawerTitle title='Earlier' />
                                    {props.earlierNotifications.map((notification, index) => (
                                        <NotificationsDrawerListItem
                                            key={index + todayNotificationsCount + thisWeekNotificationsCount + thisMonthNotificationsCount}
                                            notification={notification}
                                            onClick={props.onClick}
                                        />
                                    ))}
                                </>
                            )}
                        </>
                    )}
                </Box>
            </Box>
            {!props.loading && todayNotificationsCount < 1 && thisWeekNotificationsCount < 1 && thisMonthNotificationsCount < 1 && earlierNotificationsCount < 1 && (
                <Box
                    component='div'
                    position='absolute'
                    top='50%'
                    display='flex'
                    flexDirection='column'
                    justifyContent='center'
                    alignItems='center'
                    width='100%'
                >
                    <Typography
                        fontSize={14}
                        color='#A8A8A8'
                    >
                        No recent notifications.
                    </Typography>
                </Box>
            )}
        </SidebarDrawer>
    )
}