import Avatar from '@mui/material/Avatar';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';

export default function Profile({ appName }) {

    const [users, setUsers] = useState({});

    useEffect(() => {
        fetchProfileData();
        console.log("Profile component mounted");
    }, []);

const fetchProfileData = async () => {
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/users');        
        const data = await response.json();
        console.log('Profile data fetched:', data[0]);
        setUsers(data[0]);//one user data getting 
    } catch (error) {
        console.error('Error fetching profile data:', error);
    }           
};


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
                    {users.name}
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