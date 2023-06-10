import Box from '@mui/material/Box'


interface Props {
    isActive?: boolean
}

export default function AppDrawerAvatar(props: Props) {

    return (
        <Box
            component='span'
            height={props.isActive ? '28px' : '24px'}
            width={props.isActive ? '28px' : '24px'}
            position={props.isActive ? 'absolute' : 'relative'}
            display='block'
            sx={{
                borderBottomLeftRadius: '50%',
                borderTopRightRadius: '50%',
                overflowX: 'hidden',
                borderBottomRightRadius: '50%',
                borderTopLeftRadius: '50%',
                overflowY: 'hidden',
                ...props.isActive && {
                    border: '2px solid #DBDBDB',
                    transform: 'translate(-50%,-50%)',
                    left: '50%',
                    top: '50%',
                },
            }}
        >
            <img
                alt={`Isabella profile picture`}
                style={{
                    fontSize: '100%',
                    width: '100%',
                    height: '100%',
                    verticalAlign: 'baseline',
                    padding: '0',
                    margin: '0',
                    border: '0',
                }}
                src='https://res.cloudinary.com/dd3isrbpv/image/upload/v1680258928/storage/avatars/1679067426167-IsabellaPhillips_bxquac.png' />
        </Box>
    )
}