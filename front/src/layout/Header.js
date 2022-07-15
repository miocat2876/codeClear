import React from 'react';
import {
    AppBar,
    Toolbar,
    IconButton,
    Typography,
    Container,
    Grid,
    Card,
    CardContent,
    CardActions,
    Button,
    CardMedia,
    InputBase
} from '@material-ui/core';
import { styled, alpha } from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon  from '@mui/icons-material/Search';
import {useSelector} from "react-redux";
import {Box} from "@mui/material";
import {checkBrowerSize} from "../store/browserSetting";
import {fx} from "../styles/common/mixins";

const Header = () => {

    const Search = styled('div')(({ theme }) => ({
        position: 'relative',
        borderRadius: theme.shape.borderRadius,
        backgroundColor: alpha(theme.palette.common.white, 0.15),
        '&:hover': {
            backgroundColor: alpha(theme.palette.common.white, 0.25),
        },
        marginLeft: 0,
        width: '100%',
        [theme.breakpoints.up('sm')]: {
            marginLeft: theme.spacing(1),
            width: 'auto',
        },
    }));

    const SearchIconWrapper = styled('div')(({ theme }) => ({
        padding: theme.spacing(0, 2),
        height: '100%',
        position: 'absolute',
        pointerEvents: 'none',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
    }));

    const {color} = useSelector(state => state.colorTheme);

    console.log(color)

    const appBarStyled = {
        backgroundColor : color.first,
        position        : 'static',
    }

    const toolbarStyled = {
        display : 'flex',
        flexDirection : {xs : 'column'},

    }

    const menuListStyled = {
        padding : '0.5rem 2rem',
        fontSize : '0.875rem',

    }

    const menuStyled = {
        px : '2rem',
        color : 'white',
    }

    const StyledInputBase = styled(InputBase)(({ theme }) => ({
        color: 'inherit',
        '& .MuiInputBase-input': {
            padding: theme.spacing(1, 1, 1, 0),
            // vertical padding + font size from searchIcon
            paddingLeft: `calc(1em + ${theme.spacing(4)})`,
            transition: theme.transitions.create('width'),
            width: '100%',
            [theme.breakpoints.up('sm')]: {
                width: '12ch',
                '&:focus': {
                    width: '20ch',
                },
            },
        },
    }));

    const menuList = ['게시판','학원게시판'];
    console.log(fx())
    return (
        <>
        <AppBar style={appBarStyled}>
            {/*<Toolbar variant="dense">*/}
            {/*    <IconButton edge="start" color="inherit" aria-label="menu" sx={{ mr: 2 }}>*/}
            {/*    <HomeIcon  />*/}
            {/*    </IconButton>*/}
            {/*    <Typography variant="h6" color="inherit" component="div">*/}
            {/*    CodeClear*/}
            {/*    </Typography>*/}
            {/*</Toolbar>*/}
            <Toolbar variant="dense" style={{}}>
                <Box sx={{display : {lg : 'flex',justifyContent: 'space-between',alignItems : 'center'},width : '100%'}}>
                    <Box sx={{display : {lg : 'flex',justifyContent: 'space-between'}}}>
                        <Typography variant="h6" color="inherit" component="div">
                        CodeClear
                        </Typography>
                        <Box sx={menuListStyled}>
                            {menuList.map((menu,idx) =>
                                <Button
                                    key = {idx}
                                    style={menuStyled}>
                                    {menu}
                                </Button>
                            )}
                        </Box>
                    </Box>
                    <Box>
                        <Search>
                            <SearchIconWrapper>
                                <SearchIcon />
                            </SearchIconWrapper>
                            <StyledInputBase
                                placeholder="Search…"
                                inputProps={{ 'aria-label': 'search' }}
                            />
                        </Search>
                    </Box>
                </Box>
            </Toolbar>
        </AppBar>
        </>
    );
};

export default Header;