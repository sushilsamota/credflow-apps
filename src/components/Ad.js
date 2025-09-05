import { Card, CardContent, Typography } from "@mui/material";

export default function Ad() {
    return (
        <div className="adFlexbox">
            <Card>
                <CardContent>
                    <Typography variant="h5">Advertisement</Typography>
                    <Typography variant="body2">This is an advertisement component.</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h5">Advertisement</Typography>
                    <Typography variant="body2">This is an advertisement component.</Typography>
                </CardContent>
            </Card>
            <Card>
                <CardContent>
                    <Typography variant="h5">Advertisement</Typography>
                    <Typography variant="body2">This is an advertisement component.</Typography>
                </CardContent>
            </Card>
        </div>

    );
}