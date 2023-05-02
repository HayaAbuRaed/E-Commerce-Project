import React from 'react'
import Paper from '@mui/material/Paper';
import Stack from '@mui/material/Stack';
import { styled } from '@mui/material/styles';
import { Box, Link, Typography } from '@mui/material';
import Title from '../title';
import FooterSubTitle from './FooterSubTitle';
import SendIcon from '@mui/icons-material/SendOutlined';
import IconButton from '@mui/material/IconButton';
import OutlinedInput from '@mui/material/OutlinedInput';
import InputAdornment from '@mui/material/InputAdornment';
import FormControl from '@mui/material/FormControl';
import InputLabel from '@mui/material/InputLabel';
import QRpath from '../../media/Qrcode.png'
import googlePlayPath from '../../media/google-play-store-logo.png'
import appStorePath from '../../media/appstore.png'
import './master.css'
import SocialMedia from '../socialMedia';

function Footer() {
    const Item = styled(Paper)(({ theme }) => ({
        backgroundColor: theme.palette.mode === 'dark' ? '#1A2027' : '#fff',
        ...theme.typography.body2,
        padding: theme.spacing(0),
        color: theme.palette.text.secondary,
        background: theme.palette.text.primary,
        fontFamily: '"Poppins", sans-serif',
    }));
    
    const LinkItem = styled(Link)(({ theme }) => ({
        ...theme.typography.body1,
        color: theme.palette.text.secondary,
        textDecoration:'none'
    }));


    return (
        <footer>
            <div>
                <Stack
                    direction={{ xs: 'column', sm: 'row' }}
                    spacing={{ xs: 1, sm: 2, md: 4 }}
                    className='column'
                    justifyContent={'space-between'}
                    flexWrap={{xs:'wrap', lg:'noWrap'}}
                >
                    {/* first column */}
                    <Item>
                        <Box sx={{ width: '100%' }}>
                            <Stack spacing={2}>
                                <Item> <Title/> </Item>
                                <Item> <FooterSubTitle title={'Subscribe'}/> </Item>
                                <Item> <Typography varient='p'>Get 10% off your first order</Typography> </Item>
                                <Item>
                                <div>
                                    <FormControl sx={{width: '25ch' }} variant="outlined">
                                    <InputLabel sx={{color:'rgba(250, 250, 250, 0.5)'}}>Enter your email</InputLabel>
                                    <OutlinedInput
                                        id="email"
                                        endAdornment={
                                        <InputAdornment position="end">
                                            <IconButton color='secondary'>
                                                <SendIcon/>
                                            </IconButton>
                                        </InputAdornment>
                                        }
                                        label="email"
                                        sx={{border:'1px white solid'}}
                                    />
                                    </FormControl>
                                </div>
                                </Item>
                            </Stack>
                        </Box>
                    </Item>
                    
                    {/* 2nd column */}
                    <Item>
                        <Box sx={{ width: '100%' }} >
                            <Stack spacing={2}>
                                <Item> <FooterSubTitle title={'Support'}/> </Item>
                                <Item> 
                                    <Typography varient='p'>
                                        111 Bijoy sarani, Dhaka,  DH 1515, Bangladesh.
                                    </Typography> 
                                </Item>
                                <Item> 
                                    <LinkItem href='mailto:exclusive@gmail.com'>
                                        exclusive@gmail.com
                                    </LinkItem> 
                                </Item>
                                <Item>
                                    <LinkItem  href={'tel: +88015-88888-9999'}>
                                        +88015-88888-9999
                                    </LinkItem>
                                </Item>
                            </Stack>
                        </Box>
                    </Item>

                    {/* 3rd column */}
                    <Item>
                        <Box sx={{ width: '100%' }} >
                            <Stack spacing={2}>
                                <Item> <FooterSubTitle title={'Account'}/> </Item>
                                <Item> 
                                    <LinkItem href='#'>
                                        My Account
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        Login / Register
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        Cart
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        Wishlist
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        Shop
                                    </LinkItem> 
                                </Item>
                            </Stack>
                        </Box>
                    </Item>

                    {/* 4th column */}
                    <Item>
                        <Box sx={{ width: '100%' }} >
                            <Stack spacing={2}>
                                <Item> <FooterSubTitle title={'Quick Link'}/> </Item>
                                <Item> 
                                    <LinkItem href='#'>
                                        Privacy Policy
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        Terms Of Use
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        FAQ
                                    </LinkItem> 
                                </Item>
                                <Item> 
                                    <LinkItem  href='#'>
                                        Contact
                                    </LinkItem> 
                                </Item>
                            </Stack>
                        </Box>
                    </Item>

                    {/* 5th column */}
                    <Item>
                        <Box sx={{ width: '100%' }} >
                            <Stack spacing={2}>
                                <Item> <FooterSubTitle title={'Download App'}/> </Item>
                                <Box sx={{ width: 200 }}>
                                    <Stack spacing={{ xs: 1, sm: 2 }} direction="row">
                                        <Item sx={{padding:0}}><img src={QRpath} alt="qr code" /></Item>
                                    <Stack spacing={{ xs: 1, sm: 1 }} direction="column" >
                                        <Item><img src={googlePlayPath} alt="google play" /></Item>
                                        <Item><img src={appStorePath} alt="app store" /></Item>
                                    </Stack>
                                    </Stack>
                                </Box>
                                <Box display={'flex'} justifyContent={'center'}> <SocialMedia facebook={'#'}/></Box> 
                            </Stack>
                        </Box>
                    </Item>

                </Stack>
            </div>
        </footer>
    )
}

export default Footer