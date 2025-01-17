'use client';
import { Location } from "@/interfaces/Location";
import { Box, Card, CardContent, CardMedia, Typography } from "@mui/material";

interface CardLocationProps {
    location: Location
}

export const CardLocation = ({ location }: CardLocationProps) => {
    return (
        <Card sx={{ display: 'flex' }}>
            <CardMedia
                component="img"
                sx={{ width: 200 }}
                image={location.image}
                alt={`Image of the location ${location.name}`}
            />
            <Box sx={{ display: 'flex', flexDirection: 'column', flex: 1, justifyContent: 'center' }}>
                <CardContent>
                    <Typography variant="h5">
                        {location.name}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary' }}
                    >
                        {location.code}
                    </Typography>
                    <Typography
                        variant="body1"
                        sx={{ color: 'text.secondary' }}
                    >
                        {new Date(location.creationDate).toLocaleDateString()}
                    </Typography>
                </CardContent>
            </Box>
        </Card>
    )
}