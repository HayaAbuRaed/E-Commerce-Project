import { Box } from '@mui/material'
import React from 'react'
import { IconButton } from "@mui/material";
import Facebook from '@mui/icons-material/FacebookOutlined';
import Twitter from '@mui/icons-material/Twitter';
import Instagram from '@mui/icons-material/Instagram';
import LinkedIn from '@mui/icons-material/LinkedIn';
import { styled } from '@mui/material';

function SocialMedia({facebook,twitter,insta,linkedin}) {
    const Icon = styled(IconButton)(({ theme }) => ({
        ...theme.typography.body1,
        color: theme.palette.text.secondary,
    }));
    return (
        <Box color={'secondary'} display={'flex'} justifyContent={'space-between'} maxWidth={'168px'}>
            <Icon href={facebook}>
                <Facebook />
            </Icon>

            <Icon href={twitter}>
                <Twitter />
            </Icon>

            <Icon href={insta}>
                <Instagram />
            </Icon>

            <Icon href={linkedin}>
                <LinkedIn />
            </Icon>
        </Box>
    )
}

export default SocialMedia
