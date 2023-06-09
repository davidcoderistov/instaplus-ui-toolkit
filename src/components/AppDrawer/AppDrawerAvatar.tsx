import Box from '@mui/material/Box'


export default function AppDrawerAvatar() {

    return (
        <Box
            component='span'
            height='24px'
            width='24px'
            position='relative'
            display='block'
            sx={{
                borderBottomLeftRadius: '50%',
                borderTopRightRadius: '50%',
                overflowX: 'hidden',
                borderBottomRightRadius: '50%',
                borderTopLeftRadius: '50%',
                overflowY: 'hidden',
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