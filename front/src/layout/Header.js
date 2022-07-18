import React from 'react';
import {styled, alpha} from '@mui/material/styles';
import HomeIcon from '@mui/icons-material/Home';
import SearchIcon from '@mui/icons-material/Search';
import {useSelector} from "react-redux";
import {AppBar, Box, Button, Toolbar, Typography} from "@mui/material";
import {checkBrowerSize} from "../store/browserSize";
import {fx} from "../styles/common/mixins";
import {$CT, $SB} from "../styles/common/variables";
import {Search, SearchIconWrapper} from "../styles/serachStyle";
import {StyledInputBase} from "../styles/inputStyle";
import {useNavigate} from "react-router-dom";

const Header = () => {

	let navigate = useNavigate();
	function handleClick(link) {
		console.log(link)
		navigate(link);
	}
	const {color} = useSelector(state => state.colorTheme);
	const browserSize = useSelector(state => state.browserSize);

	console.log(color)

	const appBarStyled = {
		backgroundColor : color.first,
	}

	const toolbarStyled = {
		display: 'flex',
		flexDirection: {xs: 'column'},
	}

	const menuListStyled = {
		padding: '0.5rem 2rem',
		fontSize: '0.875rem',
		width: 'max-content',
	}

	const menuStyled = {
		px: '2rem',
		color: 'white',
		lineHeight: 'revert',
	}

	const menuList = ['게시판', '학원검색'];

	return (
		<div style={{marginBottom:'48px'}}>
			<AppBar style={appBarStyled}>
				<Toolbar variant="dense">
					<Box sx={{...fx({$h: $SB, $v: $CT,$w:'nowrap'}), width: '100%'}}>
						<Box sx={{display: 'flex', justifyContent: 'space-between'}}>
							<Box sx={{display: 'flex', alignItems: 'center',cursor:'pointer'}} onClick={()=>{handleClick('/')}}>
								<Typography variant="h6" color="inherit" component="div">
									CodeClear
								</Typography>
							</Box>
							<Box sx={menuListStyled}>
								{menuList.map((menu, idx) =>
									<Button
										key={idx}
										style={menuStyled}>
										{menu}
									</Button>
								)}
							</Box>
						</Box>
						<Box sx={{display: 'flex', alignItems: 'center'}}>
							<Search>
								<SearchIconWrapper>
									<SearchIcon/>
								</SearchIconWrapper>
								<StyledInputBase
									placeholder="학원검색"
									inputProps={{'aria-label': 'search'}}
								/>
							</Search>
							<Button
								style={menuStyled}>
								로그인
							</Button>
						</Box>
					</Box>
				</Toolbar>
			</AppBar>
		</div>
	);
};

export default Header;