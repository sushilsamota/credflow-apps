import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';

export default function Profile({ appName }) {
    return (
        <Card className="profile" sx={{ maxWidth: 320, margin: '0 auto', mt: 2 }}>
            <CardContent>
                <Typography variant="h5" component="div" gutterBottom>
                    Profile Information
                </Typography>
                <Typography variant="body2" color="text.secondary">
                    hello,
                </Typography>
                <Typography variant="subtitle2" sx={{ mb: 2 }}>
                    Sushil
                </Typography>
                <Avatar
                    alt="Profile"
                    src="https://play-lh.googleusercontent.com/r2ZbsIr5sQ7Wtl1T6eevyWj4KS7QbezF7JYB9gxQnLWbf0K4kU7qaLNcJLLUh0WG-3pK"
                    sx={{ width: 80, height: 80, margin: '0 auto' }}
                />
            </CardContent>
        </Card>
    );
}