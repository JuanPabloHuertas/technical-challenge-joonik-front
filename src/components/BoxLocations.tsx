'use client';
import { Box, Paper } from "@mui/material"
import Grid from '@mui/material/Grid2';
import { useEffect, useState } from "react";
import { CardLocation } from "./CardLocation";

import { styled } from '@mui/material/styles';
import { Location } from "@/interfaces/Location";

const Item = styled(Paper)(({ theme }) => ({
    backgroundColor: '#fff',
    ...theme.typography.body2,
    padding: theme.spacing(1),
    textAlign: 'center',
    color: theme.palette.text.secondary,
    ...theme.applyStyles('dark', {
        backgroundColor: '#1A2027',
    }),
}));

export const BoxLocations = () => {
    const [locations, setLocations] = useState<Location[]>([]);

    useEffect(() => {
        const getLocations = async () => {
            const responseLocations = await fetch(`${process.env.NEXT_PUBLIC_BACKEND_URL}/locations`, { headers: { 'X-API-Key': `${process.env.NEXT_PUBLIC_API_KEY}` } });

            if (!responseLocations.ok) {
                return;
            }

            const locations = await responseLocations.json();
            setLocations(locations.data);
        }

        getLocations();
    }, []);

    return (
        <Box sx={{ flexGrow: 1 }}>
            <Grid container spacing={2}>
                {locations.map((location, indx) => (
                    <Grid size={{ xs: 6, md: 4 }} key={indx}>
                        <Item>
                            <CardLocation location={location} />
                        </Item>
                    </Grid>
                ))}
            </Grid>
        </Box>
    )
}